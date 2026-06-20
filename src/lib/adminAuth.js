import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto"
import { promisify } from "node:util"
import { eq } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { admins, adminSessions } from "@/src/db/schema.mjs"

const scrypt = promisify(scryptCallback)
export const ADMIN_COOKIE = "gandom_admin_session"
const SESSION_AGE_SECONDS = 60 * 60 * 8

export async function hashPassword(password) {
  const salt = randomBytes(16).toString("hex")
  const derived = await scrypt(password, salt, 64)
  return `scrypt$${salt}$${Buffer.from(derived).toString("hex")}`
}

export async function verifyPassword(password, storedHash) {
  const [algorithm, salt, hash] = String(storedHash).split("$")
  if (algorithm !== "scrypt" || !salt || !hash) return false
  const expected = Buffer.from(hash, "hex")
  const actual = Buffer.from(await scrypt(password, salt, expected.length))
  return expected.length === actual.length && timingSafeEqual(expected, actual)
}

function tokenHash(token) {
  return createHash("sha256").update(token).digest("hex")
}

export async function createAdminSession(adminId) {
  const token = randomBytes(32).toString("base64url")
  const expiresAt = new Date(Date.now() + SESSION_AGE_SECONDS * 1000)
  db.insert(adminSessions).values({ adminId, tokenHash: tokenHash(token), expiresAt }).run()
  return { token, expiresAt, maxAge: SESSION_AGE_SECONDS }
}

export async function getAdminFromToken(token) {
  if (!token) return null
  const session = db.select({
    sessionId: adminSessions.id,
    expiresAt: adminSessions.expiresAt,
    id: admins.id,
    username: admins.username,
    passwordHash: admins.passwordHash,
    isActive: admins.isActive,
    createdAt: admins.createdAt,
    updatedAt: admins.updatedAt,
  }).from(adminSessions)
    .innerJoin(admins, eq(adminSessions.adminId, admins.id))
    .where(eq(adminSessions.tokenHash, tokenHash(token)))
    .get()
  if (!session || session.expiresAt <= new Date() || !session.isActive) {
    if (session) db.delete(adminSessions).where(eq(adminSessions.id, session.sessionId)).run()
    return null
  }
  const { sessionId, expiresAt, ...admin } = session
  return admin
}

export async function deleteAdminSession(token) {
  if (token) db.delete(adminSessions).where(eq(adminSessions.tokenHash, tokenHash(token))).run()
}

export function adminCookieOptions(session) {
  return {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: session.maxAge,
    expires: session.expiresAt,
  }
}

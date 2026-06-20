import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto"
import { promisify } from "node:util"
import prisma from "@/src/lib/prisma"

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
  await prisma.adminSession.create({ data: { adminId, tokenHash: tokenHash(token), expiresAt } })
  return { token, expiresAt, maxAge: SESSION_AGE_SECONDS }
}

export async function getAdminFromToken(token) {
  if (!token) return null
  const session = await prisma.adminSession.findUnique({
    where: { tokenHash: tokenHash(token) },
    include: { admin: true },
  })
  if (!session || session.expiresAt <= new Date() || !session.admin.isActive) {
    if (session) await prisma.adminSession.delete({ where: { id: session.id } }).catch(() => {})
    return null
  }
  return session.admin
}

export async function deleteAdminSession(token) {
  if (token) await prisma.adminSession.deleteMany({ where: { tokenHash: tokenHash(token) } })
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

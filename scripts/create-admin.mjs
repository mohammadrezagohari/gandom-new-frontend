import "dotenv/config"
import { PrismaClient } from "@prisma/client"
import { randomBytes, scrypt as scryptCallback } from "node:crypto"
import { promisify } from "node:util"
import { createInterface } from "node:readline/promises"

const prisma = new PrismaClient()
const scrypt = promisify(scryptCallback)
const args = process.argv.slice(2)
const fromEnv = args.includes("--from-env")
const rl = createInterface({ input: process.stdin, output: process.stdout })

try {
  const username = (fromEnv ? process.env.ADMIN_USERNAME || "admin" : args[0] || await rl.question("Admin username: ")).trim().toLowerCase()
  const password = fromEnv ? process.env.ADMIN_PASSWORD : args[1] || await rl.question("Password (minimum 8 characters): ")
  if (!/^[a-z0-9_.-]{3,50}$/i.test(username)) throw new Error("Invalid username.")
  if (!password || password.length < 8 || password.length > 128) throw new Error("Password must be 8 to 128 characters.")

  const salt = randomBytes(16).toString("hex")
  const derived = await scrypt(password, salt, 64)
  const passwordHash = `scrypt$${salt}$${Buffer.from(derived).toString("hex")}`
  await prisma.admin.upsert({
    where: { username },
    update: { passwordHash, isActive: true },
    create: { username, passwordHash },
  })
  console.log(`Admin "${username}" was saved in the database.`)
} catch (error) {
  console.error(error.message)
  process.exitCode = 1
} finally {
  rl.close()
  await prisma.$disconnect()
}

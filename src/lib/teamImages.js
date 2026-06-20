import { randomUUID } from "node:crypto"
import { mkdir, unlink, writeFile } from "node:fs/promises"
import path from "node:path"

const MAX_IMAGE_SIZE = 5 * 1024 * 1024
const uploadDirectory = path.join(process.cwd(), "public", "uploads", "team")
const managedPattern = /^\/uploads\/team\/[a-f0-9-]+\.(jpg|png|webp)$/

function imageExtension(buffer) {
  if (buffer.length >= 8 && buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "png"
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) return "jpg"
  if (buffer.length >= 12 && buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP") return "webp"
  return null
}

export async function saveTeamImage(file) {
  if (!file || typeof file.arrayBuffer !== "function" || file.size <= 0 || file.size > MAX_IMAGE_SIZE) {
    throw new Error("INVALID_IMAGE")
  }
  const buffer = Buffer.from(await file.arrayBuffer())
  const extension = imageExtension(buffer)
  if (!extension) throw new Error("INVALID_IMAGE")

  await mkdir(uploadDirectory, { recursive: true })
  const filename = `${randomUUID()}.${extension}`
  await writeFile(path.join(uploadDirectory, filename), buffer, { flag: "wx" })
  return `/uploads/team/${filename}`
}

export function isManagedTeamImage(publicPath) {
  return typeof publicPath === "string" && managedPattern.test(publicPath)
}

export async function removeManagedTeamImage(publicPath) {
  if (!isManagedTeamImage(publicPath)) return false
  const filename = path.basename(publicPath)
  const target = path.resolve(uploadDirectory, filename)
  if (path.dirname(target) !== path.resolve(uploadDirectory)) return false
  try {
    await unlink(target)
    return true
  } catch (error) {
    if (error.code === "ENOENT") return false
    throw error
  }
}

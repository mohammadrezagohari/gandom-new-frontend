function clean(value, maxLength, required = false) {
  const result = typeof value === "string" ? value.trim().slice(0, maxLength) : ""
  return required && !result ? null : result
}

export function teamData(body) {
  const name = clean(body?.name, 100, true)
  const family = clean(body?.family, 100, true)
  const position = clean(body?.position, 150, true)
  const about = clean(body?.about, 3000, true)
  const image = clean(body?.image, 500, true)
  const singlePageImage = clean(body?.singlePageImage, 500, true)
  const skills = Array.isArray(body?.skills)
    ? body.skills.map((item) => clean(item, 100)).filter(Boolean).slice(0, 50)
    : []
  if (!name || !family || !position || !about || !image || !singlePageImage || skills.length === 0) return null
  return {
    name,
    family,
    position,
    about,
    image,
    singlePageImage,
    skills: JSON.stringify(skills),
    linkedin: clean(body?.linkedin, 500) || null,
    instagram: clean(body?.instagram, 500) || null,
    joinedAt: clean(body?.joinedAt, 100) || null,
    sortOrder: Number.isInteger(Number(body?.sortOrder)) ? Number(body.sortOrder) : 0,
    isActive: body?.isActive !== false,
  }
}

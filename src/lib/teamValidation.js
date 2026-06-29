import {
  normalizeTranslationArrayRecord,
  normalizeTranslationRecord,
  stringifyTranslations,
} from "./localizedContent"

function clean(value, maxLength, required = false) {
  const result = typeof value === "string" ? value.trim().slice(0, maxLength) : ""
  return required && !result ? null : result
}

export function teamData(body) {
  const fallbackName = clean(body?.name, 100)
  const fallbackFamily = clean(body?.family, 100)
  const fallbackPosition = clean(body?.position, 150)
  const fallbackAbout = clean(body?.about, 3000)
  const fallbackJoinedAt = clean(body?.joinedAt, 100)
  const legacySkills = Array.isArray(body?.skills)
    ? body.skills.map((item) => clean(item, 100)).filter(Boolean).slice(0, 50)
    : []

  const nameTranslations = normalizeTranslationRecord(body?.nameTranslations, { maxLength: 100, required: true, fallback: fallbackName })
  const familyTranslations = normalizeTranslationRecord(body?.familyTranslations, { maxLength: 100, required: true, fallback: fallbackFamily })
  const positionTranslations = normalizeTranslationRecord(body?.positionTranslations, { maxLength: 150, required: true, fallback: fallbackPosition })
  const aboutTranslations = normalizeTranslationRecord(body?.aboutTranslations, { maxLength: 3000, required: true, fallback: fallbackAbout })
  const skillsTranslations = normalizeTranslationArrayRecord(body?.skillsTranslations, { maxItemLength: 100, maxItems: 50, required: true, fallback: legacySkills })
  const joinedAtTranslations = normalizeTranslationRecord(body?.joinedAtTranslations, { maxLength: 100, fallback: fallbackJoinedAt })
  const image = clean(body?.image, 500, true)
  const singlePageImage = clean(body?.singlePageImage, 500, true)

  if (!nameTranslations || !familyTranslations || !positionTranslations || !aboutTranslations || !skillsTranslations || !image || !singlePageImage) {
    return null
  }

  return {
    name: nameTranslations.en || nameTranslations.fa,
    family: familyTranslations.en || familyTranslations.fa,
    position: positionTranslations.en || positionTranslations.fa,
    about: aboutTranslations.en || aboutTranslations.fa,
    skills: JSON.stringify(skillsTranslations.en?.length ? skillsTranslations.en : skillsTranslations.fa),
    nameTranslations: stringifyTranslations(nameTranslations),
    familyTranslations: stringifyTranslations(familyTranslations),
    positionTranslations: stringifyTranslations(positionTranslations),
    aboutTranslations: stringifyTranslations(aboutTranslations),
    skillsTranslations: stringifyTranslations(skillsTranslations),
    joinedAt: joinedAtTranslations.en || joinedAtTranslations.fa || null,
    joinedAtTranslations: stringifyTranslations(joinedAtTranslations),
    image,
    singlePageImage,
    linkedin: clean(body?.linkedin, 500) || null,
    instagram: clean(body?.instagram, 500) || null,
    sortOrder: Number.isInteger(Number(body?.sortOrder)) ? Number(body.sortOrder) : 0,
    isActive: body?.isActive !== false,
  }
}

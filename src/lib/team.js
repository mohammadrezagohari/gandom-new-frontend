import {
  normalizeLocale,
  parseTranslationArrayRecord,
  parseTranslationRecord,
  pickLocalizedArray,
  pickLocalizedText,
} from "./localizedContent"

export function parseSkills(value) {
  try {
    const skills = JSON.parse(value || "[]")
    return Array.isArray(skills) ? skills.filter((item) => typeof item === "string") : []
  } catch {
    return []
  }
}

export function serializeTeamMember(member, locale = "en") {
  const normalizedLocale = normalizeLocale(locale)
  const fallbackSkills = parseSkills(member.skills)
  const nameTranslations = parseTranslationRecord(member.nameTranslations, member.name)
  const familyTranslations = parseTranslationRecord(member.familyTranslations, member.family)
  const positionTranslations = parseTranslationRecord(member.positionTranslations, member.position)
  const aboutTranslations = parseTranslationRecord(member.aboutTranslations, member.about)
  const skillsTranslations = parseTranslationArrayRecord(member.skillsTranslations, fallbackSkills)
  const joinedAtTranslations = parseTranslationRecord(member.joinedAtTranslations, member.joinedAt || "")
  const leftAtTranslations = parseTranslationRecord(member.leftAtTranslations, "")

  return {
    ...member,
    locale: normalizedLocale,
    nameTranslations,
    familyTranslations,
    positionTranslations,
    aboutTranslations,
    skillsTranslations,
    joinedAtTranslations,
    leftAtTranslations,
    name: pickLocalizedText(nameTranslations, normalizedLocale, member.name),
    family: pickLocalizedText(familyTranslations, normalizedLocale, member.family),
    position: pickLocalizedText(positionTranslations, normalizedLocale, member.position),
    about: pickLocalizedText(aboutTranslations, normalizedLocale, member.about),
    skills: pickLocalizedArray(skillsTranslations, normalizedLocale, fallbackSkills),
    joinedAt: pickLocalizedText(joinedAtTranslations, normalizedLocale, member.joinedAt || ""),
    leftAt: pickLocalizedText(leftAtTranslations, normalizedLocale, ""),
  }
}

export function parseSkills(value) {
  try {
    const skills = JSON.parse(value || "[]")
    return Array.isArray(skills) ? skills.filter((item) => typeof item === "string") : []
  } catch {
    return []
  }
}

export function serializeTeamMember(member) {
  return { ...member, skills: parseSkills(member.skills) }
}

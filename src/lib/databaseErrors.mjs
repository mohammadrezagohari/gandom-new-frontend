export function isDuplicateEntry(error) {
  let current = error
  const visited = new Set()

  while (current && !visited.has(current)) {
    if (current.code === "ER_DUP_ENTRY" || Number(current.errno) === 1062) return true
    visited.add(current)
    current = current.cause
  }

  return false
}

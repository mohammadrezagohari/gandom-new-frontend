const buckets = globalThis.__rateLimitBuckets || new Map()
if (process.env.NODE_ENV !== "production") globalThis.__rateLimitBuckets = buckets

export function isRateLimited(key, limit, windowMs) {
  const now = Date.now()
  const current = buckets.get(key)
  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return false
  }
  current.count += 1
  return current.count > limit
}

export function requestIp(request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") || "unknown"
}

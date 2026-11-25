// Fixed-window, in-memory rate limiter keyed by client IP.
// PoC-grade: each serverless instance keeps its own counts, so the effective
// limit can be higher than configured under scale-out. Good enough to stop a
// single visitor from looping requests; swap for a shared store if needed.

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 10;

const hits = new Map<string, { count: number; resetAt: number }>();

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

/** Returns seconds to wait when the caller is over the limit, otherwise null. */
export function checkRateLimit(key: string, now = Date.now()): number | null {
  const entry = hits.get(key);

  if (!entry || entry.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    if (hits.size > 5000) {
      hits.forEach((v, k) => {
        if (v.resetAt <= now) hits.delete(k);
      });
    }
    return null;
  }

  if (entry.count >= MAX_REQUESTS) {
    return Math.ceil((entry.resetAt - now) / 1000);
  }

  entry.count += 1;
  return null;
}

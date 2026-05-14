import { NextResponse, type NextRequest } from "next/server"

const CANONICAL_HOST = "cowartind.com"

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") || "").toLowerCase()
  const response = NextResponse.next()
  const isCanonical = host === CANONICAL_HOST || host === `www.${CANONICAL_HOST}`
  if (!isCanonical) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow")
  }
  return response
}

export const config = {
  matcher: ["/((?!_next/|favicon.ico|logo.jpg|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico)).*)"],
}

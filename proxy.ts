import { NextResponse, type NextRequest } from "next/server"

const CANONICAL_HOST = "cowartind.com"
const AUTH_COOKIE = "admin-auth"

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") || "").toLowerCase()
  const pathname = request.nextUrl.pathname

  // Admin gate — /admin/* requires an auth cookie matching ADMIN_PASSWORD.
  // The login route + login API are exempt so the user can actually log in.
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const cookie = request.cookies.get(AUTH_COOKIE)?.value
    const expected = process.env.ADMIN_PASSWORD
    if (!cookie || !expected || cookie !== expected) {
      const url = request.nextUrl.clone()
      url.pathname = "/admin/login"
      url.searchParams.set("next", pathname)
      const response = NextResponse.redirect(url)
      response.headers.set("X-Robots-Tag", "noindex, nofollow")
      return response
    }
  }

  const response = NextResponse.next()

  // Noindex on every /admin/* route, even after auth passes. Internal-only.
  if (pathname.startsWith("/admin")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow")
  }

  // Noindex on non-canonical hosts (preview deploys, etc.)
  const isCanonical = host === CANONICAL_HOST || host === `www.${CANONICAL_HOST}`
  if (!isCanonical) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow")
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/|favicon.ico|logo.jpg|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico)).*)"],
}

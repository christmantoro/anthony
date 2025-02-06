import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Create a new URL for the redirect
  const url = new URL('/', request.url)
  // Return a 307 Temporary Redirect
  return NextResponse.redirect(url, { status: 307 })
}

// Run middleware on both /id and /en paths
export const config = {
  matcher: [
    // Match /en and /id exactly, not any nested paths
    '/en/:path*',
    '/id/:path*'
  ]
}

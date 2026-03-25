import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const slug = hostname.split('.')[0]

  // Skip main domain, www, localhost, and Vercel preview URLs
  if (
    slug === '121212' ||
    slug === 'www' ||
    hostname.includes('vercel.app') ||
    hostname.includes('localhost')
  ) {
    return NextResponse.next()
  }

  // Rewrite subdomain to /hub/[slug]
  const url = request.nextUrl.clone()
  url.pathname = `/hub/${slug}${url.pathname === '/' ? '' : url.pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|icon.svg|favicon.ico).*)'],
}

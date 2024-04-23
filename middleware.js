import { NextResponse } from 'next/server';

export function middleware(request) {
  // return Response.json({ message: 'Hello, Next.js!' });
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/tasks/:path*'],
};

import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // return NextResponse.redirect('https://www.naver.com', 302)

  const response = NextResponse.next();

  // const cookieFromRequest = req.cookies['MyMemberInfo'];

  return response;
}

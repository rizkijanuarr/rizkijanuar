import { NextResponse } from 'next/server';

export async function middleware(request) {
  const notionUrl = 'https://verbose-shade-71e.notion.site/Rizki-Januar-I-1e064c9e59f48035ad98fe03a78b9eea';

  const response = await fetch(notionUrl, {
    headers: {
      'User-Agent': request.headers.get('user-agent') || '',
      'Accept': request.headers.get('accept') || '*/*',
    },
  });

  const contentType = response.headers.get('content-type') || 'text/html';
  const body = await response.text();

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': contentType,
    },
  });
}

export const config = {
  matcher: '/',
};

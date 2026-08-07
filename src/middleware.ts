import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);
export default function middleware(request: NextRequest) {
    const locale = request.nextUrl.pathname.split('/')[1];
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-gandom-locale', locale === 'fa' ? 'fa' : 'en');
    return handleI18nRouting(new NextRequest(request.url, {headers: requestHeaders}));
}
export const config = {
    matcher: ['/', '/(fa|en)/:path*']
};

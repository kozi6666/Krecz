import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['pl', 'de'],
 
  defaultLocale: 'pl'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|pl)/:path*']
};
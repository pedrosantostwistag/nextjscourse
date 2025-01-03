import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// initialize the next auth with the auth config
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // to make auth run on all pages except apis and static assets
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

// protected routes will not render if the user is not authenticated. good for performance and security
import { APP_AUTH_COOKIE } from '#shared/constants/cookie';
import {
  auth_routes,
  home_routes,
  private_routes,
  public_routes,
} from '#shared/constants/routes';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const appAuth = request.cookies.get(APP_AUTH_COOKIE);
  const isInPublicRoute = public_routes.some(
    (route) => request.nextUrl.pathname === route,
  );
  const isInPrivateRoute = private_routes.some(
    (route) => request.nextUrl.pathname === route,
  );
  // console.log('🚀 ~ file: middleware.ts:18 ~ middleware ~ isInPrivateRoute:', {
  //   appAuth: appAuth?.value,
  //   isInPublicRoute,
  //   isInPrivateRoute,
  // });

  // if NOT authed && in private routes -> redirect to login
  if (!appAuth?.value && isInPrivateRoute) {
    return NextResponse.redirect(new URL(auth_routes.login, request.url));
  }

  // if authed && in public route -> redirect to home
  if (appAuth?.value && isInPublicRoute) {
    return NextResponse.redirect(new URL(home_routes.root, request.url));
  }
}

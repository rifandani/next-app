import { loginApiSuccessResponseSchema } from '#/modules/auth/api/auth.schema';
import { cookies } from 'next/headers';
import 'server-only';
import { APP_AUTH_COOKIE } from '../constants/cookie';

export const cookieApi = {
  getAppAuthCookie: () => {
    const cookie = cookies();
    const appAuthCookie = cookie.get(APP_AUTH_COOKIE);
    const appAuth = JSON.parse(appAuthCookie?.value ?? '');

    const user = loginApiSuccessResponseSchema.safeParse(appAuth);
    if (!user.success) {
      throw user.error;
    }

    return user.data;
  },
} as const;

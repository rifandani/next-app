import { envSchema } from '#shared/api/env.schema';
import { APP_AUTH_COOKIE } from '#shared/constants/cookie';
import { cookies } from 'next/headers';
import 'server-only';
import { fromZodError } from 'zod-validation-error';
import { loginApiResponseSchema, loginSchema } from './auth.schema';

/**
 * all of these should be happen on the server
 */
export const authApi = {
  /**
   * parse env -> parse input -> fetch -> parse API response -> set APP_AUTH_COOKIE
   */
  login: async (formData: FormData) => {
    // should throw error if `env` is not in correct schema
    const env = envSchema.parse(process.env);

    // if `formData` is not in correct `loginSchema`, then return error object message
    const formDataObject = Object.fromEntries(formData);
    const payload = loginSchema.safeParse(formDataObject);
    if (!payload.success) {
      return { message: fromZodError(payload.error).message };
    }

    const response = await fetch(`${env.API_BASE_URL}/auth/login`, {
      cache: 'no-store', // do not store, we store the token to cookies
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload.data),
    });
    const json = await response.json();

    // if `json` is not in correct `loginApiResponseSchema`, then return error object message
    const user = loginApiResponseSchema.safeParse(json);
    if (!user.success) {
      return { message: fromZodError(user.error).message };
    }

    // set APP_AUTH cookies
    const cookie = cookies();
    if (response.status === 200 && 'token' in user.data) {
      cookie.set(APP_AUTH_COOKIE, JSON.stringify(user.data), {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });
    }

    return user.data;
  },
  /**
   * delete APP_AUTH_COOKIE
   */
  logout: () => {
    const cookie = cookies();
    cookie.delete(APP_AUTH_COOKIE);
  },
} as const;

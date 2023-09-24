'use server';

import { auth_routes, home_routes } from '#/modules/shared/constants/routes';
import { authApi } from '#auth/api/auth.api';
import { redirect } from 'next/navigation';

/**
 * server actions.
 * wrap this in `useFormState`.
 */
export async function login(_prevState: any, formData: FormData) {
  const response = await authApi.login(formData);

  // on error
  if ('message' in response) {
    return response;
  }

  return redirect(home_routes.root);
}

/**
 * server actions.
 */
export async function logout(_formData: FormData) {
  authApi.logout();

  return redirect(auth_routes.login);
}

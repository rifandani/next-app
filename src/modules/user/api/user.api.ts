import { envSchema } from '#shared/api/env.schema';
import { simplifyZodError } from '#shared/utils/helper';
import 'server-only';
import { userApiSuccessResponseSchema } from './user.schema';

export const userTags = {
  list: 'users',
  detail: (id: number) => `users-${id}`,
} as const;

export const userApi = {
  getUser: async (userId: number) => {
    // make sure env is in correct schema
    const env = envSchema.parse(process.env);

    const response = await fetch(`${env.API_BASE_URL}/users/${userId}`, {
      next: {
        tags: [userTags.list],
      },
    });
    const json = await response.json();

    const user = userApiSuccessResponseSchema.safeParse(json);
    if (!user.success) {
      return simplifyZodError(user.error);
    }

    return user.data;
  },
} as const;

import { z } from 'zod';

export const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  API_BASE_URL: z.string().url(),

  X_URL: z.string().url(),
  X_NUMBER: z.string(),
  X_KEY: z.string(),
});

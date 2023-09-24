import { z } from 'zod';

export const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  API_BASE_URL: z.string().url(),
});

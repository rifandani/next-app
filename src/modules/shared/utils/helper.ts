import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ZodError } from 'zod';
import { FromZodErrorOptions, fromZodError } from 'zod-validation-error';

/**
 * wrapper around `twMerge` so that we can use an object as the parameters
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * simple zod error message wrapped in an object
 */
export function simplifyZodError<T>(
  error: ZodError<T>,
  options?: FromZodErrorOptions,
) {
  return { message: fromZodError(error, options).message };
}

'use client';

import { login } from '#auth/actions/auth.action';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '#shared/components/ui/alert';
import { Button } from '#shared/components/ui/button';
import { Input } from '#shared/components/ui/input';
import { Label } from '#shared/components/ui/label';
import { Icon } from '@iconify/react';
import {
  //@ts-ignore
  experimental_useFormState as useFormState,
  experimental_useFormStatus as useFormStatus,
} from 'react-dom';

const errorInitialState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="mt-8 w-full normal-case"
      disabled={pending}
    >
      {pending ? 'Loading...' : 'Login'}
    </Button>
  );
}

/**
 * client-side rendered
 */
export function Form() {
  const [state, formAction] = useFormState(login, errorInitialState);

  return (
    <form action={formAction} className="form-control pt-3 md:pt-8">
      {/* username */}
      <fieldset className="group/username form-control pt-4">
        <Label htmlFor="username">Username</Label>

        <Input
          id="username"
          name="username"
          type="text"
          aria-label="textbox-username"
          aria-labelledby="#username"
          // aria-invalid={!!form.formState.errors.username?.message}
          className="input input-primary aria-[invalid='true']:input-error peer mt-1 shadow-md"
          placeholder="Type your username..."
          required
          minLength={3}
        />

        {/* {form.formState.errors.username?.message && (
          <p role="alert" className="text-error flex pt-2">
            {t('errorMinLength', { field: 'username', length: '3' })}
          </p>
        )} */}
      </fieldset>

      {/* password */}
      <fieldset className="group/password form-control pt-4">
        <Label htmlFor="password">Password</Label>

        <Input
          id="password"
          name="password"
          type="password"
          aria-label="textbox-password"
          aria-labelledby="#password"
          // aria-invalid={!!form.formState.errors.password?.message}
          className="input input-primary aria-[invalid='true']:input-error peer mt-1 shadow-md"
          placeholder="Type your password..."
          required
          minLength={6}
        />

        {/* {form.formState.errors.password?.message && (
          <p role="alert" className="text-error flex pt-2">
            {t('errorMinLength', { field: 'password', length: '6' })}
          </p>
        )} */}
      </fieldset>

      {state.message && (
        <Alert variant="destructive" className="mt-4">
          <Icon icon="lucide:alert-circle" className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      <SubmitButton />
    </form>
  );
}

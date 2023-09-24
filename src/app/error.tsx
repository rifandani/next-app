'use client';

import { Button } from '#/modules/shared/components/ui/button';
import { Boundary } from '#shared/components/molecules/boundary';

type Props = {
  error: Error;
  reset: () => void;
};

export default function RootError({ error, reset }: Props) {
  return (
    <Boundary
      className="mx-5 mt-10"
      size="small"
      labels={['./error.tsx']}
      color="destructive"
    >
      <div className="text-destructive">
        <h2 className="text-lg font-bold">Error</h2>
        <p className="pb-4 pt-2 text-sm">{error?.message}</p>

        <Button onClick={reset}>Try Again</Button>
      </div>
    </Boundary>
  );
}

'use client';

import { Boundary } from '#shared/components/molecules/boundary';
import { Button } from '#shared/components/ui/button';

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
        <p className="pb-4 pt-2 text-sm">
          {JSON.stringify(error?.message, null, 2)}
        </p>

        <Button onClick={reset}>Try Again</Button>
      </div>
    </Boundary>
  );
}

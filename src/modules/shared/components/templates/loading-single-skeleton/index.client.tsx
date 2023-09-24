'use client';

import { Skeleton } from '#shared/components/ui/skeleton';
import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

/**
 * Loading skeleton template for client-side rendered component to solve hydration mismatch.
 */
export function LoadingSingleSkeleton({
  children,
  ...rest
}: PropsWithChildren<ComponentPropsWithoutRef<typeof Skeleton>>) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton {...rest} />;

  return children;
}

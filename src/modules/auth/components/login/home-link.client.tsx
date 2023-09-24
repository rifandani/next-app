'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';

/**
 * client-side rendered
 */
export function HomeLink() {
  return (
    <Link
      href="/"
      className="relative cursor-pointer rounded-lg p-2 hover:bg-primary-foreground"
    >
      <Icon icon="lucide:home" height="1.5em" />
    </Link>
  );
}

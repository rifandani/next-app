'use client';

import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export function LogoLink() {
  const { resolvedTheme } = useTheme();

  return (
    <Link href="/" className="hidden items-center space-x-4 sm:flex">
      <Icon
        icon="logos:nextjs"
        fill={resolvedTheme === 'dark' ? 'white' : ''}
      />
      <p className="text-lg tracking-widest">XIII App</p>
    </Link>
  );
}

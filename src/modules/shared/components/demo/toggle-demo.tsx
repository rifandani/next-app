'use client'; // can be not

import { Toggle } from '#shared/components/ui/toggle';
import { Icon } from '@iconify/react';

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Icon icon="lucide:italic" className="mr-2 h-4 w-4" />
      Italic
    </Toggle>
  );
}

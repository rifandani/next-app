'use client';

import { Button } from '#shared/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '#shared/components/ui/popover';
import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';

/**
 * `theme` need to access `localStorage` which is browser APIs, therefore it needs to be client-side rendered
 *
 * `theme` could cause hydration mismatch.
 * in server "", in client "light" | "dark" | "system"
 */
export function ThemePickerPopover() {
  const { setTheme, theme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="flex items-center space-x-2">
          <Icon icon="mdi:theme-light-dark" />
          <p className="capitalize">{theme}</p>
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="flex w-fit flex-col space-y-2">
        <Button
          variant="ghost"
          className="flex items-center justify-start space-x-2"
          onClick={() => setTheme('light')}
        >
          <Icon icon="lucide:sun" />
          <p>Light</p>
        </Button>
        <Button
          variant="ghost"
          className="flex items-center justify-start space-x-2"
          onClick={() => setTheme('dark')}
        >
          <Icon icon="lucide:moon" />
          <p>Dark</p>
        </Button>
        <Button
          variant="ghost"
          className="flex items-center justify-start space-x-2"
          onClick={() => setTheme('system')}
        >
          <Icon icon="lucide:laptop-2" />
          <p>System</p>
        </Button>
      </PopoverContent>
    </Popover>
  );
}

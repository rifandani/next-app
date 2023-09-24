'use client';

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '#shared/components/ui/alert';
import { Icon } from '@iconify/react';

export function AlertDemo() {
  return (
    <Alert variant="destructive">
      <Icon icon="lucide:alert-circle" className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  );
}

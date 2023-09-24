'use client';

import { Button } from '#shared/components/ui/button';
import { ToastAction } from '#shared/components/ui/toast';
import { useToast } from '#shared/components/ui/use-toast';

export function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }}
    >
      Show Toast
    </Button>
  );
}

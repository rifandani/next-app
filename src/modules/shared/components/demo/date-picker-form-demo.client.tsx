'use client';

import { Button } from '#shared/components/ui/button';
import { Calendar } from '#shared/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '#shared/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '#shared/components/ui/popover';
import { toast } from '#shared/components/ui/use-toast';
import { cn } from '#shared/utils/helper';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export function DatePickerFormDemo() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: FormSchema) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <Icon
                        icon="lucide:calendar-icon"
                        className="ml-auto h-4 w-4 opacity-50"
                      />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '#shared/components/ui/accordion';
import { Button } from '#shared/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '#shared/components/ui/sheet';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { ROUTES } from './constant';

export function SidebarSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex sm:hidden">
          <Icon icon="lucide:menu" className="h-4 w-4" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col sm:hidden">
        <SheetHeader>
          <SheetTitle>
            <Icon icon="logos:nextjs" />
          </SheetTitle>
          <SheetDescription className="text-left text-lg tracking-widest">
            XIII App
          </SheetDescription>
        </SheetHeader>

        <Accordion type="multiple" className="flex grow flex-col py-4">
          <AccordionItem value="routes">
            <AccordionTrigger className="hover:no-underline">
              Routes
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-2 pb-4 pt-0">
                {ROUTES.map((route) => (
                  <Link
                    key={route.title}
                    href={route.href}
                    className="rounded-lg py-2 pl-2 hover:bg-slate-100"
                  >
                    {route.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}

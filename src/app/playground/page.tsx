import { AccordionDemo } from '#/modules/shared/components/demo/accordion-demo';
import { AlertDemo } from '#/modules/shared/components/demo/alert-demo.client';
import { AlertDialogDemo } from '#/modules/shared/components/demo/alert-dialog-demo';
import { AspectRatioDemo } from '#/modules/shared/components/demo/aspect-ratio-demo';
import { AvatarDemo } from '#/modules/shared/components/demo/avatar-demo';
import { CardDemo } from '#/modules/shared/components/demo/card-demo';
import { CheckboxDemo } from '#/modules/shared/components/demo/checkbox-demo.client';
import { ContextMenuDemo } from '#/modules/shared/components/demo/context-menu-demo';
import { DataTableDemo } from '#/modules/shared/components/demo/data-table-demo.client';
import { DatePickerFormDemo } from '#/modules/shared/components/demo/date-picker-form-demo.client';
import { DialogDemo } from '#/modules/shared/components/demo/dialog-demo';
import { HoverCardDemo } from '#/modules/shared/components/demo/hover-card-demo.client';
import { InputDemo } from '#/modules/shared/components/demo/input-demo';
import { MenubarDemo } from '#/modules/shared/components/demo/menubar-demo';
import { PopoverDemo } from '#/modules/shared/components/demo/popover-demo';
import { ProgressDemo } from '#/modules/shared/components/demo/progress-demo.client';
import { RadioGroupDemo } from '#/modules/shared/components/demo/radio-group-demo';
import { SeparatorDemo } from '#/modules/shared/components/demo/separator-demo';
import { SheetDemo } from '#/modules/shared/components/demo/sheet-demo.client';
import { SkeletonDemo } from '#/modules/shared/components/demo/skeleton-demo';
import { SliderDemo } from '#/modules/shared/components/demo/slider-demo';
import { SwitchDemo } from '#/modules/shared/components/demo/switch-demo';
import { TableDemo } from '#/modules/shared/components/demo/table-demo';
import { TabsDemo } from '#/modules/shared/components/demo/tabs-demo';
import { TextareaDemo } from '#/modules/shared/components/demo/textarea-demo';
import { ToastDemo } from '#/modules/shared/components/demo/toast-demo.client';
import { ToggleDemo } from '#/modules/shared/components/demo/toggle-demo';
import { TooltipDemo } from '#/modules/shared/components/demo/tooltip-demo';
import { CalendarDemo } from '#shared/components/demo/calendar-demo.client';
import { CollapsibleDemo } from '#shared/components/demo/collapsible-demo.client';
import { ComboboxDemo } from '#shared/components/demo/combobox-demo.client';
import { CommandDialogDemo } from '#shared/components/demo/command-dialog-demo.client';
import { DateRangePicker } from '#shared/components/demo/date-range-picker.client';
import { DropdownMenuDemo } from '#shared/components/demo/dropdown-menu-demo.client';
import { NavigationMenuDemo } from '#shared/components/demo/navigation-menu-demo.client';
import { ScrollAreaDemo } from '#shared/components/demo/scroll-area-demo';
import { Badge } from '#shared/components/ui/badge';
import { Button } from '#shared/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Playground',
  description: 'List of shadcn-ui components demo',
  openGraph: {
    title: 'Playground',
    images: [`/api/og?title=Playground`],
  },
};

export default function Playground() {
  return (
    <main className="flex min-h-screen flex-col space-y-5 p-5">
      <AccordionDemo />

      <AlertDemo />

      <AlertDialogDemo />

      <AspectRatioDemo />

      <AvatarDemo />

      <Badge variant="warning" className="w-fit">
        Warning
      </Badge>

      <Button variant="secondary">Secondary</Button>

      <CalendarDemo />

      <CardDemo />

      <CheckboxDemo />

      <CollapsibleDemo />

      <ComboboxDemo />

      <CommandDialogDemo />

      <ContextMenuDemo />

      <DataTableDemo />

      <DateRangePicker />

      <DatePickerFormDemo />

      <DialogDemo />

      <DropdownMenuDemo />

      <HoverCardDemo />

      <InputDemo />

      <MenubarDemo />

      <NavigationMenuDemo />

      <PopoverDemo />

      <ProgressDemo />

      <RadioGroupDemo />

      <ScrollAreaDemo />

      <SeparatorDemo />

      <SheetDemo />

      <SkeletonDemo />

      <SliderDemo />

      <SwitchDemo />

      <TableDemo />

      <TabsDemo />

      <TextareaDemo />

      <ToastDemo />

      <ToggleDemo />

      <TooltipDemo />
    </main>
  );
}

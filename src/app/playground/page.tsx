import { AccordionDemo } from '#shared/components/demo/accordion-demo';
import { AlertDemo } from '#shared/components/demo/alert-demo.client';
import { AlertDialogDemo } from '#shared/components/demo/alert-dialog-demo';
import { AspectRatioDemo } from '#shared/components/demo/aspect-ratio-demo';
import { AvatarDemo } from '#shared/components/demo/avatar-demo';
import { CalendarDemo } from '#shared/components/demo/calendar-demo.client';
import { CardDemo } from '#shared/components/demo/card-demo';
import { CheckboxDemo } from '#shared/components/demo/checkbox-demo.client';
import { CollapsibleDemo } from '#shared/components/demo/collapsible-demo.client';
import { ComboboxDemo } from '#shared/components/demo/combobox-demo.client';
import { CommandDialogDemo } from '#shared/components/demo/command-dialog-demo.client';
import { ContextMenuDemo } from '#shared/components/demo/context-menu-demo';
import { DataTableDemo } from '#shared/components/demo/data-table-demo.client';
import { DatePickerFormDemo } from '#shared/components/demo/date-picker-form-demo.client';
import { DateRangePicker } from '#shared/components/demo/date-range-picker.client';
import { DialogDemo } from '#shared/components/demo/dialog-demo';
import { DropdownMenuDemo } from '#shared/components/demo/dropdown-menu-demo.client';
import { HoverCardDemo } from '#shared/components/demo/hover-card-demo.client';
import { InputDemo } from '#shared/components/demo/input-demo';
import { MenubarDemo } from '#shared/components/demo/menubar-demo';
import { NavigationMenuDemo } from '#shared/components/demo/navigation-menu-demo.client';
import { PopoverDemo } from '#shared/components/demo/popover-demo';
import { ProgressDemo } from '#shared/components/demo/progress-demo.client';
import { RadioGroupDemo } from '#shared/components/demo/radio-group-demo';
import { ScrollAreaDemo } from '#shared/components/demo/scroll-area-demo';
import { SeparatorDemo } from '#shared/components/demo/separator-demo';
import { SheetDemo } from '#shared/components/demo/sheet-demo.client';
import { SkeletonDemo } from '#shared/components/demo/skeleton-demo';
import { SliderDemo } from '#shared/components/demo/slider-demo';
import { SwitchDemo } from '#shared/components/demo/switch-demo';
import { TableDemo } from '#shared/components/demo/table-demo';
import { TabsDemo } from '#shared/components/demo/tabs-demo';
import { TextareaDemo } from '#shared/components/demo/textarea-demo';
import { ToastDemo } from '#shared/components/demo/toast-demo.client';
import { ToggleDemo } from '#shared/components/demo/toggle-demo';
import { TooltipDemo } from '#shared/components/demo/tooltip-demo';
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

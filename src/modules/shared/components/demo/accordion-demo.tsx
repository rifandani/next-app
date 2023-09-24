import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '#shared/components/ui/accordion';

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          <div className="pb-4 pt-0">
            Yes. It adheres to the WAI-ARIA design pattern.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          <div className="pb-4 pt-0">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          <div className="pb-4 pt-0">
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

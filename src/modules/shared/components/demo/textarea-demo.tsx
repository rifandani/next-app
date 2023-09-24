import { Label } from '#shared/components/ui/label';
import { Textarea } from '#shared/components/ui/textarea';

export function TextareaDemo() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  );
}

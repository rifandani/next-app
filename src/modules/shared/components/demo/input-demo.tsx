import { Input } from '#shared/components/ui/input';
import { Label } from '#shared/components/ui/label';

export function InputDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  );
}

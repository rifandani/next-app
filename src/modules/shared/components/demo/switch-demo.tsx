import { Label } from '#shared/components/ui/label';
import { Switch } from '#shared/components/ui/switch';

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '#shared/components/ui/avatar';

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
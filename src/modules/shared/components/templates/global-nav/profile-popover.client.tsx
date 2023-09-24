'use client';

import { logout } from '#auth/actions/auth.action';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '#shared/components/ui/avatar';
import { Button } from '#shared/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '#shared/components/ui/popover';
import { UserApiSuccessResponseSchema } from '#user/api/user.schema';

type Props = {
  user: UserApiSuccessResponseSchema;
};

export function ProfilePopover({ user }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer hover:shadow-md">
          <AvatarImage src={user.image} alt={user.username} />
          <AvatarFallback className="uppercase">
            {user.firstName.slice(0, 1)}
            {user.lastName.slice(0, 1)}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>

      <PopoverContent
        asChild
        align="end"
        className="flex w-fit flex-col space-y-4"
      >
        <form action={logout}>
          <Button variant="destructive" type="submit">
            Logout
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}

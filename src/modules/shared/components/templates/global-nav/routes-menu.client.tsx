'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '#shared/components/ui/navigation-menu';
import Link from 'next/link';
import { IterableElement } from 'type-fest';
import { ROUTES } from './constant';

function ListItem({
  children,
  href,
  title,
}: React.PropsWithChildren<IterableElement<typeof ROUTES>>) {
  return (
    <li>
      <Link href={href} passHref legacyBehavior>
        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="font line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </NavigationMenuLink>
      </Link>
    </li>
  );
}

export function RoutesMenu() {
  return (
    <NavigationMenu className="hidden w-full sm:flex">
      <NavigationMenuList className="w-full">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Routes</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
              {ROUTES.map((route) => (
                <ListItem
                  key={route.title}
                  href={route.href}
                  title={route.title}
                  description={route.description}
                >
                  {route.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuViewport className="origin-top-left" />
    </NavigationMenu>
  );
}

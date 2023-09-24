import { LogoLink } from './logo-link.client';
import { ProfilePopover } from './profile-popover.client';
import { RoutesMenu } from './routes-menu.client';
import { SidebarSheet } from './sidebar-sheet.client';
import { ThemePickerPopover } from './theme-picker-popover.client';

export const GlobalNav = {
  /**
   * client-side rendered -> radix-ui
   */
  SidebarSheet,
  /**
   * client-side rendered -> icons
   */
  LogoLink,
  /**
   * client-side rendered -> radix-ui
   */
  RoutesMenu,
  /**
   * client-side rendered -> `useTheme`, radix-ui
   */
  ThemePickerPopover,
  /**
   * client-side rendered -> radix-ui
   */
  ProfilePopover,
};

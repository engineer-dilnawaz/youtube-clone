import type { IconType } from "react-icons/lib";

export type SidebarItemType = {
  icon: IconType;
  label: string;
  path?: string;
  activeIcon?: IconType;
};

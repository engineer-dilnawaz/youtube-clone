import { Link } from "react-router";

import { useHelper } from "~/hooks";
import type { SidebarItemType } from "~/types";

type TabListProps = {
  dataList: SidebarItemType[];
};

export const TabList = ({ dataList }: TabListProps) => {
  const { isCurrentPageActive } = useHelper();

  const renderItem = (item: SidebarItemType) => {
    const isActive = isCurrentPageActive(item.label);
    const LinkComponent = item.path ? Link : ("div" as const);
    return (
      <LinkComponent
        to={item.path || ""}
        key={item.label}
        className="flex items-center flex-col py-4 gap-2 px-0.5 rounded-md hover:bg-gray-400/30 hover:cursor-pointer w-full"
      >
        {isActive && item.activeIcon ? (
          <item.activeIcon className="h-6 w-6 shrink-0" />
        ) : (
          <item.icon className="h-6 w-6 shrink-0" />
        )}
        <span className="text-[0.625rem] truncate">{item.label}</span>
      </LinkComponent>
    );
  };

  return (
    <div className="flex flex-col gap-0.5 justify-center items-center">
      {dataList.map(renderItem)}
    </div>
  );
};

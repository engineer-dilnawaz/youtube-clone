import { GoChevronRight } from "react-icons/go";
import { Link, useLocation } from "react-router";

import type { IconLabelVerticalListType } from "~/types";

type IconLabelVerticalListProps = {
  dataList: IconLabelVerticalListType[];
  title?: string;
};

export const IconLabelVerticalList = ({
  dataList,
  title,
}: IconLabelVerticalListProps) => {
  const { pathname } = useLocation();
  const currentPath = pathname.toLowerCase();

  const isCurrentPageActive = (label: string) => {
    const normalizedLabel = label.toLowerCase();
    if (normalizedLabel === "home") return currentPath === "/";
    return currentPath === `/${normalizedLabel}`;
  };

  const renderItem = (item: IconLabelVerticalListType) => {
    const isActive = isCurrentPageActive(item.label);

    const LinkComponent = item.path ? Link : ("div" as const);

    return (
      <LinkComponent
        to={item.path || ""}
        key={item.label}
        className={`flex items-center gap-2 rounded-lg p-2 hover:bg-gray-400/30 hover:cursor-pointer ${
          isActive ? "bg-gray-400/30" : ""
        }`}
      >
        <item.icon className="h-6 w-6 shrink-0" />
        <span className="font-medium text-sm truncate">{item.label}</span>
      </LinkComponent>
    );
  };

  return (
    <div className="flex flex-col gap-2 border-b border-gray-400/30 pb-4">
      {title && (
        <div className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-400/30 hover:cursor-pointer">
          <span className="font-medium text-sm pt-1">{title}</span>
          <GoChevronRight className="h-4 w-4 self-center mt-1.5" />
        </div>
      )}

      <div className="flex flex-col gap-2">{dataList.map(renderItem)}</div>
    </div>
  );
};

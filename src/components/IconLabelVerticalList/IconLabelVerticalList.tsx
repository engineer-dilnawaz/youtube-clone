import { GoChevronRight } from "react-icons/go";

import type { IconLabelVerticalListType } from "../../types";

type IconLabelVerticalListProps = {
  dataList: IconLabelVerticalListType[];
  title?: string;
};

export const IconLabelVerticalList = ({
  dataList,
  title,
}: IconLabelVerticalListProps) => {
  if (title)
    return (
      <div className="flex flex-col gap-2 pt-4">
        {title && (
          <div className="flex items-center gap-2 hover:bg-gray-400/30 hover:cursor-pointer rounded-lg p-2">
            <span className="font-medium pt-1 text-sm">{title}</span>
            <GoChevronRight className="h-[16px] w-[16px] self-center mt-1.5" />
          </div>
        )}
        <div className="flex flex-col gap-2 border-b border-gray-400/30 pb-4">
          {dataList.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 hover:bg-gray-400/30 hover:cursor-pointer rounded-lg p-2"
            >
              <item.icon className="h-6 w-6" />
              <span className="font-medium text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="flex flex-col gap-2 border-b border-gray-400/30 pb-4">
      {dataList.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 hover:bg-gray-400/30 hover:cursor-pointer rounded-lg p-2"
        >
          <item.icon className="h-6 w-6" />
          <span className="font-medium text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

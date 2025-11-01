import { FaListUl } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

import { SIDEBAR_CONSTANTS } from "~/constants";
import { IconLabelVerticalList } from "~/components/IconLabelVerticalList";

export const Sidebar = () => {
  const isExpanded = true;

  const {
    MAIN_SIDEBAR_ITEMS,
    YOUR_SECTION_ITEMS,
    EXPLORE_SECTION_ITEMS,
    MORE_FROM_YOUTUBE_ITEMS,
    SETTINGS_SECTION_ITEMS,
    FOOTER_ITEMS,
    FOOTER_ITEMS_MORE,
  } = SIDEBAR_CONSTANTS;

  return (
    <div className="bg-black text-white px-4 py-2 w-[15%] max-h-full overflow-y-scroll scrollbar-hide overscroll-none pb-20">
      <IconLabelVerticalList dataList={MAIN_SIDEBAR_ITEMS} />
      <IconLabelVerticalList dataList={YOUR_SECTION_ITEMS} title="You" />

      <div className="flex flex-col gap-2 pt-4">
        <div className="flex items-center gap-2 hover:bg-gray-400/30 hover:cursor-pointer rounded-lg p-2">
          <span className="font-medium pt-1 text-sm">Subscriptions</span>
          <GoChevronRight className="h-[16px] w-[16px] self-center mt-1.5" />
        </div>

        <div className="flex flex-col gap-2 border-b border-gray-400/30 pb-4">
          <div className="flex items-center gap-2 hover:bg-gray-400/30 hover:cursor-pointer rounded-lg p-2">
            <FaListUl className="h-[16px] w-[16px]" />
            <span className="text-sm">All Subscriptions</span>
          </div>
          <div className="flex items-center gap-2 hover:bg-gray-400/30 hover:cursor-pointer rounded-lg p-2">
            {isExpanded ? (
              <IoChevronUp className="h-[16px] w-[16px] self-center" />
            ) : (
              <IoChevronDown className="h-[16px] w-[16px] self-center" />
            )}
            <span className="text-sm">
              {isExpanded ? "Show less" : "Show more"}
            </span>
          </div>
        </div>
      </div>

      <IconLabelVerticalList dataList={EXPLORE_SECTION_ITEMS} title="Explore" />

      <IconLabelVerticalList
        dataList={MORE_FROM_YOUTUBE_ITEMS}
        title="More from YouTube"
      />

      <IconLabelVerticalList dataList={SETTINGS_SECTION_ITEMS} />

      <div className="flex flex-wrap  gap-0.5 pt-4 pb-2">
        {FOOTER_ITEMS.map((item) => (
          <span key={item.id} className="text-sm capitalize text-gray-400/70">
            {item.label}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 pt-4 pb-2">
        {FOOTER_ITEMS_MORE.map((item) => (
          <span key={item.id} className="text-sm capitalize text-gray-400/70">
            {item.label}
          </span>
        ))}
      </div>

      <div className="flex items-center hover:cursor-pointer py-2">
        <span className="text-sm capitalize text-gray-400/70">
          &copy;
          {new Date().getFullYear()} YouTube
        </span>
      </div>
    </div>
  );
};

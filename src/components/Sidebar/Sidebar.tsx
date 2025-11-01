import { FaListUl } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { SIDEBAR_CONSTANTS } from "../../constants";

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
    <div className="bg-black text-white px-4 py-2 w-[15%] max-h-full overflow-y-scroll scrollbar-hide overscroll-none">
      <div className="flex flex-col gap-2 border-b border-gray-400/30 pb-4">
        {MAIN_SIDEBAR_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-1 hover:bg-gray-400/30 hover:cursor-pointer rounded-lg p-2"
          >
            <item.icon className="h-6 w-6" />
            <span className="font-medium pt-1 text-sm">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 pt-4">
        <div className="flex items-center gap-2 hover:bg-gray-400/30 hover:cursor-pointer rounded-lg p-2">
          <span className="font-medium pt-1 text-sm">You</span>
          <GoChevronRight className="h-[16px] w-[16px] self-center mt-1.5" />
        </div>
        <div className="flex flex-col gap-2 border-b border-gray-400/30 pb-4">
          {YOUR_SECTION_ITEMS.map((item) => (
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

      <div className="flex flex-col gap-2 pt-4 border-b border-gray-400/30 pb-4">
        <p className="font-medium text-sm pl-2">Explore</p>
        {EXPLORE_SECTION_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 hover:bg-gray-400/30 hover:cursor-pointer rounded-lg p-2"
          >
            <item.icon className="h-6 w-6" />
            <span className="font-medium text-sm">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 pt-4 border-b border-gray-400/30 pb-2">
        <p className="font-medium text-sm pl-2">More from YouTube</p>
        {MORE_FROM_YOUTUBE_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 hover:bg-gray-400/30 hover:cursor-pointer rounded-lg p-2"
          >
            <item.icon className="h-5 w-5 text-red-500" />
            <span className="font-medium text-sm">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 pt-4 border-b border-gray-400/30 pb-2">
        {SETTINGS_SECTION_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 hover:bg-gray-400/30 hover:cursor-pointer rounded-lg p-2"
          >
            <item.icon className="h-6 w-6" />
            <span className="font-medium text-sm capitalize">{item.label}</span>
          </div>
        ))}
      </div>

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

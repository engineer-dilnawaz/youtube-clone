import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { BsCollectionPlay } from "react-icons/bs";
import { GoChevronRight } from "react-icons/go";
import { GoHistory } from "react-icons/go";
import { CgPlayList } from "react-icons/cg";
import { RiVideoLine } from "react-icons/ri";
import { BsClock } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { PiMusicNote } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { TbFlag } from "react-icons/tb";
import { IoHelpCircleOutline } from "react-icons/io5";
import { BsInfoSquare } from "react-icons/bs";

export const Sidebar = () => {
  const isExpanded = true;

  const sidebarItems = [
    {
      icon: MdHome,
      label: "Home",
    },
    {
      icon: SiYoutubeshorts,
      label: "Shorts",
    },
    {
      icon: BsCollectionPlay,
      label: "Subscriptions",
    },
  ];

  const youItems = [
    {
      icon: GoHistory,
      label: "History",
    },
    {
      icon: CgPlayList,
      label: "Playlists",
    },
    {
      icon: RiVideoLine,
      label: "Your videos",
    },
    {
      icon: BsClock,
      label: "Watch later",
    },
    {
      icon: AiOutlineLike,
      label: "Liked videos",
    },
  ];

  const exploreItems = [
    {
      icon: PiMusicNote,
      label: "Music",
    },
    {
      icon: SiYoutubegaming,
      label: "Gaming",
    },
    {
      icon: FaRegNewspaper,
      label: "News",
    },
    {
      icon: GoTrophy,
      label: "Sports",
    },
  ];

  const moreFromYoutubeItems = [
    {
      icon: FaYoutube,
      label: "YouTube Premium",
    },
    {
      icon: SiYoutubemusic,
      label: "YouTube Music",
    },
    {
      icon: SiYoutubestudio,
      label: "YouTube Studio",
    },
    {
      icon: SiYoutubekids,
      label: "YouTube Kids",
    },
  ];

  const settingsItems = [
    {
      icon: HiOutlineCog6Tooth,
      label: "Settings",
    },
    {
      icon: TbFlag,
      label: "Report history",
    },
    {
      icon: IoHelpCircleOutline,
      label: "Help",
    },
    {
      icon: BsInfoSquare,
      label: "Send feedback",
    },
  ];

  const footerItems = [
    {
      id: 1,
      label: "About",
      link: "/about",
    },
    {
      id: 2,
      label: "Press",
      link: "/press",
    },
    {
      id: 3,
      label: "Copyright",
      link: "/copyright",
    },
    {
      id: 4,
      label: "Contact us",
      link: "/contact",
    },
    {
      id: 5,
      label: "Creator Academy",
      link: "/creator-academy",
    },
    {
      id: 6,
      label: "Advertise",
      link: "/advertising",
    },
    {
      id: 7,
      label: "Developers",
      link: "/developers",
    },
    {
      id: 8,
      label: "Legal",
      link: "/legal",
    },
    {
      id: 9,
      label: "Terms",
      link: "/terms",
    },
  ];

  const footerItemsMore = [
    {
      id: 1,
      label: "Privacy",
      link: "/privacy",
    },
    {
      id: 2,
      label: "Policy & Safety",
      link: "/policy-and-safety",
    },
    {
      id: 3,
      label: "How YouTube works",
      link: "/test-new-features",
    },
    {
      id: 4,
      label: "Test new features",
      link: "/test-new-features",
    },
  ];

  return (
    <div className="bg-black text-white px-4 py-2 w-[15%] max-h-full overflow-y-scroll scrollbar-hide overscroll-none">
      <div className="flex flex-col gap-2 border-b border-gray-400/30 pb-4">
        {sidebarItems.map((item) => (
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
          {youItems.map((item) => (
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
        {exploreItems.map((item) => (
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
        {moreFromYoutubeItems.map((item) => (
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
        {settingsItems.map((item) => (
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
        {footerItems.map((item) => (
          <span key={item.id} className="text-sm capitalize text-gray-400/70">
            {item.label}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 pt-4 pb-2">
        {footerItemsMore.map((item) => (
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

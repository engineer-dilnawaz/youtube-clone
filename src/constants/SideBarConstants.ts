import { AiOutlineLike } from "react-icons/ai";
import { BsClock, BsCollectionPlay, BsInfoSquare } from "react-icons/bs";
import { CgPlayList } from "react-icons/cg";
import { FaRegNewspaper, FaYoutube } from "react-icons/fa";
import { GoHistory, GoTrophy } from "react-icons/go";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { PiMusicNote } from "react-icons/pi";
import { RiVideoLine } from "react-icons/ri";
import {
  SiYoutubegaming,
  SiYoutubekids,
  SiYoutubemusic,
  SiYoutubeshorts,
  SiYoutubestudio,
} from "react-icons/si";
import { TbFlag } from "react-icons/tb";

import { EN_LOCALE } from "./en";

// 🏠 Primary navigation
export const MAIN_SIDEBAR_ITEMS = [
  { icon: MdHome, label: EN_LOCALE.HOME },
  { icon: SiYoutubeshorts, label: EN_LOCALE.SHORTS },
  { icon: BsCollectionPlay, label: EN_LOCALE.SUBSCRIPTIONS },
];

// 👤 User-specific section
export const YOUR_SECTION_ITEMS = [
  { icon: GoHistory, label: EN_LOCALE.HISTORY },
  { icon: CgPlayList, label: EN_LOCALE.PLAYLISTS },
  { icon: RiVideoLine, label: EN_LOCALE.YOUR_VIDEOS },
  { icon: BsClock, label: EN_LOCALE.WATCH_LATER },
  { icon: AiOutlineLike, label: EN_LOCALE.LIKED_VIDEOS },
];

// 🔍 Explore section
export const EXPLORE_SECTION_ITEMS = [
  { icon: PiMusicNote, label: EN_LOCALE.MUSIC },
  { icon: SiYoutubegaming, label: EN_LOCALE.GAMING },
  { icon: FaRegNewspaper, label: EN_LOCALE.NEWS },
  { icon: GoTrophy, label: EN_LOCALE.SPORTS },
];

// 🎬 More from YouTube section
export const MORE_FROM_YOUTUBE_ITEMS = [
  { icon: FaYoutube, label: EN_LOCALE.YOUTUBE_PREMIUM },
  { icon: SiYoutubemusic, label: EN_LOCALE.YOUTUBE_MUSIC },
  { icon: SiYoutubestudio, label: EN_LOCALE.YOUTUBE_STUDIO },
  { icon: SiYoutubekids, label: EN_LOCALE.YOUTUBE_KIDS },
];

// ⚙️ Settings and help section
export const SETTINGS_SECTION_ITEMS = [
  { icon: HiOutlineCog6Tooth, label: EN_LOCALE.SETTINGS },
  { icon: TbFlag, label: EN_LOCALE.REPORT_HISTORY },
  { icon: IoHelpCircleOutline, label: EN_LOCALE.HELP },
  { icon: BsInfoSquare, label: EN_LOCALE.ABOUT },
];

// 📚 Footer (primary links)
export const FOOTER_ITEMS = [
  { id: 1, label: EN_LOCALE.ABOUT, link: "/about" },
  { id: 2, label: EN_LOCALE.PRESS, link: "/press" },
  { id: 3, label: EN_LOCALE.COPYRIGHT, link: "/copyright" },
  { id: 4, label: EN_LOCALE.CONTACT, link: "/contact" },
  { id: 5, label: EN_LOCALE.CREATOR_ACADEMY, link: "/creator-academy" },
  { id: 6, label: EN_LOCALE.ADVERTISE, link: "/advertising" },
  { id: 7, label: EN_LOCALE.DEVELOPERS, link: "/developers" },
  { id: 8, label: EN_LOCALE.LEGAL, link: "/legal" },
  { id: 9, label: EN_LOCALE.TERMS, link: "/terms" },
];

// ⚖️ Footer (more links)
export const FOOTER_ITEMS_MORE = [
  { id: 1, label: EN_LOCALE.PRIVACY, link: "/privacy" },
  { id: 2, label: EN_LOCALE.POLICY_AND_SAFETY, link: "/policy-and-safety" },
  { id: 3, label: EN_LOCALE.HOW_YOUTUBE_WORKS, link: "/how-youtube-works" },
  { id: 4, label: EN_LOCALE.TEST_NEW_FEATURES, link: "/test-new-features" },
];

// 🌐 Export grouped constants
export const SIDEBAR_CONSTANTS = {
  MAIN_SIDEBAR_ITEMS,
  YOUR_SECTION_ITEMS,
  EXPLORE_SECTION_ITEMS,
  MORE_FROM_YOUTUBE_ITEMS,
  SETTINGS_SECTION_ITEMS,
  FOOTER_ITEMS,
  FOOTER_ITEMS_MORE,
};

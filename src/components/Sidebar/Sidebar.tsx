import { SIDEBAR_CONSTANTS } from "~/constants";
import { useAppSelector } from "~/hooks";
import { FullSidebar } from "../FullSidebar";
import { TabList } from "../TabList";
import { FloatingSideBar } from "../FloatingSideBar";

export const Sidebar = () => {
  const { sideBarState, showFloatingSidebar } = useAppSelector(
    (state) => state.config
  );
  const { COLLAPSED_SIDEBAR_ITEMS } = SIDEBAR_CONSTANTS;

  if (sideBarState === "hidden") {
    return showFloatingSidebar ? <FloatingSideBar /> : null;
  }

  if (sideBarState === "collapsed")
    return <TabList dataList={COLLAPSED_SIDEBAR_ITEMS} />;

  return <FullSidebar />;
};

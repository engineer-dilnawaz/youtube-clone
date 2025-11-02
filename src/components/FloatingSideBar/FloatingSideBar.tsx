import { useAppDispatch, useAppSelector } from "~/hooks";

import { setShowFloatingSidebar, setSideBarState } from "~/store/slices";

import { FullSidebar } from "../FullSidebar";
import { LogoMenuContainer } from "../LogoMenuContainer";

export const FloatingSideBar = () => {
  const dispatch = useAppDispatch();
  const { showFloatingSidebar } = useAppSelector((state) => state.config);

  const handleClick = () => {
    if (showFloatingSidebar) {
      dispatch(setShowFloatingSidebar(false));
      dispatch(setSideBarState("expanded"));
    }
  };

  const onOverlayClick = () => {
    dispatch(setShowFloatingSidebar(false));
  };

  return (
    <div
      onClick={onOverlayClick}
      className="absolute z-50 w-screen h-screen top-0 right-0 bg-black/50 text-white overflow-y-scroll scroll-smooth overscroll-none"
    >
      <LogoMenuContainer
        handleMenuClick={handleClick}
        className="bg-black py-2 px-5 w-[15%]"
      />
      <FullSidebar onItemClickCallback={handleClick} />
    </div>
  );
};

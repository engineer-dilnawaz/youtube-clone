import { FullSidebar } from "../FullSidebar";

export const FloatingSideBar = () => {
  return (
    <div className="absolute z-50 w-screen h-screen bg-white text-white overflow-y-scroll scroll-smooth overscroll-none">
      <FullSidebar />
    </div>
  );
};

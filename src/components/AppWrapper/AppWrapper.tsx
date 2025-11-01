import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router";

import type { RootState } from "../../types/Redux";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

const AppWrapper = () => {
  const { isSidebarOpen } = useSelector((state: RootState) => state.config);
  const location = useLocation();

  console.log(location);
  return (
    <>
      <Header />
      <div className="flex h-dvh">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default AppWrapper;

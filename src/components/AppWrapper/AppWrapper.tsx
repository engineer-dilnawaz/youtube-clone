import { Outlet } from "react-router";

import { Header } from "~/components/Header";
import { Sidebar } from "~/components/Sidebar";

const AppWrapper = () => {
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

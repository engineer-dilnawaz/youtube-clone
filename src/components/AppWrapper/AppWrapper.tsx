import { Outlet } from "react-router";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

const AppWrapper = () => {
  return (
    <>
      <Header />
      <div className="flex h-dvh overscroll-none">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default AppWrapper;

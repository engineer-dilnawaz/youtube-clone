import { useState, type FC, type PropsWithChildren } from "react";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { IoCloseOutline } from "react-icons/io5";

import { RiListSettingsFill } from "react-icons/ri";

type TanStackQueryDebuggerProps = PropsWithChildren;

export const TanStackQueryDebugger: FC<TanStackQueryDebuggerProps> = ({
  children,
}) => {
  const [isQueryDevtoolsOpen, setIsQueryDevtoolsOpen] = useState(false);
  return (
    <>
      {children}
      <button
        className="bg-slate-800 text-white p-4 rounded-full fixed bottom-4 right-4 z-50"
        onClick={() => setIsQueryDevtoolsOpen(!isQueryDevtoolsOpen)}
      >
        {isQueryDevtoolsOpen ? (
          <IoCloseOutline size={30} />
        ) : (
          <RiListSettingsFill size={30} />
        )}
      </button>
      {isQueryDevtoolsOpen && (
        <ReactQueryDevtoolsPanel
          onClose={() => setIsQueryDevtoolsOpen(false)}
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            height: "500px",
            backgroundColor: "white",
            zIndex: 1000,
          }}
        />
      )}
    </>
  );
};

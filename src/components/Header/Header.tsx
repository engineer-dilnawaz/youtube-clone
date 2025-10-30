import { AiOutlinePlus } from "react-icons/ai";
import { IoMenu, IoSearch } from "react-icons/io5";
import { MdOutlineMicNone } from "react-icons/md";
import { YouTubeLogo } from "../../assets/svgs";
import { FiBell } from "react-icons/fi";

import { useState } from "react";

export const Header = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="text-white px-5 bg-black flex flex-1 items-center py-2">
      <div className="flex items-center gap-5">
        <IoMenu className="h-6 w-6 text-white cursor-pointer" />
        <YouTubeLogo className="h-10 w-32 cursor-pointer text-white" />
      </div>
      <div className="flex flex-1 gap-5 ">
        <div className="flex items-center justify-center gap-2 flex-1 self-center">
          <div className="flex items-center">
            <div
              className={`flex items-center border ${
                isFocused ? "border-blue-500" : " border-slate-600"
              } rounded-l-full transition-all duration-300 ease-in-out`}
            >
              {isFocused && (
                <div
                  className={`ml-4 w-5 flex items-center justify-center transition-all duration-300 ease-in-out overflow-hidden`}
                >
                  <IoSearch className="h-5 w-5 text-white" />
                </div>
              )}
              <input
                type="text"
                placeholder="Search"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="bg-transparent w-[400px] py-1.5 px-4 focus:outline-none text-white placeholder:text-gray-"
              />
            </div>
            <button className="px-5 py-1.5 rounded-r-full bg-gray-400/30 hover:bg-gray-400/40 cursor-pointer border border-slate-600 border-l-0 transition-colors">
              <IoSearch className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="w-9 h-9 rounded-full bg-gray-400/30 hover:bg-gray-400/40 cursor-pointer flex items-center justify-center">
            <MdOutlineMicNone className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1 rounded-full bg-gray-400/30 hover:bg-gray-400/40 cursor-pointer px-3 py-1">
            <AiOutlinePlus className="h-6 w-6 text-white" />
            <span className="text-sm font-semibold text-white">Create</span>
          </div>
          <div>
            <FiBell className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

import { CiSearch } from "react-icons/ci";

import { YouTubeLogo } from "../../assets/svgs";
import { Link } from "react-router";

export const Error = () => {
  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center gap-4">
      <div className="max-w-sm">
        <p className="text-center text-md font-medium">
          This page isn&apos;t available. Sorry about that.
          <br />
          Try searching for something else.
        </p>
        <div className="flex items-center gap-2">
          <Link to="/">
            <YouTubeLogo className="w-20 h-20" />
          </Link>
          <div className="flex items-center h-8">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border border-gray-700 text-white focus:outline-none px-2 h-full rounded-l-md"
            />
            <div className="h-full bg-gray-700 rounded-r-md px-2 flex items-center justify-center cursor-pointer">
              <CiSearch className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

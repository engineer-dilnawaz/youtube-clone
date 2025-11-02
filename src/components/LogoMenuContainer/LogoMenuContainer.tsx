import { IoMenu } from "react-icons/io5";
import { Link } from "react-router";

import { YouTubeLogo } from "~/assets/svgs";

type LogoMenuContainerProps = {
  handleMenuClick?: () => void;
  className?: string;
};

export const LogoMenuContainer = ({
  handleMenuClick,
  className,
}: LogoMenuContainerProps) => {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <button
        onClick={handleMenuClick}
        className="hover:bg-gray-400/30 hover:cursor-pointer rounded-full p-2.5"
      >
        <IoMenu className="h-6 w-6 text-white cursor-pointer" />
      </button>
      <Link to="/" onClick={handleMenuClick}>
        <YouTubeLogo className="h-10 w-32 cursor-pointer text-white" />
      </Link>
    </div>
  );
};

import { useLocation } from "react-router";

const HOME = "home";

export const useHelper = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.toLowerCase();

  const isCurrentPageActive = (label: string) => {
    const normalizedLabel = label.toLowerCase();

    if (normalizedLabel === HOME) {
      return currentPath === "/";
    }

    return currentPath === `/${normalizedLabel}`;
  };

  return { isCurrentPageActive };
};

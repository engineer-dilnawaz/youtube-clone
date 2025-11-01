import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "~/types/Redux";

export const useAppSelector = <T>(selector: (state: RootState) => T) => {
  return useSelector(selector);
};

export const useAppDispatch = () => {
  return useDispatch<AppDispatch>();
};

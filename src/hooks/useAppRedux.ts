import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "~/types/Redux";

export const useAppSelector = () => {
  return useSelector((state: RootState) => state);
};

export const useAppDispatch = () => {
  return useDispatch<AppDispatch>();
};

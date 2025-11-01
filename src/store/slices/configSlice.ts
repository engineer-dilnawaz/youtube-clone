import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ConfigState = {
  sideBarState: "collapsed" | "expanded" | "hidden";
};

const initialConfigState: ConfigState = {
  sideBarState: "expanded", // collapsed, expanded, hidden
};

const configSlice = createSlice({
  name: "config",
  initialState: initialConfigState,
  reducers: {
    setSideBarState: (
      state,
      action: PayloadAction<"collapsed" | "expanded" | "hidden">
    ) => {
      state.sideBarState = action.payload;
    },
  },
});

export const { setSideBarState } = configSlice.actions;
export default configSlice.reducer;

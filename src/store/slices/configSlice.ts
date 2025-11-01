import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ConfigState = {
  showFloatingSidebar: boolean;
  sideBarState: "collapsed" | "expanded" | "hidden";
};

const initialConfigState: ConfigState = {
  showFloatingSidebar: false,
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
    setShowFloatingSidebar: (state, action: PayloadAction<boolean>) => {
      state.showFloatingSidebar = action.payload;
    },
  },
});

export const { setSideBarState, setShowFloatingSidebar } = configSlice.actions;
export default configSlice.reducer;

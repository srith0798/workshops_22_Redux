import { createSlice } from "@reduxjs/toolkit";

const uiSlicer = createSlice({
  name: "UI",
  initialState: {
    notice: null,
  },
  reducers: {
    toggleNotice(state, action) {
      state.notice = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export const { toggleNotice } = uiSlicer.actions;

export default uiSlicer.reducer;

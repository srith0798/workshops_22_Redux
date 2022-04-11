import { createSlice } from "@reduxjs/toolkit";

const authSlicer = createSlice({
  name: "auth",
  initialState: { isLog: false },
  reducers: {
    logIn(state) {
      state.isLog = true;
    },
    logOut(state) {
      state.isLog = false;
    },
  },
});

export const { logIn, logOut } = authSlicer.actions;

export default authSlicer.reducer;

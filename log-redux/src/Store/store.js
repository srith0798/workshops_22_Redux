import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "../Reducer/reducer";
import cartSlicer from "../Reducer/cartReducer";
import uiSlicer from "../Reducer/uiReducer";
const configStore = configureStore({
  reducer: {
    authReducer: authSlicer,
    cartReducer: cartSlicer,
    uiReducer: uiSlicer,
  },
});

export default configStore;

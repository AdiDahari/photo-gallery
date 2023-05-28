import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "./features/photos/photosSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    photos: photosReducer,
    modal: modalReducer,
  },
});

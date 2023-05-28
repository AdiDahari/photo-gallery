/**
 * Configure and create the Redux store.
 * @module store
 *
 * @author Adi Dahari
 */

import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "./features/photos/photosSlice";
import modalReducer from "./features/modal/modalSlice";

/**
 * The Redux store configuration.
 * @type {Object}
 * @property {Object} reducer - The combined reducer object.
 * @property {Function} reducer.photos - The reducer function for the 'photos' feature.
 * @property {Function} reducer.modal - The reducer function for the 'modal' feature.
 */
export const store = configureStore({
  reducer: {
    photos: photosReducer,
    modal: modalReducer,
  },
});

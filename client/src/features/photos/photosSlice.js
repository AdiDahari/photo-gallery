/**
 * Redux slice for managing photos state.
 *
 * @module photosSlice
 * @slice
 * @reducer setCategory - Sets the category and resets the page number.
 * @reducer setLastPage - Sets the last available page number.
 * @reducer nextPage - Increments the page number by 1.
 * @reducer prevPage - Decrements the page number by 1.
 *
 * @example
 * import { setCategory, nextPage, prevPage, setLastPage } from "./photosSlice";
 *
 * dispatch(setCategory(category));
 * dispatch(nextPage());
 * dispatch(prevPage());
 * dispatch(setLastPage(lastPage));
 *
 * @returns {Object} The photos slice.
 *
 * @author Adi Dahari
 */

import { createSlice } from "@reduxjs/toolkit";

/**
 * The initial state for the photos slice.
 * @type {Object}
 * @property {string} category - The category of the photos.
 * @property {number} page - The current page number.
 * @property {number} perPage - The number of photos per page./**
 * Redux slice for managing photos state.
 * @module photosSlice
 * @property {number} lastPage - The last available page number.
 */
const initialState = {
  category: "flowers",
  page: 1,
  perPage: 9,
  lastPage: 1,
};

/**
 * The photos slice.
 * @type {Object}
 */
const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    /**
     * Sets the category and resets the page number.
     * @param {Object} state - The current state.
     * @param {Object} action - The Redux action object.
     * @param {string} action.payload - The category value.
     */
    setCategory: (state, action) => {
      state.category = action.payload;
      state.page = 1;
    },
    /**
     * Sets the last available page number.
     * @param {Object} state - The current state.
     * @param {Object} action - The Redux action object.
     * @param {number} action.payload - The last page value.
     */
    setLastPage: (state, action) => {
      state.lastPage = action.payload;
    },
    /**
     * Increments the page number by 1.
     * @param {Object} state - The current state.
     */
    nextPage: (state) => {
      state.page += 1;
    },
    /**
     * Decrements the page number by 1.
     * @param {Object} state - The current state.
     */
    prevPage: (state) => {
      state.page -= 1;
    },
  },
});

export const { setCategory, nextPage, prevPage, setLastPage } =
  photosSlice.actions;

export default photosSlice.reducer;

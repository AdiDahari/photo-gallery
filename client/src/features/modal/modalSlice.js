/**
 * Redux slice for managing modal state.
 * @module modalSlice
 *
 * @author Adi Dahari
 */

import { createSlice } from "@reduxjs/toolkit";

/**
 * The initial state for the modal slice.
 * @type {Object}
 * @property {boolean} isOpen - Indicates whether the modal is open or closed.
 * @property {*} content - The content of the modal.
 */
const initialState = {
  isOpen: false,
  content: null,
};

/**
 * The modal slice.
 * @type {Object}
 */
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    /**
     * Opens the modal with the provided content.
     * @param {Object} state - The current state.
     * @param {Object} action - The Redux action object.
     * @param {*} action.payload - The content of the modal.
     */
    openModal: (state, action) => {
      state.isOpen = true;
      state.content = action.payload;
    },
    /**
     * Closes the modal.
     * @param {Object} state - The current state.
     */
    closeModal: (state) => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;

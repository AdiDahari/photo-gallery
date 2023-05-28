import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  page: 1,
  perPage: 9,
  lastPage: 1,
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLastPage: (state, action) => {
      state.lastPage = action.payload;
    },
    nextPage: (state) => {
      state.page += 1;
    },
    prevPage: (state) => {
      state.page -= 1;
    },
  },
});

export const { setQuery, nextPage, prevPage, setLastPage } =
  photosSlice.actions;

export default photosSlice.reducer;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
  }),
  endpoints: (builder) => ({
    listPhotos: builder.query({
      query: (keyword = "flowers", page = 1, perPage = 9) =>
        `photos?q=${keyword}&page=${page}`,
    }),
  }),
});

export const { useListPhotosQuery } = api;

/**
 * API-related logic for fetching photos.
 *
 * @module fetchPhotos
 * @param {string} [query] - The search query for the photos.
 * @param {number} [page=1] - The page number of the results.
 * @param {number} [perPage=9] - The number of photos per page.
 * @returns {Promise} A promise that resolves to the fetched data or rejects with an error.
 *
 * @throws {Error} If no search query is provided or if something goes wrong during the fetch.
 *
 * @example
 * import { fetchPhotos } from "./api";
 *
 * try {
 *   const photos = await fetchPhotos("flowers", 1, 9);
 *   console.log(photos);
 * } catch (error) {
 *   console.error(error);
 * }
 *
 * @author Adi Dahari
 */

export const fetchPhotos = async (query, page = 1, perPage = 9) => {
  if (!query) {
    throw new Error("No search query provided");
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}?q=${query}&page=${page}&per_page=${perPage}`
  );

  const data = await response.json();

  console.log(data);

  if (!data) {
    throw new Error("Something went wrong");
  }

  if (!data.success) {
    const { status, message } = data;
    const err = new Error(message);
    err.statusCode = status;

    throw err;
  }

  return data;
};

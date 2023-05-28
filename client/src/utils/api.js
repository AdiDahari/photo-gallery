/**
 * api-related logic
 * @author Adi Dahari
 */

/**
 * Fetches photos from an API.
 * @module fetchPhotos
 * @param {string} [query] - The search query for the photos.
 * @param {number} [page=1] - The page number of the results.
 * @param {number} [perPage=9] - The number of photos per page.
 * @returns {Promise} A promise that resolves to the fetched data or rejects with an error.
 */
export const fetchPhotos = async (query, page = 1, perPage = 9) => {
  try {
    if (!query) {
      throw new Error("No search query provided");
    }

    const response = await fetch(
      `http://localhost:4000/api/photos?q=${query}&page=${page}&per_page=${perPage}`
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();

    if (!data) {
      throw new Error("Something went wrong");
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

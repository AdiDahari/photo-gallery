/**
 * Module dependencies.
 */
const { comparePhotos, resolveDate } = require("../utils/photos");
const { tryCatch } = require("../utils/tryCatch");

/**
 * Constants
 */
const BASE_URL = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=`;

/**
 * Retrieves paginated photos based on the provided search query.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response with paginated photos.
 * @throws {Error} - If no search query is provided or if an internal server error occurs.
 */
const getPaginatedPhotos = tryCatch(async (req, res) => {
  const keyword = req.query.q;
  const page = +req.query.page || 1;
  const perPage = +req.query["per_page"] || 9;
  const sortBy = req.query.sort || "id";

  // Validate if a search query is provided
  if (!keyword) {
    const err = new Error("No search query provided.");
    err.statusCode = 400;

    throw err;
  }

  // Fetch photos from Pixabay API
  const response = await fetch(
    `${BASE_URL}${keyword}&page=${page}&per_page=${perPage}`
  );

  // Check if the API request was successful
  if (!response.ok) {
    const err = new Error("An internal server error has occurred.");
    err.statusCode = 500;

    throw err;
  }

  const { hits, totalHits } = await response.json();

  // Resolve the date for each photo
  hits.forEach((hit) => {
    hit.date = resolveDate(hit.previewURL);
  });

  // Sort the photos based on the specified criteria
  const sortedPhotos = hits.sort((a, b) => comparePhotos(a, b, sortBy, "desc"));

  // Structure a results object with photos and the last available page
  const results = {
    success: true,
    photos: sortedPhotos,
    lastPage: Math.ceil(totalHits / perPage),
  };

  res.status(200).json(results);
});

// Export the function
module.exports = {
  getPaginatedPhotos,
};

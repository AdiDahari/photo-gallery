/**
 * Module dependencies.
 */
const { comparePhotos, resolveDate } = require("../utils");

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
 */
const getPaginatedPhotos = async (req, res) => {
  const keyword = req.query.q;
  const page = +req.query.page || 1;
  const perPage = +req.query["per_page"] || 9;
  const sortBy = req.query.sort || "id";

  try {
    // Validate if a search query is provided
    if (!keyword) {
      throw new Error("No search query provided");
    }

    // Fetch photos from Pixabay API
    const response = await fetch(
      `${BASE_URL}${keyword}&page=${page}&per_page=${perPage}`
    );

    // Check if the API request was successful
    if (!response.ok) {
      throw new Error("Failed to fetch data, please try again later");
    }

    const data = await response.json();

    const { hits, totalHits } = data;

    // Resolve the date for each photo
    hits.forEach((hit) => {
      hit.date = resolveDate(hit.previewURL);
    });

    // Sort the photos based on the specified criteria
    const sortedPhotos = hits.sort((a, b) =>
      comparePhotos(a, b, sortBy, "desc")
    );

    // Structuring a results object with photos and last page available
    const results = {
      photos: sortedPhotos,
      lastPage: Math.ceil(totalHits / perPage),
    };

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export the functions
module.exports = {
  getPaginatedPhotos,
};

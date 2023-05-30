/**
 * Resolves the date from a previewURL string.
 * @param {string} previewURL - The previewURL string containing the date information.
 * @returns {Date} - The resolved date object.
 */
const resolveDate = (previewURL) => {
  const splittedDateString = previewURL.split("/").slice(4, 7);
  return new Date(splittedDateString).toLocaleString();
};

/**
 * Compares two photos based on a specific key and order.
 * @param {object} a - The first photo object to compare.
 * @param {object} b - The second photo object to compare.
 * @param {string} key - The key to use for comparison.
 * @param {string} [order="asc"] - The order of comparison ("asc" for ascending, "desc" for descending).
 * @returns {number} - The comparison result.
 */
const comparePhotos = (a, b, key, order = "asc") => {
  const diff = a[key] - b[key];

  return order === "desc" ? -diff : diff;
};

// Export the resolveDate and comparePhotos functions as module exports
module.exports = { resolveDate, comparePhotos };

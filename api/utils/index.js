const resolveDate = (previewURL) => {
  const splittedDateString = previewURL.split("/").slice(4, 7);
  return new Date(splittedDateString);
};

const comparePhotos = (a, b, key, order = "asc") => {
  const diff = a[key] - b[key];

  return order === "desc" ? -diff : diff;
};

module.exports = { resolveDate, comparePhotos };

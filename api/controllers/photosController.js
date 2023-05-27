const { comparePhotos, resolveDate } = require("../utils");

const BASE_URL =
  "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=";

const PER_PAGE = 9;

const getPaginatedPhotos = async (req, res) => {
  const keyword = req.query.q;
  const page = +req.query.page || 1;
  const sortBy = req.query.sort || "id";

  try {
    if (!keyword) {
      throw new Error("No search query provided");
    }
    const response = await fetch(
      `${BASE_URL}${keyword}&page=${page}&per_page=${PER_PAGE}`
    );

    if (!response.ok) {
      console.log(response);
      throw new Error("Failed to fetch data, please try again later");
    }

    const data = await response.json();

    const photos = data.hits;

    photos.forEach((photo) => {
      photo.date = resolveDate(photo.previewURL);
    });

    const sortedPhotos = photos.sort((a, b) =>
      comparePhotos(a, b, sortBy, "desc")
    );

    const results = {
      photos: sortedPhotos,
      next: page + 1,
      previous: page - 1,
    };

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPaginatedPhotos,
};

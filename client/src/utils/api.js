export const fetchPhotos = async (query = "flowers", page = 1, perPage = 9) => {
  try {
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

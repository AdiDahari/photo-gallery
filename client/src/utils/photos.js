/**
 * Helper function for filtering photo props.
 *
 * @module filterPhotoProps
 * @param {Object} props - The photo props object to be filtered.
 * @returns {Object} The filtered photo props object.
 *
 * @example
 * import { filterPhotoProps } from "./helpers";
 *
 * const photoProps = {
 *   tags: ["nature", "landscape"],
 *   views: 1000,
 *   downloads: 500,
 *   collections: 10,
 *   likes: 200,
 *   comments: 50,
 *   user: "john_doe",
 *   date: "2022-01-01, 10:00 AM",
 * };
 *
 * const filteredProps = filterPhotoProps(photoProps);
 * console.log(filteredProps);
 *
 * @author Adi Dahari
 */

const relevantProps = [
  "tags",
  "views",
  "downloads",
  "collections",
  "likes",
  "comments",
  "user",
  "date",
];

/**
 * Filters the provided photo props object based on the relevant props.
 * @param {Object} props - The photo props object to be filtered.
 * @returns {Object} The filtered photo props object.
 */
export const filterPhotoProps = (props) => {
  return Object.entries(props).reduce((acc, [key, value]) => {
    if (relevantProps.includes(key)) {
      if (key === "date") {
        acc[key] = value.split(",")[0];
      } else {
        acc[key] = value;
      }
    }

    return acc;
  }, {});
};

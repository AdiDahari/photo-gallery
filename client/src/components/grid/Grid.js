/**
 * The Grid component.
 * @module Grid
 *
 * @author Adi Dahari
 */

import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../utils/api";
import { setLastPage } from "../../features/photos/photosSlice";

/**
 * The Grid component.
 * Renders a grid of photos based on the selected category.
 * @returns {JSX.Element} The rendered JSX elements.
 */
const Grid = () => {
  const dispatch = useDispatch();
  const { category, page, perPage } = useSelector((state) => state.photos);

  const [loadedPhotos, setLoadedPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    /**
     * Fetches photos from the API based on the selected category, page, and perPage.
     * Updates the loadedPhotos state and dispatches the setLastPage action.
     */
    const fetchData = async () => {
      if (category) {
        setIsLoading(true);
        const { photos, lastPage } = await fetchPhotos(category, page, perPage);

        dispatch(setLastPage(lastPage));

        setLoadedPhotos(photos);

        setIsLoading(false);
      }
    };

    fetchData();
  }, [category, page, perPage]);

  /**
   * The content to render based on the loadedPhotos and isLoading state.
   */
  const content = loadedPhotos.length ? (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loadedPhotos.map((photo) => (
          <GridItem key={photo.id} {...photo} />
        ))}
      </div>
    </div>
  ) : (
    <div className="text-3xl text-slate-400">
      {isLoading
        ? "Loading photos..."
        : category
        ? `No photos for category: ${category}`
        : "Search to show photos"}
    </div>
  );

  return (
    <section className="bg-white flex h-screen">
      <div className="px-6 py-2 mx-auto  w-full">
        <div className="flex flex-col h-full justify-center text-center">
          {content}
        </div>
      </div>
    </section>
  );
};

export default Grid;

import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../utils/api";
import { setLastPage } from "../../features/photos/photosSlice";

const Grid = () => {
  const dispatch = useDispatch();
  const { query, page, perPage } = useSelector((state) => state.photos);

  const [loadedPhotos, setLoadedPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        setIsLoading(true);
        const { photos, lastPage } = await fetchPhotos(query, page, perPage);

        dispatch(setLastPage(lastPage));

        setLoadedPhotos(photos);

        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page, perPage]);

  return (
    <section className="bg-white flex h-screen">
      <div className="px-6 py-2 mx-auto  w-full">
        <div className="flex flex-col h-full justify-center text-center">
          {loadedPhotos.length ? (
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {loadedPhotos.map((photo) => (
                  <GridItem key={photo.id} {...photo} />
                ))}
              </div>
            </div>
          ) : isLoading ? (
            <div className="text-3xl text-slate-400">Loading photos...</div>
          ) : (
            <div className="text-3xl text-slate-400">Search to show photos</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Grid;

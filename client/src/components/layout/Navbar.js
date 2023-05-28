import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";
import { nextPage, prevPage } from "../../features/photos/photosSlice";

const Navbar = () => {
  const { query, page, lastPage } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  const onNextPage = () => {
    if (query && page < lastPage) dispatch(nextPage());
  };
  const onPrevPage = () => {
    if (query && page > 1) dispatch(prevPage());
  };

  return (
    <nav className="max-w-screen py-3 px-2 flex flex-row justify-between">
      <Button title="prev" outlined onClick={onPrevPage} />
      <Button title="search" onClick={() => dispatch(openModal())} />
      <Button title="next" outlined onClick={onNextPage} />
    </nav>
  );
};

export default Navbar;

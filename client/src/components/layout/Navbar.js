/**
 * The navigation bar component.
 *
 * @module Navbar
 * @component
 *
 * @example
 * <Navbar />
 *
 * @returns {JSX.Element} The rendered JSX elements.
 *
 * @author Adi Dahari
 */

import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";
import { nextPage, prevPage } from "../../features/photos/photosSlice";

/**
 * The navigation bar component.
 *
 * @returns {JSX.Element} The rendered JSX elements.
 */
const Navbar = () => {
  const { category, page, lastPage } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  /**
   * Handles the click event for the next page button.
   * Dispatches the nextPage action if there is a category and there are more pages.
   */
  const onNextPage = () => {
    if (category && page < lastPage) dispatch(nextPage());
  };

  /**
   * Handles the click event for the previous page button.
   * Dispatches the prevPage action if there is a category and the current page is not the first page.
   */
  const onPrevPage = () => {
    if (category && page > 1) dispatch(prevPage());
  };

  return (
    <nav className="bg-white bg-opacity-80 fixed top-0 left-0 right-0 z-50 max-w-screen py-1 px-2 flex flex-row justify-between">
      <Button
        title="prev"
        outlined
        disabled={page === 1}
        onClick={onPrevPage}
      />
      <Button title="search" onClick={() => dispatch(openModal("search"))} />
      <Button
        title="next"
        outlined
        disabled={page === lastPage}
        onClick={onNextPage}
      />
    </nav>
  );
};

export default Navbar;

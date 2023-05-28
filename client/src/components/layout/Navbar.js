/**
 * The navigation bar component.
 * @module Navbar
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
 * Renders the navigation buttons and handles their click events.
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
    <nav className="max-w-screen py-3 px-2 flex flex-row justify-between">
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

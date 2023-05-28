/**
 * The GridItem component.
 * @module GridItem
 *
 * @author Adi Dahari
 */

import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";

/**
 * The GridItem component.
 * Renders a grid item with an image that can open a details modal when clicked.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.largeImageURL - The URL of the large image to display.
 * @returns {JSX.Element} The rendered JSX elements.
 */
const GridItem = (props) => {
  const dispatch = useDispatch();

  /**
   * Handles the click event on the grid item and dispatches the openModal action.
   */
  const showDetailsModal = () => {
    dispatch(openModal(props));
  };

  return (
    <button
      className="transition-transform duration-300 hover:scale-105 rounded-xl border border-gray-900 overflow-hidden"
      style={{ height: 300 }}
      onClick={showDetailsModal}
    >
      <img className="w-96 h-auto" src={props.largeImageURL} alt="img" />
    </button>
  );
};

export default GridItem;

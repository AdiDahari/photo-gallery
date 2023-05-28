/**
 * The search component.
 * @module Search
 *
 * @author Adi Dahari
 */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../features/modal/modalSlice";
import { setCategory } from "../../../features/photos/photosSlice";

/**
 * The search component.
 * Renders a search input form and handles form submission.
 * @returns {JSX.Element} The rendered JSX elements.
 */
const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  /**
   * Handles the form submission.
   * Dispatches the setCategory and closeModal actions.
   * Resets the query state to an empty string.
   * @param {Object} e - The form submit event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCategory(query));
    dispatch(closeModal());
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
        <input
          type="text"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Sports, Skies, Flowers, etc..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
        >
          Search
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={() => dispatch(closeModal())}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Search;

/**
 * The Details component.
 * @module Details
 *
 * @author Adi Dahari
 */

import React from "react";

/**
 * The Details component.
 * Renders the details of a content object in a list format.
 * @param {Object} content - The content object to display details for.
 * @returns {JSX.Element} The rendered JSX elements.
 */
const Details = ({ content }) => {
  return (
    <ul>
      {Object.keys(content).map((prop) => (
        <li key={prop}>
          <p className="truncate" style={{ maxWidth: 400 }}>
            {prop}:{" "}
            <span className="font-normal">
              {prop === "date" ? content[prop].split("T")[0] : content[prop]}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Details;

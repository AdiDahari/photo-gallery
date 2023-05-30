/**
 * A custom button component.
 *
 * @module Button
 * @component
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the button.
 * @param {function} props.onClick - The click event handler for the button.
 * @param {boolean} [props.outlined] - Indicates whether the button should be outlined.
 * @param {boolean} [props.disabled] - Indicates whether the button is disabled.
 *
 * @returns {JSX.Element} The rendered JSX element.
 *
 * @example
 * <Button
 *   title="Click me"
 *   onClick={() => console.log("Button clicked")}
 *   outlined
 *   disabled
 * />
 *
 * @example
 * <Button
 *   title="Submit"
 *   onClick={handleSubmit}
 * />
 *
 * @author Adi Dahari
 */

import React from "react";

/**
 * A custom button component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the button.
 * @param {function} props.onClick - The click event handler for the button.
 * @param {boolean} [props.outlined] - Indicates whether the button should be outlined.
 * @param {boolean} [props.disabled] - Indicates whether the button is disabled.
 *
 * @returns {JSX.Element} The rendered JSX element.
 */
const Button = ({ title, onClick, outlined, disabled }) => {
  /**
   * Setting style according to button state and purpose.
   */
  let classes = "text-center text-2xl px-2 py-1 m-2 border rounded-md";
  if (outlined) {
    classes += ` ${
      disabled
        ? "border-gray-500 opacity-50"
        : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
    }`;
  } else {
    classes += ` ${
      disabled
        ? "bg-gray-500 opacity-50 text-white"
        : " bg-blue-500 text-white hover:bg-white hover:border-blue-500 hover:text-blue-500"
    }`;
  }

  return (
    <button disabled={disabled} className={classes} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

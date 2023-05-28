import React from "react";

const Button = ({ title, onClick, outlined }) => {
  return (
    <button
      className={`text-center text-2xl px-2 py-1 m-2 border rounded-md ${
        outlined
          ? "border-blue-500 hover:bg-blue-500 hover:text-white"
          : "bg-blue-500 text-white hover:bg-white hover:border-blue-500 hover:text-black"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

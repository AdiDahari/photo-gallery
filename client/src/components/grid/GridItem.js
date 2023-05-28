import React from "react";

const GridItem = (props) => {
  return (
    <button
      className="transition-transform duration-300 hover:scale-105 rounded-xl border border-gray-900 overflow-hidden"
      style={{ height: 300 }}
    >
      <img className="w-96 h-auto" src={props.largeImageURL} alt="img" />
    </button>
  );
};

export default GridItem;

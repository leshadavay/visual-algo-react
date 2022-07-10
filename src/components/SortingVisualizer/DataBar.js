import React from "react";

const DataBar = ({ value }) => {
  return (
    <div
      className="inline-block w-2 mr-1 rounded-md data-bar bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500"
      style={{ height: `${value}px` }}
    ></div>
  );
};

export default DataBar;

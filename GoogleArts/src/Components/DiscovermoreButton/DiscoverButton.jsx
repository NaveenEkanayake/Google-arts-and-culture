import React from "react";

const DiscoverButton = (props) => {
  return (
    <button className="py-2 px-8 text-white bg-blue-600 mb-5 rounded-lg">
      {props.children}
    </button>
  );
};

export default DiscoverButton;

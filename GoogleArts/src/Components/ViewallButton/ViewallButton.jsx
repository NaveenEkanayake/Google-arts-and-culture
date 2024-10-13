import React from "react";

const ViewAllButton = (props) => {
  return (
    <button className="bg-blue-500  px-4 py-1 mt-2 md:px-6 md:py-2  mr-[30px] md:mr-0 cursor-pointer text-white md:mt-6 rounded-lg">
      {props.children}
    </button>
  );
};

export default ViewAllButton;

import React from "react";

const ViewAllButton2 = (props) => {
  return (
    <button className="bg-blue-950 py-1 px-4 md:px-6 md:py-2 cursor-pointer  ml-[-180px] mt-3 md:ml-0 text-white md:mt-6 rounded-lg">
      {props.children}
    </button>
  );
};

export default ViewAllButton2;

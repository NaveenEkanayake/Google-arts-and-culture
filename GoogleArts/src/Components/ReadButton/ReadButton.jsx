import React from "react";

const ReadButton = (props) => {
  return (
    <button
      className="
        bg-[#007FFF]      
        rounded-lg         
        text-white        
        cursor-pointer    
        md:mt-5
        mt-4
        md:mb-0
        mb-28               
        py-2 px-4      
        md:py-3 md:px-6    
        text-sm md:text-base 
        
      "
    >
      {props.children}
    </button>
  );
};

export default ReadButton;

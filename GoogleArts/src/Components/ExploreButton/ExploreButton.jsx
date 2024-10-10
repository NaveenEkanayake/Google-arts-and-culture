import React from "react";

const Button = (props) => {
  return (
    <button
      className="py-3 px-4 bg-transparent transition duration-200 ease-in-out"
      style={{
        borderRadius: "4px",
        border: "1px solid white",
        fontSize: "16px",
        fontWeight: "bold",
        color: "white",
        cursor: "pointer",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;

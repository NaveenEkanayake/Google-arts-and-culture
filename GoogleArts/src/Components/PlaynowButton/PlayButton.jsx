import React from "react";

const PlayButton = (props) => {
  return (
    <button className="bg-purple-400 rounded-2xl px-6 py-2 flex items-center">
      <ion-icon name="play-circle-outline" className="text-2xl mr-3"></ion-icon>
      {props.children}
    </button>
  );
};

export default PlayButton;

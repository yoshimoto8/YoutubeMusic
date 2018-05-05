import React from "react";

const PlayButton = props => {
  return (
    <div>
      <button onClick={() => props.play()}>スタート</button>
    </div>
  );
};

export default PlayButton;

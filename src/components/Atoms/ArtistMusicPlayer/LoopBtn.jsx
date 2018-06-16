import React from "react";
import TiArrowLoop from "react-icons/lib/ti/arrow-loop";

const LoopBtn = props => {
  const { toggleLoop, loopColor } = props;
  return (
    <TiArrowLoop
      className="ArtistMusicPlayerOperationCenter-loop"
      onClick={() => toggleLoop()}
      color={loopColor}
    />
  );
};

export default LoopBtn;

import React from "react";
import GoJumpRight from "react-icons/lib/go/jump-right";

const RightJumpBtn = props => {
  const { nextMusic } = props;
  return (
    <GoJumpRight
      className="ArtistMusicPlayerOperationCenter-GoJumpRight"
      onClick={() => nextMusic()}
    />
  );
};

export default RightJumpBtn;

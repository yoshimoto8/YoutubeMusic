import React from "react";
import GoJumpLeft from "react-icons/lib/go/jump-left";

const LeftJumpBtn = props => {
  const { backMusic } = props;
  return (
    <GoJumpLeft
      className="ArtistMusicPlayerOperationCenter-GoJumpLeft"
      onClick={() => backMusic()}
    />
  );
};

export default LeftJumpBtn;

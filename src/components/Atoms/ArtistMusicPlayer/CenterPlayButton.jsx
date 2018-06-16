import React from "react";

const CenterPlayButton = props => {
  const { buttonType, play } = props;
  return (
    <button
      className={`${buttonType} ArtistMusicPlayerOperationCenter-PlayBtn`}
      onClick={() => play()}
    />
  );
};

export default CenterPlayButton;

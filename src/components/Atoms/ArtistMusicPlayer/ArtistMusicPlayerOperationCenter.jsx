import React from "react";

const ArtistMusicPlayerOperationCenter = props => {
  const { playing, onPlay } = props;
  const buttonType = playing ? "stop" : "start";
  return (
    <div>
      <button
        className={`${buttonType} musicBtnIcon`}
        onClick={() => onPlay()}
      />
    </div>
  );
};

export default ArtistMusicPlayerOperationCenter;

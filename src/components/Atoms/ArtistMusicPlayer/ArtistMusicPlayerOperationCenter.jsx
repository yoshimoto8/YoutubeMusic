import React from "react";
import GoJumpRight from "react-icons/lib/go/jump-right";
import GoJumpLeft from "react-icons/lib/go/jump-left";

const ArtistMusicPlayerOperationCenter = props => {
  const { playing, onPlay, onStop, nextMusic, backMusic } = props;
  const buttonType = playing ? "stop" : "start";
  const play = playing ? onStop : onPlay;
  return (
    <div className="ArtistMusicPlayerOperationCenter">
      <GoJumpLeft
        className="ArtistMusicPlayerOperationCenter-GoJumpLeft"
        onClick={() => backMusic()}
      />

      <button className={`${buttonType} musicBtnIcon`} onClick={() => play()} />
      <GoJumpRight
        className="ArtistMusicPlayerOperationCenter-GoJumpRight"
        onClick={() => nextMusic()}
      />
    </div>
  );
};

export default ArtistMusicPlayerOperationCenter;

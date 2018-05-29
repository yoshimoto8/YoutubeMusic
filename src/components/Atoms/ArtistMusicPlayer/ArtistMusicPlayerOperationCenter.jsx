import React from "react";
import GoJumpRight from "react-icons/lib/go/jump-right";
import GoJumpLeft from "react-icons/lib/go/jump-left";
import Duration from "../MusicPlayer/Duration";

const ArtistMusicPlayerOperationCenter = props => {
  const {
    playing,
    onPlay,
    onStop,
    nextMusic,
    backMusic,
    duration,
    played
  } = props;
  const buttonType = playing ? "stop" : "start";
  const play = playing ? onStop : onPlay;

  return (
    <div className="ArtistMusicPlayerOperationCenter">
      <div className="ArtistMusicPlayerOperationCenter-top">
        <GoJumpLeft
          className="ArtistMusicPlayerOperationCenter-GoJumpLeft"
          onClick={() => backMusic()}
        />
        <button
          className={`${buttonType} musicBtnIcon`}
          onClick={() => play()}
        />
        <GoJumpRight
          className="ArtistMusicPlayerOperationCenter-GoJumpRight"
          onClick={() => nextMusic()}
        />
      </div>
      <div className="ArtistMusicPlayerOperationCenter-timePlayer">
        <Duration
          className="ArtistMusicPlayerOperationCenter-playedTime"
          seconds={duration * played}
        />
        <progress className="playedTimeBar" max={1} value={played} />
        <Duration
          className="ArtistMusicPlayerOperationCenter-remainingTime"
          seconds={duration * (1 - played)}
        />
      </div>
    </div>
  );
};

export default ArtistMusicPlayerOperationCenter;

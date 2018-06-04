import React from "react";
import TiArrowLoop from "react-icons/lib/ti/arrow-loop";
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
    played,
    toggleLoop,
    loop
  } = props;
  const buttonType = playing ? "stop" : "start";
  const play = playing ? onStop : onPlay;
  const loopColor = loop ? "#1db954" : "hsla(0, 0%, 100%, 0.6)";

  return (
    <div className="ArtistMusicPlayerOperationCenter">
      <div className="ArtistMusicPlayerOperationCenter-top">
        <GoJumpLeft
          className="ArtistMusicPlayerOperationCenter-GoJumpLeft"
          onClick={() => backMusic()}
        />
        <button
          className={`${buttonType} ArtistMusicPlayerOperationCenter-PlayBtn`}
          onClick={() => play()}
        />
        <GoJumpRight
          className="ArtistMusicPlayerOperationCenter-GoJumpRight"
          onClick={() => nextMusic()}
        />
        <TiArrowLoop
          className="ArtistMusicPlayerOperationCenter-loop"
          onClick={() => toggleLoop()}
          color={loopColor}
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

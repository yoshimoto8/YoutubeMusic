import React from "react";
import Duration from "../Atoms/MusicPlayer/Duration";
import LeftJumpBtn from "../Atoms/ArtistMusicPlayer/LeftJumpBtn";
import CenterPlayButton from "../Atoms/ArtistMusicPlayer/CenterPlayButton";
import RightJumpBtn from "../Atoms/ArtistMusicPlayer/RightJumpBtn";
import LoopBtn from "../Atoms/ArtistMusicPlayer/LoopBtn";

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
        <LeftJumpBtn backMusic={backMusic} />
        <CenterPlayButton buttonType={buttonType} play={play} />
        <RightJumpBtn nextMusic={nextMusic} />
        <LoopBtn toggleLoop={toggleLoop} loopColor={loopColor} />
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

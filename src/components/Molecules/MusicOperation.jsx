import React from "react";
import "./styles/MusicOperation.css";
import Duration from "./Duration";
import GoJumpRight from "react-icons/lib/go/jump-right";
import GoJumpLeft from "react-icons/lib/go/jump-left";
import MusicPlayButton from "../Atoms/MusicPlayButton";
import IoIosVolumeHigh from "react-icons/lib/io/ios-volume-high";
import TiArrowLoop from "react-icons/lib/ti/arrow-loop";

const MusicOperation = props => {
  const {
    playingId,
    playing,
    playPause,
    played,
    duration,
    volume,
    setVolume,
    musicName,
    artist,
    nextPlayMusic,
    backPlayMusic,
    albumLength,
    toggleLoop,
    loop
  } = props;

  const goBackPlay =
    playingId === 1 ? (
      <GoJumpLeft className="backPlayMusic" color="#404040" />
    ) : (
      <GoJumpLeft
        className="backPlayMusic"
        onClick={() => backPlayMusic(playingId)}
        color="#a9a9a9"
      />
    );

  const goNextPlay =
    playingId === albumLength ? (
      <GoJumpRight className="nextPlayMusic" color="#404040" />
    ) : (
      <GoJumpRight
        className="nextPlayMusic"
        onClick={() => nextPlayMusic(playingId)}
        color="#a9a9a9"
      />
    );
  const arrowLoopStyle = loop ? "#1db954" : "#a9a9a9";

  return (
    <footer className="footer">
      <div className="leftPlayer">
        <div className="playerMusicName">{musicName}</div>
        <div className="playerMusicArtist">{artist}</div>
      </div>
      <div className="centerPlayer">
        <div className="centerPlayerTop">
          {goBackPlay}
          {playing ? (
            <MusicPlayButton text="stop" play={playPause} />
          ) : (
            <MusicPlayButton text="start" play={playPause} />
          )}
          {goNextPlay}
          <TiArrowLoop
            className="loopPlayMusic"
            onClick={() => toggleLoop()}
            color={arrowLoopStyle}
          />
        </div>

        <div className="timePlayer">
          <Duration className="playedTime" seconds={duration * played} />
          <progress className="playedTimeBar" max={1} value={played} />
          <Duration
            className="remainingTime"
            seconds={duration * (1 - played)}
          />
        </div>
      </div>
      <div className="rightPlayer">
        <span>
          <IoIosVolumeHigh size="25" color="hsla(0, 0%, 100%, 0.6)" />
        </span>
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={e => setVolume(e)}
        />
      </div>
    </footer>
  );
};

export default MusicOperation;

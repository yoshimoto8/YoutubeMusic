import React from "react";
import "./styles/MusicOperation.css";
import Duration from "./Duration";
import MusicPlayButton from "../Atoms/MusicPlayButton";
import IoIosVolumeHigh from "react-icons/lib/io/ios-volume-high";

const MusicOperation = props => {
  const {
    playing,
    playPause,
    played,
    duration,
    volume,
    setVolume,
    musicName,
    artist
  } = props;
  return (
    <footer className="footer">
      <div className="leftPlayer">
        <div className="playerMusicName">{musicName}</div>
        <div className="playerMusicArtist">{artist}</div>
      </div>
      <div className="centerPlayer">
        <div>
          {playing ? (
            <MusicPlayButton text="stop" play={playPause} />
          ) : (
            <MusicPlayButton text="start" play={playPause} />
          )}
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

import React from "react";
import "./styles/MusicOperation.css";
import Duration from "./Duration";
import MusicPlayButton from "../Atoms/MusicPlayButton";

const MusicOperation = props => {
  const { playing, playPause, played, duration } = props;
  return (
    <footer className="footer">
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
    </footer>
  );
};

export default MusicOperation;

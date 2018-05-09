import React from "react";
import ReactPlayer from "react-player";
import "./styles/PomodoroMusicDisplay.css";

const PomodoroMusicDisplay = props => {
  const { musicArgments } = props;
  const { url, playing } = musicArgments;
  return (
    <div className="musicPlayDisplay">
      <ReactPlayer
        className="display"
        height="200px"
        width="200px"
        url={url}
        playing={playing}
      />
    </div>
  );
};

export default PomodoroMusicDisplay;

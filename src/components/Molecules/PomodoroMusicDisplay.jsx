import React from "react";
import ReactPlayer from "react-player";
import "./styles/PomodoroMusicDisplay.css";

const PomodoroMusicDisplay = props => {
  const {
    musicName,
    url,
    playing,
    volume,
    onProgress,
    onDuration,
    playPause,
    onPlay,
    onPause,
    loop
  } = props;

  return (
    <div className="musicPlayDisplay">
      <ReactPlayer
        height="150px"
        width="250px"
        controls
        url={url}
        volume={volume}
        playing={playing}
        loop={loop}
        onSeek={e => console.log("onSeek", e)}
        onProgress={onProgress}
        onDuration={onDuration}
        onPlay={() => onPlay()}
        onPause={() => onPause()}
      />
      <div className="musicTopAbout">
        <div className="musicName">{musicName}</div>
        <button className="startBtn" onClick={() => playPause()}>
          {playing ? "一時停止" : "曲の再生"}
        </button>
      </div>
    </div>
  );
};

export default PomodoroMusicDisplay;

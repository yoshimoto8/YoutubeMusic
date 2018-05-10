import React from "react";
import ReactPlayer from "react-player";
import "./styles/PomodoroMusicDisplay.css";

const PomodoroMusicDisplay = props => {
  const {
    musicName,
    url,
    setRef,
    playing,
    volumem,
    muted,
    played,
    loaded,
    duration,
    playbackRate,
    loop,
    onProgress,
    onDuration
  } = props;
  return (
    <div className="musicPlayDisplay">
      <ReactPlayer
        height="150px"
        width="250px"
        controls
        url={url}
        playing={playing}
        onSeek={e => console.log("onSeek", e)}
        onProgress={onProgress}
        onDuration={onDuration}
      />
      <div className="musicTopAbout">
        <div className="musicName">{musicName}</div>
        <button className="startBtn">曲を再生する</button>
      </div>
    </div>
  );
};

export default PomodoroMusicDisplay;

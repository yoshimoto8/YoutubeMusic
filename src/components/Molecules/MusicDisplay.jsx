import React from "react";
import ReactPlayer from "react-player";
import "./styles/MusicDisplay.css";

const MusicDisplay = props => {
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
    loop,
    musicList,
    alubmImage,
    playListName,
    createAlubmFormat,
    myMusicLists
  } = props;
  const sameName = myMusicLists.filter(data => {
    return data.playListName === playListName;
  });

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
        onProgress={onProgress}
        onDuration={onDuration}
        onPlay={() => onPlay()}
        onPause={() => onPause()}
      />
      <div className="musicTopAbout">
        <div className="musicName">{musicName}</div>
        <div className="musicDisplay-buttonList">
          <button className="startBtn" onClick={() => playPause()}>
            {playing ? "一時停止" : "曲の再生"}
          </button>
          {sameName.length === 0 ? (
            <button
              className="mylistBtn"
              onClick={() =>
                createAlubmFormat(musicList, alubmImage, playListName)
              }
            >
              マイリストに追加
            </button>
          ) : (
            <button className="mylistBtn">追加済み</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicDisplay;

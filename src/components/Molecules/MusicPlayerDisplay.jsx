import React from "react";
import ReactPlayer from "react-player";
import MusicPlayerDisplayAddMylist from "../Atoms/MusicPlayer/MusicPlayerDisplayAddMylist";
import "./styles/MusicDisplay.css";

const MusicPlayerDisplay = props => {
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
    myMusicLists,
    isAddMylist
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
          <MusicPlayerDisplayAddMylist
            isAddMylist={isAddMylist}
            sameName={sameName}
            createAlubmFormat={createAlubmFormat}
            musicList={musicList}
            alubmImage={alubmImage}
            playListName={playListName}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerDisplay;

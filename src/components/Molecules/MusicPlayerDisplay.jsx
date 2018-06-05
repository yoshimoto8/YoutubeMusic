import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import MusicPlayerDisplayAddMylist from "../Atoms/MusicPlayer/MusicPlayerDisplayAddMylist";

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
          {sessionStorage.getItem("user") ? (
            <MusicPlayerDisplayAddMylist
              isAddMylist={isAddMylist}
              sameName={sameName}
              createAlubmFormat={createAlubmFormat}
              musicList={musicList}
              alubmImage={alubmImage}
              playListName={playListName}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

MusicPlayerDisplay.propTypes = {
  musicName: PropTypes.string,
  url: PropTypes.string,
  playing: PropTypes.bool,
  volume: PropTypes.number,
  onProgress: PropTypes.func,
  onDuration: PropTypes.func,
  playPause: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  loop: PropTypes.bool,
  musicList: PropTypes.array,
  alubmImage: PropTypes.string,
  playListName: PropTypes.string,
  createAlubmFormat: PropTypes.func,
  myMusicLists: PropTypes.array,
  isAddMylist: PropTypes.bool
};

export default MusicPlayerDisplay;

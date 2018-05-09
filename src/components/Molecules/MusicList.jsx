import React from "react";
import YoutubeMusic from "../Atoms/YoutubeMusic";
import "./styles/MusicList.css";

const MusicList = props => {
  const {
    defaultMusicList,
    startList,
    endList,
    nextDefaultPlayList,
    backDefaultPlayList
  } = props;
  const newDefaultMusicList = defaultMusicList.slice(startList, endList);

  return (
    <div className="MusicList">
      <div className="playListBox">
        <div className="playListName">Default</div>
        <div className="selectPlayList">
          <div className="back" onClick={() => backDefaultPlayList()}>
            ＜
          </div>
          <div className="next" onClick={() => nextDefaultPlayList()}>
            ＞
          </div>
        </div>
      </div>
      <hr />
      {newDefaultMusicList.map((videoId, index) => {
        return (
          <YoutubeMusic
            key={index}
            videoId={videoId}
            className={`playContent id-${index}`}
          />
        );
      })}
    </div>
  );
};

export default MusicList;

import React from "react";
import YoutubeMusic from "../Atoms/YoutubeMusic";
import "./styles/MusicList.css";

const MusicList = props => {
  const {
    defaultMusicList,
    startList,
    endList,
    nextDefaultPlayList,
    backDefaultPlayList,
    onPlay,
    onPause
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
      <div>
        {newDefaultMusicList.map((data, index) => {
          return (
            <YoutubeMusic
              key={index}
              data={data}
              onPlay={onPlay}
              onPause={onPause}
              className={`playContent id-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MusicList;

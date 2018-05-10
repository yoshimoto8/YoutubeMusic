import React from "react";
import MusicTitle from "../Atoms/MusicTitle";
import MusicListIcon from "../Atoms/MusicListIcon";
import "./styles/PomodoroMusicList.css";

const PomodoroMusicList = props => {
  const { musicList, url, setUrl, formatChange } = props;
  return (
    <div className="musicList">
      {musicList.map((data, index) => {
        const playNow = data.src === url;
        return (
          <div
            className="musicRow"
            key={index}
            onClick={() => setUrl(data.src, data.name, data.artists, data.id)}
          >
            <MusicListIcon playNow={playNow} />
            <MusicTitle
              title={data.name}
              artist={data.artists}
              playNow={playNow}
            />
            <div className="musicTime">{formatChange(data.time)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PomodoroMusicList;

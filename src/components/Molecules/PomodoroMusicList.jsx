import React from "react";
import MusicTitle from "../Atoms/MusicTitle";

const PomodoroMusicList = props => {
  const { musicList, musicArgments, setUrl } = props;
  return (
    <div>
      {musicList.map((data, index) => {
        const playNow = data.src === musicArgments.url;
        return (
          <div key={index} onClick={() => setUrl(data.src)}>
            <MusicTitle title={data.name} playNow={playNow} />
          </div>
        );
      })}
    </div>
  );
};

export default PomodoroMusicList;

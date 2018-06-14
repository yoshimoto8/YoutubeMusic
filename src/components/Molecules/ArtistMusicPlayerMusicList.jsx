import React from "react";
import ArtistMusicPlayerRow from "./ArtistMusicPlayerRow";

const ArtistMusicPlayerMusicList = props => {
  const { musicList, setMusic, setMusicFunc, format } = props;
  return (
    <div className="ArtistMusicPlayer-MusicList">
      {musicList.map((data, index) => {
        const isSet = data.src === setMusic.src;
        return (
          <ArtistMusicPlayerRow
            key={index}
            data={data}
            setMusicFunc={setMusicFunc}
            format={format}
            isSet={isSet}
          />
        );
      })}
    </div>
  );
};

export default ArtistMusicPlayerMusicList;

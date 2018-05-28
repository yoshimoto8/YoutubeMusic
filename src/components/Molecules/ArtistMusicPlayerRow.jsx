import React from "react";
import ArtistMusicPlayerRowInfo from "../Atoms/ArtistMusicPlayer/ArtistMusicPlayerRowInfo";
import IoIosMusicalNote from "react-icons/lib/io/ios-musical-note";
import IoIosVolumeHigh from "react-icons/lib/io/ios-volume-high";

const ArtistMusicPlayerRow = props => {
  const { data, setMusicFunc, format, isSet } = props;
  const musicIcon = isSet ? (
    <IoIosVolumeHigh className="ArtistMusicPlayerRow-Icon" />
  ) : (
    <IoIosMusicalNote className="ArtistMusicPlayerRow-Icon" />
  );
  return (
    <div
      className="ArtistMusicPlayer-row"
      onClick={(src, name, artist) =>
        setMusicFunc(data.src, data.name, data.artists, data.id)
      }
    >
      {musicIcon}
      <ArtistMusicPlayerRowInfo
        name={data.name}
        artist={data.artists}
        isSet={isSet}
      />
      <div className="ArtistMusicPlayer-time">{format(data.time)}</div>
    </div>
  );
};

export default ArtistMusicPlayerRow;

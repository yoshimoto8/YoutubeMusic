import React from "react";

const ArtistMusicPlayerRowInfo = props => {
  const { name, artist, isSet } = props;
  const nameClass = isSet
    ? "ArtistMusicPlayer-setMusicName"
    : "ArtistMusicPlayer-name";
  return (
    <div className="ArtistMusicPlayer-nameArtistBox">
      <div className={nameClass}>{name}</div>
      <div className="ArtistMusicPlayer-artist">{artist}</div>
    </div>
  );
};

export default ArtistMusicPlayerRowInfo;

import React from "react";

const ArtistMusicPlayerRowInfo = props => {
  const { name, artist } = props;
  return (
    <div className="ArtistMusicPlayer-nameArtistBox">
      <div className="ArtistMusicPlayer-name">{name}</div>
      <div className="ArtistMusicPlayer-artist">{artist}</div>
    </div>
  );
};

export default ArtistMusicPlayerRowInfo;

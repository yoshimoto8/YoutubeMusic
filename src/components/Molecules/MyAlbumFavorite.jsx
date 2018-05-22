import React from "react";
import MyAlbumFavoriteTime from "../Atoms/MyAlbum/MyAlbumFavoriteTime";

const MyAlbumFavorite = props => {
  const { musicName, duration, artist, url, setMusicFunc } = props;
  return (
    <div
      className="MyAlbumFavorite"
      onClick={() => setMusicFunc(url, musicName, artist)}
    >
      <div>
        <div className="MyalbumFavorite-musicName">{musicName}</div>
        <div className="MyalbumFavorite-artist">{artist}</div>
      </div>
      <MyAlbumFavoriteTime duration={duration} />
    </div>
  );
};

export default MyAlbumFavorite;

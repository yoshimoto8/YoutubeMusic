import React from "react";

const MyAlbumFavoriteMusicName = props => {
  const { isSameUrl, musicName, artist } = props;
  return (
    <div className="MyAlbumFavorite-nameBox">
      {isSameUrl ? (
        <div className="MyalbumFavorite-setMusicName">{musicName}</div>
      ) : (
        <div className="MyalbumFavorite-musicName">{musicName}</div>
      )}
      <div className="MyalbumFavorite-artist">{artist}</div>
    </div>
  );
};

export default MyAlbumFavoriteMusicName;

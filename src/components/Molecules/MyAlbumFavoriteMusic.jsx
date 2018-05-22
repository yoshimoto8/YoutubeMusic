import React from "react";
import ReactPlayer from "react-player";

const MyAlbumFavoriteMusic = props => {
  const { url, musicName, artist } = props.setMusic;
  return (
    <div className="MyAlbumFavoriteMusic-display">
      <ReactPlayer
        className="MyAlbumFavoriteMusic-displayShow"
        width="250px"
        height="200px"
        url={url}
      />
      <div className="MyAlbumFavoriteMusic-musicName">{musicName}</div>
      <div className="MyAlbumFavoriteMusic-artist">{artist}</div>
    </div>
  );
};

export default MyAlbumFavoriteMusic;

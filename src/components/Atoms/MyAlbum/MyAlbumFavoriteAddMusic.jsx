import React from "react";
import FaCheck from "react-icons/lib/fa/check";

const MyAlbumFavoriteAddMusic = props => {
  const { arraySame, pushMyAlubm, musicName, duration, artist, url } = props;
  return (
    <div>
      {arraySame.length === 0 ? (
        <div
          className="MyAlbumFavorite-check"
          onClick={() => pushMyAlubm(musicName, duration, artist, url)}
        >
          +
        </div>
      ) : (
        <FaCheck className="MyAlbumFavorite-check" />
      )}
    </div>
  );
};

export default MyAlbumFavoriteAddMusic;

import React from "react";
import MyAlbumFavoriteTime from "../Atoms/MyAlbum/MyAlbumFavoriteTime";
import MyAlbumFavoriteMusicName from "../Atoms/MyAlbum/MyAlbumFavoriteMusicName";
import MyAlbumFavoriteAddMusic from "../Atoms/MyAlbum/MyAlbumFavoriteAddMusic";

const MyAlbumFavorite = props => {
  const {
    musicName,
    duration,
    artist,
    url,
    setMusicFunc,
    setMusic,
    pushMyAlubm,
    selectupdateMusic
  } = props;
  const isSameUrl = setMusic.url === url;

  const isSet = !!Object.keys(selectupdateMusic).length;
  const arraySame = isSet
    ? selectupdateMusic.musicList.filter(data => {
        return data.src === url;
      })
    : [];

  return (
    <div
      className="MyAlbumFavorite"
      onClick={() => setMusicFunc(url, musicName, artist)}
    >
      {isSet ? (
        <MyAlbumFavoriteAddMusic
          arraySame={arraySame}
          pushMyAlubm={pushMyAlubm}
          musicName={musicName}
          duration={duration}
          artist={artist}
          url={url}
        />
      ) : (
        <div className="MyAlbumFavorite-check" />
      )}
      <MyAlbumFavoriteMusicName
        isSameUrl={isSameUrl}
        musicName={musicName}
        artist={artist}
      />
      <MyAlbumFavoriteTime duration={duration} />
    </div>
  );
};

export default MyAlbumFavorite;

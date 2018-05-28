import React from "react";
import MyAlbumFavoriteTime from "../Atoms/MyAlbum/MyAlbumFavoriteTime";
import MyAlbumFavoriteMusicName from "../Atoms/MyAlbum/MyAlbumFavoriteMusicName";
import MyAlbumFavoriteAddMusic from "../Atoms/MyAlbum/MyAlbumFavoriteAddMusic";
import FaEllipsisH from "react-icons/lib/fa/ellipsis-h";
import { Tooltip } from "react-tippy";

const MyAlbumFavorite = props => {
  const {
    musicName,
    duration,
    artist,
    url,
    setMusicFunc,
    setMusic,
    pushMyAlubm,
    selectupdateMusic,
    deleteFavoriteMusic
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
      <Tooltip
        position="left"
        trigger="click"
        interactive
        html={
          <div className="myAlbum-musicAction">
            <div
              className="myAlbum-musicAction1"
              onClick={() => deleteFavoriteMusic(url)}
            >
              この曲を消去する
            </div>
          </div>
        }
      >
        <FaEllipsisH className="MyAlbumFavorite-editBtn" />
      </Tooltip>

      <MyAlbumFavoriteTime duration={duration} />
    </div>
  );
};

export default MyAlbumFavorite;

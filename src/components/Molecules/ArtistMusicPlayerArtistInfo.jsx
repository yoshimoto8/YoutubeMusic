import React from "react";

const ArtistMusicPlayerArtistInfo = props => {
  const { artist, musicLength, playing, onPlay, onStop, setMusic } = props;
  const isSet = !Object.keys(setMusic).length ? false : true;
  if (isSet) {
    return (
      <div>
        <h3>{`${setMusic.name}`}</h3>
        {playing ? (
          <button
            className="ArtistMusicPlayer-startBtn"
            onClick={() => onStop()}
          >
            曲を停止させる
          </button>
        ) : (
          <button
            className="ArtistMusicPlayer-startBtn"
            onClick={() => onPlay()}
          >
            曲を再生する
          </button>
        )}
      </div>
    );
  } else {
    return (
      <div className="ArtistMusicPlayer-artistInfo">
        <img src={artist.src} alt="" />
        <h2>{`${artist.name}のミュージックリスト`}</h2>
        <div>{`${musicLength}曲`}</div>
      </div>
    );
  }
};

export default ArtistMusicPlayerArtistInfo;

import React from "react";

const MusicPlayerOperationLeft = props => {
  const { musicName, artist, url } = props;
  return (
    <div className="leftPlayer">
      <div className="playerMusicName">
        <a className="playerMusicNameLink" href={url}>
          {musicName}
        </a>
      </div>
      <div className="playerMusicArtist">{artist}</div>
    </div>
  );
};

export default MusicPlayerOperationLeft;

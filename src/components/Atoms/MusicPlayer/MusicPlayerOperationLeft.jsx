import React from "react";
import PropTypes from "prop-types";

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

MusicPlayerOperationLeft.propTypes = {
  musicName: PropTypes.string,
  artist: PropTypes.string,
  url: PropTypes.string
};

export default MusicPlayerOperationLeft;

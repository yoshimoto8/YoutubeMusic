import React from "react";
import PropTypes from "prop-types";

const MusicPlayerListsTitle = props => {
  const { title, artist, playNow } = props;
  const nameClass = playNow ? "musicPlayTitle" : "musicTitle";
  return (
    <div className="musicAbout">
      <div className={nameClass}>{title}</div>
      <div className="nameArtist">{artist}</div>
    </div>
  );
};

MusicPlayerListsTitle.propType = {
  title: PropTypes.string,
  artist: PropTypes.string,
  playNow: PropTypes.bool
};

export default MusicPlayerListsTitle;

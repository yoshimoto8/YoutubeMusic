import React from "react";
import "./styles/MusicTitle.css";

const MusicTitle = props => {
  const { title, artist, playNow } = props;
  const nameClass = playNow ? "musicPlayTitle" : "musicTitle";

  return (
    <div className="musicAbout">
      <div className={nameClass}>{title}</div>
      <div className="nameArtist">{artist}</div>
    </div>
  );
};

export default MusicTitle;

import React from "react";

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

export default MusicPlayerListsTitle;

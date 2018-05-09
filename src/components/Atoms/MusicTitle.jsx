import React from "react";
import "./styles/MusicTitle.css";

const MusicTitle = props => {
  const { title, playNow } = props;
  const nameClass = playNow ? "musicPlayTitle" : "musicTitle";
  return <span className={nameClass}>{title}</span>;
};

export default MusicTitle;

import React from "react";
import "./styles/MusicPlayButton.css";

const MusicPlayButton = props => {
  const { text, play } = props;
  return <button className={`${text} musicBtnIcon`} onClick={() => play()} />;
};

export default MusicPlayButton;

import React from "react";

const MusicPlayButton = props => {
  const { text, play } = props;
  return <button className={`${text} musicBtnIcon`} onClick={() => play()} />;
};

export default MusicPlayButton;

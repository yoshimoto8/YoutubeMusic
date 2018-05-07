import React from "react";
import "./styles/PlayButton.css";

const PlayButton = props => {
  const { text, play } = props;
  return <button className={`${text} btnIcon`} onClick={() => play()} />;
};

export default PlayButton;

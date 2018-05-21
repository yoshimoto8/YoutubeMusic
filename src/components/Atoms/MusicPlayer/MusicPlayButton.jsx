import React from "react";
import PropTypes from "prop-types";

const MusicPlayButton = props => {
  const { text, play } = props;
  return <button className={`${text} musicBtnIcon`} onClick={() => play()} />;
};

MusicPlayButton.propTypes = {
  text: PropTypes.string,
  play: PropTypes.func
};

export default MusicPlayButton;

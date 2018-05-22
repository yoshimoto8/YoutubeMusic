import React from "react";
import PropTypes from "prop-types";
import GoJumpRight from "react-icons/lib/go/jump-right";
import GoJumpLeft from "react-icons/lib/go/jump-left";
import MusicPlayButton from "./MusicPlayButton";
import TiArrowLoop from "react-icons/lib/ti/arrow-loop";
import FaHeartO from "react-icons/lib/fa/heart-o";

const MusicPlayerOperationCenterTop = props => {
  const {
    arrowLoopStyle,
    toggleLoop,
    playing,
    playPause,
    playingId,
    backPlayMusic,
    albumLength,
    nextPlayMusic,
    addFavoriteMusic,
    musicName,
    url,
    artist,
    duration
  } = props;

  const goBackPlay =
    playingId === 1 ? (
      <GoJumpLeft className="backPlayMusic" color="#404040" />
    ) : (
      <GoJumpLeft
        className="backPlayMusic"
        onClick={() => backPlayMusic(playingId)}
        color="#a9a9a9"
      />
    );

  const goNextPlay =
    playingId === albumLength ? (
      <GoJumpRight className="nextPlayMusic" color="#404040" />
    ) : (
      <GoJumpRight
        className="nextPlayMusic"
        onClick={() => nextPlayMusic(playingId)}
        color="#a9a9a9"
      />
    );

  const playBtn = playing ? (
    <MusicPlayButton text="stop" play={playPause} />
  ) : (
    <MusicPlayButton text="start" play={playPause} />
  );

  return (
    <div className="centerPlayerTop">
      <FaHeartO
        className="MusicPlayerOperationCenterTop-favorite"
        onClick={() => addFavoriteMusic(musicName, url, artist, duration)}
        style={{ color: "#404040" }}
      />
      {goBackPlay}
      {playBtn}
      {goNextPlay}
      <TiArrowLoop
        className="loopPlayMusic"
        onClick={() => toggleLoop()}
        color={arrowLoopStyle}
      />
    </div>
  );
};

MusicPlayerOperationCenterTop.propTypes = {
  arrowLoopStyle: PropTypes.string,
  toggleLoop: PropTypes.func,
  playing: PropTypes.bool,
  playPause: PropTypes.func,
  playingId: PropTypes.number,
  backPlayMusic: PropTypes.func,
  albumLength: PropTypes.number,
  nextPlayMusic: PropTypes.func,
  addFavoriteMusic: PropTypes.func,
  musicName: PropTypes.string,
  url: PropTypes.string,
  artist: PropTypes.string,
  duration: PropTypes.any.isRequired
};

export default MusicPlayerOperationCenterTop;

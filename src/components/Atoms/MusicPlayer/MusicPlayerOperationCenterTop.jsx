import React from "react";
import GoJumpRight from "react-icons/lib/go/jump-right";
import GoJumpLeft from "react-icons/lib/go/jump-left";
import MusicPlayButton from "./MusicPlayButton";
import TiArrowLoop from "react-icons/lib/ti/arrow-loop";

const MusicPlayerOperationCenterTop = props => {
  const {
    arrowLoopStyle,
    toggleLoop,
    playing,
    playPause,
    playingId,
    backPlayMusic,
    albumLength,
    nextPlayMusic
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

export default MusicPlayerOperationCenterTop;

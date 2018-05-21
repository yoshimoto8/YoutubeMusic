import React from "react";
import MusicPlayerOperationCenterTop from "../Atoms/MusicPlayer/MusicPlayerOperationCenterTop";
import MusicPlayerOperationCenterBottom from "../Atoms/MusicPlayer/MusicPlayerOperationCenterBottom";
import MusicPlayerOperationLeft from "../Atoms/MusicPlayer/MusicPlayerOperationLeft";
import MusicPlayerOperationRight from "../Atoms/MusicPlayer/MusicPlayerOperationRight";

const MusicPlayerOperation = props => {
  const {
    playingId,
    playing,
    playPause,
    played,
    duration,
    volume,
    setVolume,
    musicName,
    artist,
    nextPlayMusic,
    backPlayMusic,
    albumLength,
    toggleLoop,
    loop,
    url
  } = props;
  const arrowLoopStyle = loop ? "#1db954" : "#a9a9a9";
  return (
    <footer className="footer">
      <MusicPlayerOperationLeft
        musicName={musicName}
        url={url}
        artist={artist}
      />

      <div className="centerPlayer">
        <MusicPlayerOperationCenterTop
          arrowLoopStyle={arrowLoopStyle}
          toggleLoop={toggleLoop}
          playing={playing}
          playPause={playPause}
          playingId={playingId}
          backPlayMusic={backPlayMusic}
          albumLength={albumLength}
          nextPlayMusic={nextPlayMusic}
        />
        <MusicPlayerOperationCenterBottom duration={duration} played={played} />
      </div>
      <MusicPlayerOperationRight setVolume={setVolume} volume={volume} />
    </footer>
  );
};

export default MusicPlayerOperation;

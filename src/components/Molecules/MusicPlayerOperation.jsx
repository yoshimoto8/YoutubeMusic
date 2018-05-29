import React from "react";
import PropTypes from "prop-types";
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
    url,
    addFavoriteMusic,
    myFavoriteMusic
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
          addFavoriteMusic={addFavoriteMusic}
          musicName={musicName}
          url={url}
          artist={artist}
          duration={duration}
          myFavoriteMusic={myFavoriteMusic}
        />
        <MusicPlayerOperationCenterBottom duration={duration} played={played} />
      </div>
      <MusicPlayerOperationRight setVolume={setVolume} volume={volume} />
    </footer>
  );
};

MusicPlayerOperation.propTypes = {
  playingId: PropTypes.number,
  playing: PropTypes.bool,
  playPause: PropTypes.func,
  played: PropTypes.number,
  duration: PropTypes.any.isRequired,
  volume: PropTypes.number,
  setVolume: PropTypes.func,
  musicName: PropTypes.string,
  artist: PropTypes.string,
  nextPlayMusic: PropTypes.func,
  backPlayMusic: PropTypes.func,
  albumLength: PropTypes.number,
  toggleLoop: PropTypes.func,
  loop: PropTypes.bool,
  url: PropTypes.string,
  addFavoriteMusic: PropTypes.func,
  myFavoriteMusic: PropTypes.array
};

export default MusicPlayerOperation;

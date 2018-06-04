import React from "react";
import ArtistMusicPlayerOperationLeft from "../Atoms/ArtistMusicPlayer/ArtistMusicPlayerOperationLeft";
import ArtistMusicPlayerOperationCenter from "../Atoms/ArtistMusicPlayer/ArtistMusicPlayerOperationCenter";
import IoIosVolumeHigh from "react-icons/lib/io/ios-volume-high";

const ArtistMusicPlayerOperation = props => {
  const {
    setMusic,
    playing,
    onPlay,
    onStop,
    nextMusic,
    backMusic,
    played,
    duration,
    setVolume,
    volume,
    toggleLoop,
    loop
  } = props;
  return (
    <footer className="footer">
      <ArtistMusicPlayerOperationLeft setMusic={setMusic} />
      <ArtistMusicPlayerOperationCenter
        playing={playing}
        onPlay={onPlay}
        onStop={onStop}
        nextMusic={nextMusic}
        backMusic={backMusic}
        duration={duration}
        played={played}
        toggleLoop={toggleLoop}
        loop={loop}
      />
      <div className="rightPlayer">
        <span>
          <IoIosVolumeHigh size="25" color="hsla(0, 0%, 100%, 0.6)" />
        </span>
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={e => setVolume(e)}
        />
      </div>
    </footer>
  );
};

export default ArtistMusicPlayerOperation;

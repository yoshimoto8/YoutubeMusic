import React from "react";
import ArtistMusicPlayerOperationLeft from "../Atoms/ArtistMusicPlayer/ArtistMusicPlayerOperationLeft";
import ArtistMusicPlayerOperationCenter from "../Atoms/ArtistMusicPlayer/ArtistMusicPlayerOperationCenter";

const ArtistMusicPlayerOperation = props => {
  const { setMusic, playing, onPlay, onStop, nextMusic, backMusic } = props;
  return (
    <footer className="footer">
      <ArtistMusicPlayerOperationLeft setMusic={setMusic} />
      <ArtistMusicPlayerOperationCenter
        playing={playing}
        onPlay={onPlay}
        onStop={onStop}
        nextMusic={nextMusic}
        backMusic={backMusic}
      />
    </footer>
  );
};

export default ArtistMusicPlayerOperation;

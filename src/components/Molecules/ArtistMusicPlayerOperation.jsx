import React from "react";
import ArtistMusicPlayerOperationLeft from "../Atoms/ArtistMusicPlayer/ArtistMusicPlayerOperationLeft";
import ArtistMusicPlayerOperationCenter from "../Atoms/ArtistMusicPlayer/ArtistMusicPlayerOperationCenter";

const ArtistMusicPlayerOperation = props => {
  const { setMusic, playing, onPlay } = props;
  return (
    <footer className="footer">
      <ArtistMusicPlayerOperationLeft setMusic={setMusic} />
      <ArtistMusicPlayerOperationCenter playing={playing} onPlay={onPlay} />
    </footer>
  );
};

export default ArtistMusicPlayerOperation;

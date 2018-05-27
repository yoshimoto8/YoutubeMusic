import React from "react";
import ArtistMusicPlayerOperationLeft from "../Atoms/ArtistMusicPlayer/ArtistMusicPlayerOperationLeft";

const ArtistMusicPlayerOperation = props => {
  const { setMusic } = props;
  return (
    <footer className="footer">
      <ArtistMusicPlayerOperationLeft setMusic={setMusic} />
    </footer>
  );
};

export default ArtistMusicPlayerOperation;

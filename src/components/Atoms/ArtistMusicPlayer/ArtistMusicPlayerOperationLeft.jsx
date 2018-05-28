import React from "react";

const ArtistMusicPlayerOperationLeft = props => {
  const { setMusic } = props;
  console.log(setMusic);
  return (
    <div className="ArtistMusicPlayerOperationLeft-box">
      <div className="ArtistMusicPlayerOperationLeft-musicName">
        {setMusic.name}
      </div>
      <div className="ArtistMusicPlayerOperationLeft-musicArtist">
        {setMusic.artists}
      </div>
    </div>
  );
};

export default ArtistMusicPlayerOperationLeft;

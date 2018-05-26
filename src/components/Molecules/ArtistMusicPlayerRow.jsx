import React from "react";
import ArtistMusicPlayerRowInfo from "../Atoms/ArtistMusicPlayer/ArtistMusicPlayerRowInfo";

const ArtistMusicPlayerRow = props => {
  const { data, setMusicFunc, format } = props;
  return (
    <div
      className="ArtistMusicPlayer-row"
      onClick={music => setMusicFunc(data.src)}
    >
      <ArtistMusicPlayerRowInfo name={data.name} artist={data.artists} />
      <div className="ArtistMusicPlayer-time">{format(data.time)}</div>
    </div>
  );
};

export default ArtistMusicPlayerRow;

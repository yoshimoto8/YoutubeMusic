import React from "react";
import { Link } from "react-router-dom";

const ArtistList = props => {
  const { artistLists, setArtist } = props;
  return (
    <div>
      <div className="Artist-display">
        {artistLists.map((data, index) => {
          return (
            <div key={index} className="Artist-artistBox">
              <div className="Artist-musicController">
                <Link
                  to="/ArtistMusicPlayer"
                  className="Artist-playBtn"
                  onClick={() => setArtist(data)}
                />
              </div>
              <img className="Artist-image" src={data.src} alt="" />
              <div className="Artist-name">{data.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistList;

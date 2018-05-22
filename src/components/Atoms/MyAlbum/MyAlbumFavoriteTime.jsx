import React from "react";
import format from "./duration";

const MyAlbumFavoriteTime = props => {
  const { duration } = props;
  return <div className="MyalbumFavoriteTime-time">{format(duration)}</div>;
};

export default MyAlbumFavoriteTime;

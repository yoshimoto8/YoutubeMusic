import React from "react";
import format from "./duration";

const MyAlbumFavoriteTime = props => {
  const { duration } = props;
  return <div className="MyalbumFavorite-time">{format(duration)}</div>;
};

export default MyAlbumFavoriteTime;

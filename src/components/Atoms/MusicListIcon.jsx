import React from "react";
import IoIosMusicalNote from "react-icons/lib/io/ios-musical-note";
import IoIosVolumeHigh from "react-icons/lib/io/ios-volume-high";
import "./styles/MusicListIcon.css";

const MusicListIcon = props => {
  const { playNow } = props;
  const styles = {
    className: "musicIcon",
    color: "hsla(0, 0%, 100%, 0.6)",
    size: "20"
  };
  const icon = playNow ? (
    <IoIosVolumeHigh {...styles} />
  ) : (
    <IoIosMusicalNote {...styles} />
  );

  return <div>{icon}</div>;
};

export default MusicListIcon;

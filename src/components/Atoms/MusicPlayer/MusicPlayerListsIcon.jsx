import React from "react";
import PropTypes from "prop-types";
import IoIosMusicalNote from "react-icons/lib/io/ios-musical-note";
import IoIosVolumeHigh from "react-icons/lib/io/ios-volume-high";

const MusicPlayerListsIcon = props => {
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

MusicPlayerListsIcon.propTypes = {
  playNow: PropTypes.bool
};

export default MusicPlayerListsIcon;

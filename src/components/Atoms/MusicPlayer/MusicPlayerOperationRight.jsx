import React from "react";
import IoIosVolumeHigh from "react-icons/lib/io/ios-volume-high";

const MusicPlayerOperationRight = props => {
  const { setVolume, volume } = props;
  return (
    <div className="rightPlayer">
      <span>
        <IoIosVolumeHigh size="25" color="hsla(0, 0%, 100%, 0.6)" />
      </span>
      <input
        type="range"
        min={0}
        max={1}
        step="any"
        value={volume}
        onChange={e => setVolume(e)}
      />
    </div>
  );
};

export default MusicPlayerOperationRight;

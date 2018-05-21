import React from "react";
import Duration from "./Duration";

const MusicPlayerOperationCenterBottom = props => {
  const { duration, played } = props;
  return (
    <div className="timePlayer">
      <Duration className="playedTime" seconds={duration * played} />
      <progress className="playedTimeBar" max={1} value={played} />
      <Duration className="remainingTime" seconds={duration * (1 - played)} />
    </div>
  );
};

export default MusicPlayerOperationCenterBottom;

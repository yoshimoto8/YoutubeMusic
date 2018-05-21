import React from "react";
import PropTypes from "prop-types";

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

MusicPlayerOperationCenterBottom.propTypes = {
  duration: PropTypes.any.isRequired,
  played: PropTypes.number
};

export default MusicPlayerOperationCenterBottom;

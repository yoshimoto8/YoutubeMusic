import React from "react";
import PlayButton from "../Atoms/PlayButton";
import StopButton from "../Atoms/StopButton";

const TimeManagement = props => {
  const { play } = props;
  return (
    <div>
      <PlayButton play={play} />
      <StopButton />
    </div>
  );
};

export default TimeManagement;

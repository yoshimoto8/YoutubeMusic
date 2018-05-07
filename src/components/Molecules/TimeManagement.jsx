import React from "react";
import PlayButton from "../Atoms/PlayButton";
import "./styles/TimeManagement.css";

const TimeManagement = props => {
  const { play, stop } = props;
  return (
    <div className="timeManagement">
      <PlayButton play={play} text={"start"} />
      <PlayButton play={stop} text={"stop"} />
    </div>
  );
};

export default TimeManagement;

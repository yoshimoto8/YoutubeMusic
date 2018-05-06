import React from "react";
import ShowMode from "../Atoms/ShowMode";
import ShowTime from "../Atoms/ShowTime";

const Display = props => {
  const { showTime, modeType } = props;
  return (
    <div>
      <ShowTime showTime={showTime} />
      <ShowMode modeType={modeType} />
    </div>
  );
};

export default Display;

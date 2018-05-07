import React from "react";
import "./styles/ShowTime.css";

const ShowTime = props => {
  return <div className="time">{props.showTime}</div>;
};

export default ShowTime;

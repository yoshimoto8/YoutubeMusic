import React from "react";
import "./styles/SelectButton.css";

const SelectButton = props => {
  const { text, setTime } = props;
  return (
    <button className="selectButton" onClick={() => setTime()}>
      {text}
    </button>
  );
};

export default SelectButton;

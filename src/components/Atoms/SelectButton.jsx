import React from "react";

const SelectButton = props => {
  const { text, setTime } = props;
  return (
    <div>
      <button onClick={() => setTime()}>{text}</button>
    </div>
  );
};

export default SelectButton;

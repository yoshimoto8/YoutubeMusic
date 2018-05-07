import React from "react";
import SelectButton from "../Atoms/SelectButton";
import "./styles/SelectModes.css";

const SelectModes = props => {
  const { setTimeForCode, setTimeForSocial, setTimeForCoffee } = props;
  return (
    <div className="selectModes">
      <SelectButton text={"Code"} setTime={setTimeForCode} />
      <SelectButton text={"Social"} setTime={setTimeForSocial} />
      <SelectButton text={"Coffee"} setTime={setTimeForCoffee} />
    </div>
  );
};

export default SelectModes;

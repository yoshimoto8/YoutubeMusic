import React from "react";
import SelectButton from "../Atoms/SelectButton";

const SelectModes = props => {
  const { setTimeForCode, setTimeForSocial, setTimeForCoffee } = props;
  return (
    <div>
      <SelectButton text={"Code"} setTime={setTimeForCode} />
      <SelectButton text={"Social"} setTime={setTimeForSocial} />
      <SelectButton text={"Coffee"} setTime={setTimeForCoffee} />
    </div>
  );
};

export default SelectModes;

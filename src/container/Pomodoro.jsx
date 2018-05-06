import React from "react";
import TimeManagement from "../components/Molecules/TimeManagement";
import Display from "../components/Molecules/Display";
import SelectModes from "../components/Molecules/SelectModes";

class Pomodoro extends React.Component {
  static defaultProps = {
    time: 1500,
    play: false,
    modeType: 0
  };

  constructor() {
    super();
    this.state = {
      time: 1500,
      modeType: "Code",
      play: false
    };
  }

  // formatType() {
  //   return [
  //     { type: "Code", time: 1500 },
  //     { type: "Social", time: 900 },
  //     { type: "Coffee", time: 300 }
  //   ];
  // }

  setTimeForCode = () => {
    this.setState({ modeType: "Code", time: 1500 });
  };
  setTimeForSocial = () => {
    this.setState({ modeType: "Social", time: 900 });
  };
  setTimeForCoffee = () => {
    this.setState({ modeType: "Coffee", time: 300 });
  };

  elapse = () => {
    const newState = this.state.time - 1;
    this.setState({ time: newState });
  };

  format = seconds => {
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor((seconds % 3600) % 60);
    let timeFormated = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    return timeFormated;
  };

  play = () => {
    setInterval(() => this.elapse(), 1000);
    this.setState({ play: true });
  };

  stop = () => {
    this.setState({ play: false });
  };

  render() {
    const { time } = this.state;
    return (
      <div>
        <Display showTime={this.format(time)} modeType={this.state.modeType} />
        <SelectModes
          setTimeForCode={() => this.setTimeForCode()}
          setTimeForSocial={() => this.setTimeForSocial()}
          setTimeForCoffee={() => this.setTimeForCoffee()}
        />
        <TimeManagement play={() => this.play()} />
      </div>
    );
  }
}

export default Pomodoro;

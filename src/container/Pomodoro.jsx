import React from "react";
import TimeManagement from "../components/Molecules/TimeManagement";
import ShowTime from "../components/Atoms/ShowTime";

class Pomodoro extends React.Component {
  static defaultProps = {
    time: 1500,
    play: false
  };

  constructor() {
    super();
    this.state = {
      time: 1500,
      play: false
    };
  }

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
        <ShowTime showTime={this.format(time)} />
        <TimeManagement play={() => this.play()} />
      </div>
    );
  }
}

export default Pomodoro;

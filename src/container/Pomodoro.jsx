import React from "react";
import update from "immutability-helper";
import TimeManagement from "../components/Molecules/TimeManagement";
import Display from "../components/Molecules/Display";
import SelectModes from "../components/Molecules/SelectModes";
import PomodoroMusicList from "../components/Molecules/PomodoroMusicList";
import PomodoroMusicDisplay from "../components/Molecules/PomodoroMusicDisplay";
import "./styles/Pomodoro.css";

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
      play: false,
      musicList: [
        {
          name: "Capsule Non-stop Remix",
          src: "https://www.youtube.com/watch?v=pqUy6Q8pllA"
        },
        {
          name: "Perfume & capsule Progressive House MIX",
          src: "https://www.youtube.com/watch?v=X3rOqETfHdk"
        },
        {
          name: "Perfume Mix [Perfume All Time Best Mix ～Cool Side～]",
          src: "https://www.youtube.com/watch?v=kbQb0E8e-ug&t=2145s"
        },
        {
          name: "The Chainsmokers - Don't Let Me Down ",
          src: "https://www.youtube.com/watch?v=s8XIgR5OGJc"
        },
        {
          name: "Twenty One Pilots - Stressed Out",
          src: "https://www.youtube.com/watch?v=0t2tjNqGyJI"
        }
      ],
      musicArgments: {
        url: null,
        playing: false
      }
    };
  }

  setUrl = src => {
    const newState = update(this.state.musicArgments, { url: { $set: src } });
    this.setState({ musicArgments: newState });
  };

  playPause = id => {
    this.setState({ playing: !this.state.playing });
  };

  onPlay = id => {
    console.log("onPlay");
    const newData = update(this.state.defaultMusicList, {
      [id]: { playing: { $set: true } }
    });
    this.setState({ defaultMusicList: newData });
  };

  onPause = id => {
    console.log("onPause");
    this.setState({ playing: false });
  };

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

  start = () => {
    this.Interval = setInterval(() => this.elapse(), 1000);
  };

  play = () => {
    this.start();
    this.setState({ play: true });
  };

  stop = () => {
    clearInterval(this.Interval);
    this.setState({ play: false });
  };

  render() {
    const { time, musicList, musicArgments } = this.state;
    return (
      <div className="main">
        <div className="mainPomodoro">
          <Display
            showTime={this.format(time)}
            modeType={this.state.modeType}
          />
          <div>
            <SelectModes
              setTimeForCode={() => this.setTimeForCode()}
              setTimeForSocial={() => this.setTimeForSocial()}
              setTimeForCoffee={() => this.setTimeForCoffee()}
            />

            <TimeManagement play={() => this.play()} stop={() => this.stop()} />
          </div>
        </div>
        <div className="musicPlay">
          <PomodoroMusicDisplay musicArgments={musicArgments} />
          <PomodoroMusicList
            musicList={musicList}
            musicArgments={musicArgments}
            setUrl={src => this.setUrl(src)}
          />
        </div>
      </div>
    );
  }
}

export default Pomodoro;

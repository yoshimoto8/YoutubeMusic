import React from "react";
import update from "immutability-helper";
import TimeManagement from "../components/Molecules/TimeManagement";
import Display from "../components/Molecules/Display";
import SelectModes from "../components/Molecules/SelectModes";
import PomodoroMusicList from "../components/Molecules/PomodoroMusicList";
import PomodoroMusicDisplay from "../components/Molecules/PomodoroMusicDisplay";
import MusicOperation from "../components/Molecules/MusicOperation";
import "./styles/Pomodoro.css";

class Pomodoro extends React.Component {
  static defaultProps = {
    time: 1500,
    play: false,
    modeType: 0
  };

  constructor(props) {
    super(props);
    this.state = {
      time: 1500,
      modeType: "Code",
      play: false,
      musicList: [
        {
          name: "Capsule Non-stop Remix",
          artists: "nothing",
          time: 322,
          src: "https://www.youtube.com/watch?v=pqUy6Q8pllA"
        },
        {
          name: "Perfume & capsule Progressive House MIX",
          artists: "Perfume",
          time: 424,
          src: "https://www.youtube.com/watch?v=X3rOqETfHdk"
        },
        {
          name: "Perfume Mix [Perfume All Time Best Mix ～Cool Side～]",
          artists: "Perfume",
          time: 333,
          src: "https://www.youtube.com/watch?v=kbQb0E8e-ug&t=2145s"
        },
        {
          name: "The Chainsmokers - Don't Let Me Down ",
          artists: "The Chainsmokers",
          time: 534,
          src: "https://www.youtube.com/watch?v=s8XIgR5OGJc"
        },
        {
          name: "Twenty One Pilots - Stressed Out",
          artists: "トゥエンティ・ワン・パイロッツ",
          time: 600,
          src: "https://www.youtube.com/watch?v=0t2tjNqGyJI"
        }
      ],

      musicName: "",
      url: null,
      playing: true,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false
    };
  }
  setUrl = (src, musicName) => {
    this.setState({ url: src, musicName: musicName });
  };

  playPause = () => {
    const conditions = this.state.playing ? false : true;
    this.setState({ playing: conditions });
  };

  onDuration = duration => {
    console.log("onDuration", duration);
    this.setState({ duration });
  };

  onProgress = state => {
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

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
    const { setUrl, playPause, onProgress, onDuration } = this;
    const {
      musicList,
      time,
      url,
      playing,
      volumem,
      muted,
      played,
      loaded,
      duration,
      playbackRate,
      loop,
      musicName
    } = this.state;

    return (
      <div className="main">
        <div className="musicPlay">
          <PomodoroMusicDisplay
            musicName={musicName}
            url={url}
            playing={playing}
            volumem={volumem}
            muted={muted}
            played={played}
            loaded={loaded}
            duration={duration}
            playbackRate={playbackRate}
            loop={loop}
            onProgress={state => onProgress(state)}
            onDuration={duration => onDuration(duration)}
          />
          <PomodoroMusicList
            musicList={musicList}
            url={url}
            playing={playing}
            setUrl={(src, musicName) => setUrl(src, musicName)}
            formatChange={seconds => this.format(seconds)}
          />
        </div>
        <div className="mainPomodoro">
          <Display
            showTime={this.format(time)}
            modeType={this.state.modeType}
          />
          <SelectModes
            setTimeForCode={() => this.setTimeForCode()}
            setTimeForSocial={() => this.setTimeForSocial()}
            setTimeForCoffee={() => this.setTimeForCoffee()}
          />
          <TimeManagement play={() => this.play()} stop={() => this.stop()} />
        </div>
        {url ? (
          <MusicOperation
            playPause={() => playPause()}
            playing={playing}
            played={played}
            duration={duration}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Pomodoro;

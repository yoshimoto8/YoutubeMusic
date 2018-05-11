import React from "react";
import TimeManagement from "../components/Molecules/TimeManagement";
import Display from "../components/Molecules/Display";
import SelectModes from "../components/Molecules/SelectModes";
import PomodoroMusicList from "../components/Molecules/PomodoroMusicList";
import PomodoroMusicDisplay from "../components/Molecules/PomodoroMusicDisplay";
import MusicOperation from "../components/Molecules/MusicOperation";
import "./styles/Pomodoro.css";

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 1500,
      modeType: "Code",
      play: false,
      musicList: [
        {
          id: 1,
          name: "After Dark",
          artists: "Aimer",
          time: 278,
          src: "https://www.youtube.com/watch?v=hIQeXJxWMi4"
        },
        {
          id: 2,
          name: "Aimer Premier Live 2012.06.08 DIGEST",
          artists: "Aimer",
          time: 478,
          src: "https://www.youtube.com/watch?v=zxvLA7xepGA"
        },
        {
          id: 3,
          name: "Re:pray",
          artists: "Aimer",
          time: 317,
          src: "https://www.youtube.com/watch?v=cPB-ijSzEMk"
        },
        {
          id: 4,
          name: "六等星の夜",
          artists: "Aimer",
          time: 341,
          src: "https://www.youtube.com/watch?v=jgSyul7n-8M"
        },
        {
          id: 5,
          name: "Kataomoi",
          artists: "Aimer",
          time: 600,
          src: "https://www.youtube.com/watch?v=2H36K1Hi72s"
        },
        {
          id: 6,
          name: "ONE",
          artists: "Aimer",
          time: 341,
          src: "https://www.youtube.com/watch?v=GOurhX0YAPQ"
        }
      ],
      albumLength: null,
      playingId: null,
      musicName: "",
      artist: "",
      url: null,
      playing: true,
      volume: 0.5,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false
    };
  }
  componentDidMount() {
    const albumLength = this.state.musicList.length;
    this.setState({ albumLength });
  }

  setFirstMusic = (src, musicName, artist, id) => {
    const playingId = id;
    this.setState({
      url: src,
      musicName: musicName,
      artist: artist,
      playing: false,
      playingId: playingId
    });
  };

  setUrl = (src, musicName, artist, id) => {
    console.log(id);
    const playingId = id;
    this.setState({
      playingId: playingId,
      url: src,
      musicName: musicName,
      artist: artist
    });
  };

  playPause = () => {
    const conditions = this.state.playing ? false : true;
    this.setState({ playing: conditions });
  };

  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  onDuration = duration => {
    this.setState({ duration });
  };

  onProgress = state => {
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  onPlay = () => {
    this.setState({ playing: true });
  };

  onPause = () => {
    this.setState({ playing: false });
  };

  nextPlayMusic = playingId => {
    const nextPlay = playingId === 0 ? playingId + 1 : playingId;
    const { id, src, name, artists } = this.state.musicList[nextPlay];
    this.setState({
      playingId: id,
      url: src,
      musicName: name,
      artist: artists,
      playing: true
    });
  };

  backPlayMusic = playingId => {
    const nextPlayId = playingId - 2;
    const { id, src, name, artists } = this.state.musicList[nextPlayId];
    this.setState({
      playingId: id,
      url: src,
      musicName: name,
      artist: artists,
      playing: true
    });
  };

  toggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  // ここからポモドーロ
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
    const {
      setUrl,
      playPause,
      onProgress,
      onDuration,
      setVolume,
      setFirstMusic,
      onPlay,
      onPause,
      nextPlayMusic,
      backPlayMusic,
      toggleLoop
    } = this;

    const {
      musicList,
      time,
      url,
      playing,
      volume,
      played,
      duration,
      musicName,
      artist,
      playingId,
      albumLength,
      loop
    } = this.state;

    if (played === 1 && playingId !== albumLength) {
      nextPlayMusic(playingId);
    }

    if (!url) {
      const { src, artists, name, id } = musicList[0];
      setFirstMusic(src, name, artists, id);
    }

    return (
      <div className="main">
        <div className="musicPlay">
          <PomodoroMusicDisplay
            musicName={musicName}
            url={url}
            playing={playing}
            volume={volume}
            loop={loop}
            onProgress={state => onProgress(state)}
            onDuration={duration => onDuration(duration)}
            playPause={playPause}
            onPlay={() => onPlay()}
            onPause={() => onPause()}
          />
          <PomodoroMusicList
            musicList={musicList}
            url={url}
            playing={playing}
            setUrl={(src, musicName, artist, id) =>
              setUrl(src, musicName, artist, id)
            }
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
            playingId={playingId}
            albumLength={albumLength}
            playPause={() => playPause()}
            playing={playing}
            played={played}
            duration={duration}
            volume={volume}
            setVolume={e => setVolume(e)}
            musicName={musicName}
            artist={artist}
            nextPlayMusic={playingId => nextPlayMusic(playingId)}
            backPlayMusic={playingId => backPlayMusic(playingId)}
            toggleLoop={() => toggleLoop()}
            loop={loop}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Pomodoro;

import React from "react";
import { connect } from "react-redux";
import PomodoroMusicList from "../components/Molecules/PomodoroMusicList";
import PomodoroMusicDisplay from "../components/Molecules/PomodoroMusicDisplay";
import MusicOperation from "../components/Molecules/MusicOperation";
import "./styles/Pomodoro.css";

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      musicList: [
        {
          id: 1,
          name: "After Dark",
          artists: "Aimer",
          time: 278,
          src: "https://www.youtube.com/watch?v=hIQeXJxWMi4"
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
  componentWillMount() {
    const musicList = this.props.musicList;
    const setmusicList =
      typeof musicList === "object"
        ? Object.keys(musicList).map(function(key) {
            return musicList[key];
          })
        : musicList;

    const albumLength = !setmusicList
      ? this.state.musicList.length
      : setmusicList.length;

    !setmusicList
      ? this.setState({
          albumLength: albumLength
        })
      : this.setState({
          musicList: setmusicList,
          albumLength: albumLength
        });
  }

  setFirstMusic = (src, musicName, artist, id) => {
    const playingId = id;
    this.setState({
      url: src,
      musicName: musicName,
      artist: artist,
      playing: false,
      playingId: playingId,
      played: 0
    });
  };

  setUrl = (src, musicName, artist, id) => {
    const playingId = id;
    this.setState({
      playingId: playingId,
      url: src,
      musicName: musicName,
      artist: artist,
      played: 0
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
      playing: true,
      played: 0
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
      playing: true,
      played: 0
    });
  };

  toggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  format = seconds => {
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor((seconds % 3600) % 60);
    let timeFormated = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    return timeFormated;
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

    console.log(musicList);

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

const mapStateToProps = state => ({
  musicList: state.reducer.setPlayList.defaultMusic
});

export default connect(mapStateToProps, null)(MusicPlayer);

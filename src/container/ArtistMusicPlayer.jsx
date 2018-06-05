import React from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import $ from "jquery";
import "./styles/ArtistMusicPlayer.css";
import TabHelmet from "../components/Atoms/TabHelmet";
import ArtistMusicPlayerOperation from "../components/Molecules/ArtistMusicPlayerOperation";
import ArtistMusicPlayerRow from "../components/Molecules/ArtistMusicPlayerRow";

class ArtistMusicPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      artist: {},
      setMusic: {},
      playing: false,
      played: 0,
      duration: 0,
      volume: 0.5,
      loop: false
    };
  }

  componentWillMount() {
    if (!Object.keys(this.props.artist).length) {
      const artist = $.parseJSON(sessionStorage.getItem("aritst"));
      this.setState({ artist });
    } else {
      const artist = this.props.artist;
      sessionStorage.setItem("aritst", JSON.stringify(artist));
      this.setState({ artist });
    }
  }

  onProgress = state => {
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  onDuration = duration => {
    this.setState({ duration });
  };

  onPlay = () => {
    this.setState({ playing: true });
  };

  onStop = () => {
    this.setState({ playing: false });
  };

  toggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  nextMusic = () => {
    if (this.state.setMusic.id !== this.state.artist.musicList.length) {
      const id = this.state.setMusic.id + 1;
      const result = this.state.artist.musicList.find(obj => obj.id === id);
      this.setState({ setMusic: result, played: 0 });
    }
  };

  backMusic = () => {
    if (this.state.setMusic.id !== 1) {
      const id = this.state.setMusic.id - 1;
      const result = this.state.artist.musicList.find(obj => obj.id === id);
      this.setState({ setMusic: result });
    }
  };

  setMusicFunc = (src, name, artist, id) => {
    this.setState({
      setMusic: {
        id: id,
        src: src,
        name: name,
        artists: artist,
        played: 0
      }
    });
  };

  format = seconds => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = this.pad(date.getUTCSeconds());
    if (hh) {
      return `${hh}:${this.pad(mm)}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  pad = string => {
    return ("0" + string).slice(-2);
  };

  render() {
    const {
      setMusicFunc,
      format,
      onPlay,
      onStop,
      nextMusic,
      backMusic,
      onProgress,
      onDuration,
      setVolume,
      toggleLoop
    } = this;
    const {
      artist,
      setMusic,
      playing,
      played,
      duration,
      volume,
      loop
    } = this.state;
    // ↓適当
    const musicLength =
      artist.musicList === undefined ? 1 : artist.musicList.length;

    if (played === 1) {
      nextMusic();
    }

    const { musicList, name } = artist;
    return (
      <div className="main">
        <TabHelmet title={`${name}のプレイリスト`} />
        <div className="ArtistMusicPlayer">
          {!Object.keys(setMusic).length ? (
            <div className="ArtistMusicPlayer-artistInfo">
              <img src={artist.src} alt="" />
              <h2>{`${artist.name}のミュージックリスト`}</h2>
              <div>{`${musicLength}曲`}</div>
            </div>
          ) : (
            <div className="ArtistMusicPlayer-musicDisplay">
              <ReactPlayer
                className="ArtistMusicPlayer-player"
                url={setMusic.src}
                width="250px"
                height="250px"
                onPlay={() => onPlay()}
                playing={playing}
                onProgress={onProgress}
                onDuration={onDuration}
                volume={volume}
                loop={loop}
              />
              <h2>{`${artist.name}のミュージックリスト`}</h2>
              <div>{`${musicLength}曲`}</div>
              {playing ? (
                <button
                  className="ArtistMusicPlayer-startBtn"
                  onClick={() => onStop()}
                >
                  曲を停止させる
                </button>
              ) : (
                <button
                  className="ArtistMusicPlayer-startBtn"
                  onClick={() => onPlay()}
                >
                  曲を再生する
                </button>
              )}
            </div>
          )}
          <div className="ArtistMusicPlayer-MusicList">
            {musicList.map((data, index) => {
              const isSet = data.src === setMusic.src;
              return (
                <ArtistMusicPlayerRow
                  key={index}
                  data={data}
                  setMusicFunc={(src, name, artist, id) =>
                    setMusicFunc(src, name, artist, id)
                  }
                  format={secounds => format(secounds)}
                  isSet={isSet}
                />
              );
            })}
          </div>
        </div>

        {!Object.keys(setMusic).length ? (
          <div />
        ) : (
          <ArtistMusicPlayerOperation
            setMusic={setMusic}
            playing={playing}
            onPlay={() => onPlay()}
            onStop={() => onStop()}
            nextMusic={() => nextMusic()}
            backMusic={() => backMusic()}
            played={played}
            duration={duration}
            setVolume={e => setVolume(e)}
            volume={volume}
            toggleLoop={toggleLoop}
            loop={loop}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artist: state.rootReducer.setArtist
});

export default connect(mapStateToProps, null)(ArtistMusicPlayer);

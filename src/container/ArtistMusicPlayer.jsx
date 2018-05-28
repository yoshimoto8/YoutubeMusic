import React from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import $ from "jquery";
import "./styles/ArtistMusicPlayer.css";
import ArtistMusicPlayerOperation from "../components/Molecules/ArtistMusicPlayerOperation";
import ArtistMusicPlayerRow from "../components/Molecules/ArtistMusicPlayerRow";

class ArtistMusicPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      artist: {},
      setMusic: {},
      playing: false
    };
  }

  componentWillMount() {
    this.setState({ artist: this.props.artist });
  }

  onPlay = () => {
    this.setState({ playing: true });
  };

  onStop = () => {
    this.setState({ playing: false });
  };

  nextMusic = () => {
    if (this.state.setMusic.id !== this.state.artist.musicList.length) {
      const id = this.state.setMusic.id + 1;
      const result = this.state.artist.musicList.find(obj => obj.id === id);
      this.setState({ setMusic: result });
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
        artist: artist
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
    const { setMusicFunc, format, onPlay, onStop, nextMusic, backMusic } = this;
    const { artist, setMusic, playing } = this.state;
    // ↓適当
    const musicLength =
      artist.musicList === undefined ? 1 : artist.musicList.length;
    return (
      <div className="main">
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
              />
              <h2>{`${artist.name}のミュージックリスト`}</h2>
              <div>{`${musicLength}曲`}</div>
              <button
                className="ArtistMusicPlayer-startBtn"
                onClick={() => onPlay()}
              >
                {playing ? "曲を停止させる" : "曲を再生する"}
              </button>
            </div>
          )}
          <div>
            {artist.musicList.map((data, index) => {
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

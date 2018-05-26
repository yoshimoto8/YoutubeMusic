import React from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import $ from "jquery";
import "./styles/ArtistMusicPlayer.css";
import ArtistMusicPlayerRow from "../components/Molecules/ArtistMusicPlayerRow";

class ArtistMusicPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      artist: {},
      setMusic: ""
    };
  }

  componentWillMount() {
    this.setState({ artist: this.props.artist });
  }

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

  setMusicFunc = music => {
    console.log("call");
    this.setState({ setMusic: music });
  };

  render() {
    const { setMusicFunc, format } = this;
    const { artist, setMusic } = this.state;
    // ↓適当
    const musicLength =
      artist.musicList === undefined ? 1 : artist.musicList.length;
    return (
      <div className="main">
        <div className="ArtistMusicPlayer">
          {setMusic.length === 0 ? (
            <div className="ArtistMusicPlayer-artistInfo">
              <img src={artist.src} alt="" />
              <h2>{`${artist.name}のミュージックリスト`}</h2>
              <div>{`${musicLength}曲`}</div>
            </div>
          ) : (
            <div className="ArtistMusicPlayer-musicDisplay">
              <ReactPlayer url={setMusic} width="250px" height="250px" />
            </div>
          )}

          <div>
            {artist.musicList.map((data, index) => {
              console.log(data);
              return (
                <ArtistMusicPlayerRow
                  data={data}
                  setMusicFunc={music => setMusicFunc(music)}
                  format={secounds => format(secounds)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artist: state.rootReducer.setArtist
});

export default connect(mapStateToProps, null)(ArtistMusicPlayer);

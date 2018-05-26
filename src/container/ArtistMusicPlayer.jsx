import React from "react";
import { connect } from "react-redux";
import $ from "jquery";
import "./styles/ArtistMusicPlayer.css";

class ArtistMusicPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      artist: {}
    };
  }

  componentWillMount() {
    // console.log(!sessionStorage.getItem("artist"));
    // console.log(!!sessionStorage.getItem("artist"));
    // if (!!sessionStorage.getItem("artist")) {
    //   console.log("呼ばれた");
    //   const artist = JSON.stringify(this.props.artist);
    //   sessionStorage.setItem("artist", artist);
    //   this.setState({ artist: this.props.artist });
    // } else {
    //   console.log("呼ばれた2");
    //   const artist = sessionStorage.getItem("artist");
    //   const objArtist = $.parseJSON(artist);
    //   this.setState({ objArtist });
    // }

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

  render() {
    const { artist } = this.state;
    const musicLength = artist.musicList.length;
    return (
      <div className="main">
        <div className="ArtistMusicPlayer">
          <div className="ArtistMusicPlayer-artistInfo">
            <img src={artist.src} alt="" />
            <h2>{`${artist.name}のミュージックリスト`}</h2>
            <div>{`${musicLength}曲`}</div>
          </div>
          <div>
            {artist.musicList.map((data, index) => {
              console.log(data);
              return (
                <div className="ArtistMusicPlayer-row">
                  <div className="ArtistMusicPlayer-nameArtistBox">
                    <div className="ArtistMusicPlayer-name">{data.name}</div>
                    <div className="ArtistMusicPlayer-artist">
                      {data.artists}
                    </div>
                  </div>
                  <div className="ArtistMusicPlayer-time">
                    {this.format(data.time)}
                  </div>
                </div>
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
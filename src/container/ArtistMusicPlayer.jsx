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
  }

  render() {
    const { artist } = this.state;
    const musicLength = artist.musicList.length;
    return (
      <div className="main">
        <div className="ArtistMusicPlayer-artistInfo">
          <img src={artist.src} alt="" />
          <h2>{`${artist.name}のミュージックリスト`}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artist: state.rootReducer.setArtist
});

export default connect(mapStateToProps, null)(ArtistMusicPlayer);

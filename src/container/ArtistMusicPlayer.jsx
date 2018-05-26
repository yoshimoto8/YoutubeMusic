import React from "react";
import { connect } from "react-redux";
import "./styles/ArtistMusicPlayer.css";

class ArtistMusicPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      artist: {}
    };
  }

  componentDidMount() {
    this.setState({ artist: this.props.artist });
  }

  render() {
    const { artist } = this.state;
    console.log(artist);
    return <div className="main" />;
  }
}

const mapStateToProps = state => ({
  artist: state.rootReducer.setArtist
});

export default connect(mapStateToProps, null)(ArtistMusicPlayer);

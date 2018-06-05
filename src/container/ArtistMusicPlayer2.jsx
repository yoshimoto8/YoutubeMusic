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
    return (
      <div className="main">
        <div className="test">
          <div className="test2">
            <div className="ArtistMusicPlayer">
              <div className="ArtistMusicPlayer-artistInfo">
                <div className="ArtistMusicPlayer-artistName">
                  {artist.name}
                </div>
                <div>
                  <button className="mylistBtn">マイリストに追加</button>
                </div>
              </div>
              <div className="ArtistMusicPlayer-music">
                <div className="ArtistMusicPlayer-musicHeader">人気曲</div>
              </div>
            </div>
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

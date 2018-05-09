import React from "react";
import "./styles/MusicOperation.css";

class MusicOperation extends React.Component {
  render() {
    const { playPause, defaultMusicList } = this.props;
    const { playing } = defaultMusicList;
    return (
      <footer className="footer">
        <button onClick={() => playPause()}>
          {playing ? "Pause" : "Play"}
        </button>
      </footer>
    );
  }
}

export default MusicOperation;

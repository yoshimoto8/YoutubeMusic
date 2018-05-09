import React from "react";
import MusicList from "../components/Molecules/MusicList";
import "./styles/Music.css";

class Music extends React.Component {
  constructor() {
    super();
    this.state = {
      startList: 0,
      endList: 5
    };
  }

  nextDefaultPlayList = () => {
    this.setState({ startList: 5, endList: 10 });
  };

  backDefaultPlayList = () => {
    this.setState({ startList: 0, endList: 5 });
  };

  render() {
    const { startList, endList } = this.state;
    const { defaultMusicList, onPlay, onPause } = this.props;

    return (
      <div className="main">
        <div className="title">Music Play List</div>
        <MusicList
          nextDefaultPlayList={() => this.nextDefaultPlayList()}
          backDefaultPlayList={() => this.backDefaultPlayList()}
          startList={startList}
          endList={endList}
          defaultMusicList={defaultMusicList}
          onPlay={onPlay}
          onPause={onPause}
        />
      </div>
    );
  }
}

export default Music;

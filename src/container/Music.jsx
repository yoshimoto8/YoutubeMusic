import React from "react";
import MusicList from "../components/Molecules/MusicList";
import "./styles/Music.css";

class Music extends React.Component {
  constructor() {
    super();
    this.state = {
      startList: 0,
      endList: 5,
      defaultMusicList: [
        "NKN6yZz0qls",
        "Ofj-6yHonLU",
        "EO3t0nYiK_M",
        "xk9dX8e3pMo",
        "7pr6IQmGutU",
        "oCNzN3HNV38",
        "LfAVetXcj-c",
        "QG-Bm1Pz96g",
        "uOQIh5qMezQ"
      ]
    };
  }

  nextDefaultPlayList = () => {
    this.setState({ startList: 5, endList: 10 });
  };

  backDefaultPlayList = () => {
    this.setState({ startList: 0, endList: 5 });
  };

  render() {
    const { startList, endList, defaultMusicList } = this.state;

    return (
      <div className="main">
        <div className="title">Music Play List</div>
        <MusicList
          nextDefaultPlayList={() => this.nextDefaultPlayList()}
          backDefaultPlayList={() => this.backDefaultPlayList()}
          startList={startList}
          endList={endList}
          defaultMusicList={defaultMusicList}
        />
      </div>
    );
  }
}

export default Music;

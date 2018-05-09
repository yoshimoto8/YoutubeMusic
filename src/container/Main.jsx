import React from "react";
import update from "immutability-helper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pomodoro from "./Pomodoro";
import Music from "./Music";
import MusicOperation from "./MusicOperation";
import "./styles/Main.css";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultMusicList: [
        {
          id: 0,
          videoId: "https://www.youtube.com/watch?v=vihzF0EMR9A&t=2s",
          playing: false
        },
        {
          id: 1,
          videoId: "https://www.youtube.com/watch?v=dTGfQMnlQFM",
          playing: false
        },
        {
          id: 2,
          videoId: "https://www.youtube.com/watch?v=81d0Q_iHLdY",
          playing: false
        },
        {
          id: 3,
          videoId: "https://www.youtube.com/watch?v=qDUh_bMY4Qc",
          playing: false
        },
        {
          id: 4,
          videoId: "https://www.youtube.com/watch?v=yvTsn6CHPcU",
          playing: false
        },
        {
          id: 5,
          videoId: "https://www.youtube.com/watch?v=lCOF9LN_Zxs",
          playing: false
        },
        { id: 6, videoId: "LfAVetXcj", playing: false },
        { id: 7, videoId: "Bm1Pz96g", playing: false },
        { id: 8, videoId: "uOQIh5qMezQ", playing: false }
      ]
    };
  }

  playPause = id => {
    this.setState({ playing: !this.state.playing });
  };

  onPlay = id => {
    console.log("onPlay");
    const newData = update(this.state.defaultMusicList, {
      [id]: { playing: { $set: true } }
    });
    this.setState({ defaultMusicList: newData });
  };

  onPause = id => {
    console.log("onPause");
    this.setState({ playing: false });
  };

  render() {
    const { playPause, onPlay, onPause } = this;
    const { defaultMusicList } = this.state;
    const routes = [
      {
        path: "/",
        exact: true,
        sidebar: () => <h2>sho</h2>,
        main: () => <h2>Shoelaces</h2>
      },
      {
        path: "/pomodoro",
        sidebar: () => <h2>prodomo</h2>,
        main: () => <Pomodoro />
      },
      {
        path: "/music",
        sidebar: () => <h2>aaaa</h2>,
        main: () => (
          <Music
            defaultMusicList={defaultMusicList}
            onPlay={id => onPlay(id)}
            onPause={id => onPause(id)}
          />
        )
      }
    ];

    return (
      <Router>
        <div className="contents">
          <ul className="sidebar">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/pomodoro">Pomodoro</Link>
            </li>
            <li>
              <Link to="/music">Music</Link>
            </li>
          </ul>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={true}
              path={route.path}
              component={route.main}
            />
          ))}
          <MusicOperation
            playPause={() => playPause()}
            defaultMusicList={defaultMusicList}
          />
        </div>
      </Router>
    );
  }
}

export default Main;

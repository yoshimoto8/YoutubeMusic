import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pomodoro from "./Pomodoro";
import MyMusicList from "./MyMusicList";
import "./styles/Main.css";

class Main extends React.Component {
  render() {
    const routes = [
      {
        path: "/",
        sidebar: () => <h2>prodomo</h2>,
        main: () => <Pomodoro />
      },
      {
        path: "/myMusic",
        sideber: () => <h2>mymusic</h2>,
        main: () => <MyMusicList />
      }
    ];

    return (
      <div>
        <header className="header" />
        <Router>
          <div className="contents">
            <ul className="sidebar">
              <li>
                <Link to="/myMusic">myMusic</Link>
              </li>
              <li>
                <Link to="/">Pomodoro</Link>
              </li>
            </ul>
            {routes.map((route, index) => (
              <Route
                exact
                key={index}
                path={route.path}
                component={route.main}
              />
            ))}
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;

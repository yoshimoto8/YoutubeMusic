import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pomodoro from "./Pomodoro";
import Music from "./Music";
import MusicOperation from "./MusicOperation";
import "./styles/Main.css";

class Main extends React.Component {
  render() {
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
        main: () => <Music />
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
          <MusicOperation />
        </div>
      </Router>
    );
  }
}

export default Main;

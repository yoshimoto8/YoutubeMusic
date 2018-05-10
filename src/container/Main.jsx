import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pomodoro from "./Pomodoro";
import "./styles/Main.css";

class Main extends React.Component {
  render() {
    const routes = [
      {
        path: "/",
        sidebar: () => <h2>prodomo</h2>,
        main: () => <Pomodoro />
      }
    ];

    return (
      <div>
        <header className="header" />
        <Router>
          <div className="contents">
            <ul className="sidebar">
              <li>
                <Link to="/">Pomodoro</Link>
              </li>
            </ul>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} component={route.main} />
            ))}
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;

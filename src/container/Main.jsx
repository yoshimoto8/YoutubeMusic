import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pomodoro from "./Pomodoro";
import "./styles/Main.css";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      routes: [
        {
          path: "/",
          exact: true,
          main: () => <h2>Shoelaces</h2>
        },
        {
          path: "/pomodoro",
          main: () => <Pomodoro />
        },
        {
          path: "/music",
          main: () => <h2>Shoelaces</h2>
        }
      ]
    };
  }
  render() {
    return (
      <Router>
        <div className="contents">
          <ul className="sidebar">
            <Link to="/">
              <li>home</li>
            </Link>
            <Link to="/pomodoro">
              <li>Pomodoro</li>
            </Link>
            <Link to="/music">
              <li>Musisc</li>
            </Link>
          </ul>
          <Route
            key={1}
            exact={true}
            expath={"pomodoro"}
            component={Pomodoro}
          />
        </div>
      </Router>
    );
  }
}

export default Main;

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./styles/Home.css";
import RecommendMusic from "./RecommendMusic";
import NewReleaseMusic from "./NewReleaseMusic";

class Home extends React.Component {
  render() {
    const routes = [
      {
        path: "/Home/Recommend",
        main: () => <RecommendMusic />
      },
      {
        path: "/Home/",
        main: () => <NewReleaseMusic />
      }
    ];
    return (
      <div className="main">
        <div>
          <div className="HomeHeader">
            <ul>
              <Link className="recomend" to="/Home/">
                ニューリリース
              </Link>
            </ul>
          </div>
          {routes.map((route, index) => {
            return (
              <Route
                exact
                key={index}
                path={route.path}
                component={route.main}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(null, null)(Home);

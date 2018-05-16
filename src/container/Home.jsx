import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
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
        path: "/Home/NewRelease",
        main: () => <NewReleaseMusic />
      }
    ];

    return (
      <div className="main">
        <div className="HomeHeader">
          <ul>
            <Link class="recomend" to="/Home/NewRelease">
              おすすめ
            </Link>
            <Link class="recomend" to="/Home/NewRelease">
              PodCasts
            </Link>
            <Link class="recomend" to="/Home/NewRelease">
              ニューリリース
            </Link>
          </ul>
        </div>
        {routes.map((route, index) => {
          console.log(route);
          return <Route key={index} path={route.path} component={route.main} />;
        })}
      </div>
    );
  }
}

export default connect(null, null)(Home);

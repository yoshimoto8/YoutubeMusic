import React from "react";
import { connect } from "react-redux";
import "./styles/Home.css";
import NewReleaseMusic from "./NewReleaseMusic";

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <NewReleaseMusic />
      </div>
    );
  }
}

export default connect(null, null)(Home);

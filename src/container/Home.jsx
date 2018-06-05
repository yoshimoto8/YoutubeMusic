import React from "react";
import { connect } from "react-redux";
import "./styles/Home.css";
import TabHelmet from "../components/Atoms/TabHelmet";
import NewReleaseMusic from "./NewReleaseMusic";

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <TabHelmet title="アルバムリスト" />
        <NewReleaseMusic />
      </div>
    );
  }
}

export default connect(null, null)(Home);

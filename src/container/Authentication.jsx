import React from "react";
import "./styles/Authentication.css";
import TwitterButton from "../components/Atoms/TwitterButton";

class Authentication extends React.Component {
  render() {
    return (
      <div className="authentication">
        <h2>どれでログインするんだあああああああ</h2>
        <TwitterButton />
      </div>
    );
  }
}

export default Authentication;

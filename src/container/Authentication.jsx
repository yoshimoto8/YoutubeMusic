import React from "react";
import "./styles/Authentication.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TwitterButton from "../components/Atoms/TwitterButton";
import { auth, provider } from "../firebase/client";

class Authentication extends React.Component {
  login = () => {
    auth()
      .signInWithPopup(provider)
      .then(result => {
        sessionStorage.setItem("user", result.user.uid);
        window.location.reload();
        this.props.history.push("make");
      })
      .catch(err => {
        console.log("エラーが起こりました。");
      });
  };

  logout = () => {
    auth().signOut();
    this.setState({ user: null });
  };

  render() {
    return (
      <div className="authentication">
        <h2>どれでログインするんだあああああああ</h2>
        <TwitterButton login={() => this.login()} />
      </div>
    );
  }
}

export default connect(null, null)(withRouter(Authentication));

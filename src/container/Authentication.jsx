import React from "react";
import "./styles/Authentication.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AuthenticationTwitterButton from "../components/Atoms/Authentication/AuthenticationTwitterButton";
import { auth, provider } from "../firebase/client";

class Authentication extends React.Component {
  login = () => {
    auth()
      .signInWithPopup(provider)
      .then(result => {
        const userName = result.additionalUserInfo.username;
        const imageUrl = result.additionalUserInfo.profile.profile_image_url;
        sessionStorage.setItem("userName", userName);
        sessionStorage.setItem("imageUrl", imageUrl);
        sessionStorage.setItem("user", result.user.uid);
        window.location.reload();
        this.props.history.push("/Home");
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
        <h2>どれでログインするんだ!!</h2>
        <AuthenticationTwitterButton login={() => this.login()} />
      </div>
    );
  }
}

export default connect(null, null)(withRouter(Authentication));

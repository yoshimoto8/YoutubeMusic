import React from "react";
import "./styles/Authentication.css";
import TwitterButton from "../components/Atoms/TwitterButton";
import { auth, provider } from "../firebase/client";

class Authentication extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  login = () => {
    auth()
      .signInWithPopup(provider)
      .then(result => {
        this.setState({ user: result.user });
        sessionStorage.setItem("user", result.user.uid);
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
    console.log(sessionStorage.getItem("user"));
    return (
      <div className="authentication">
        <h2>どれでログインするんだあああああああ</h2>
        <TwitterButton login={() => this.login()} />
      </div>
    );
  }
}

export default Authentication;

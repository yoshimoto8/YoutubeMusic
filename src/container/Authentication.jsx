import React from "react";
import firebase from "firebase";
import "./styles/Authentication.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setPlayList } from "../actions";
import TabHelmet from "../components/Atoms/TabHelmet";
import AuthenticationTwitterButton from "../components/Atoms/Authentication/AuthenticationTwitterButton";
import AuthenticationTryAppButton from "../components/Atoms/Authentication/AuthenticationTryAppButton";
import { auth, provider } from "../firebase/client";
import AuthenticationDisplayMusic from "../components/Molecules/AuthenticationDisplayMusic";

class Authentication extends React.Component {
  constructor() {
    super();
    this.state = {
      publicMusicList: []
    };
  }

  componentDidMount() {
    this.fetchPublicMusic();
    if (this.is_smartPhone()) {
      alert(
        "大変申し訳ございません。このアプリはiPhone,Androidに対応しておりません。"
      );
    }
  }

  is_smartPhone = () => {
    var media = ["iPhone", "iPad", "Android"];
    var pattern = new RegExp(media.join("|"), "i");
    return pattern.test(navigator.userAgent);
  };

  fetchPublicMusic = () => {
    const db = firebase.firestore();
    db.collection("publicAlbum").onSnapshot(Snapshot => {
      const musicLists = [];
      Snapshot.forEach(doc => {
        musicLists.push({ ...doc.data(), key: doc.id });
      });
      this.setState({ publicMusicList: musicLists });
    });
  };

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
    const { publicMusicList } = this.state;
    const displayMusic = publicMusicList.slice(1, 7);
    return (
      <div className="main">
        <TabHelmet title="ログイン画面" />
        <div className="authentication">
          <AuthenticationDisplayMusic displayMusic={displayMusic} />
          <h3 className="authentication-infoApp">
            ３秒でログインしてお気に入りにMusciを聞こう!!
          </h3>
          <div>
            <AuthenticationTwitterButton login={() => this.login()} />
          </div>
          <div
            className="Authentication-tryApp"
            onClick={() => this.props.history.push("/Artist")}
          >
            <AuthenticationTryAppButton />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setPlayList: (defaultMusic, alubmImage, playListName) =>
    dispatch(setPlayList(defaultMusic, alubmImage, playListName))
});

export default connect(null, mapDispatchToProps)(withRouter(Authentication));

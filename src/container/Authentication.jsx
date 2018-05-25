import React from "react";
import firebase from "firebase";
import "./styles/Authentication.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setPlayList } from "../actions";
import AuthenticationTwitterButton from "../components/Atoms/Authentication/AuthenticationTwitterButton";
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
  }

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
        <div className="authentication">
          <AuthenticationDisplayMusic displayMusic={displayMusic} />
          <h3 className="authentication-infoApp">
            ３秒でログインしてお気に入りにMusciを聞こう!!
          </h3>
          <AuthenticationTwitterButton login={() => this.login()} />
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

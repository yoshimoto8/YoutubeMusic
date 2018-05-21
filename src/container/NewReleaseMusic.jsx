import React from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setPlayList } from "../actions";
import "./styles/newReleaseMusic.css";

class NewReleaseMusic extends React.Component {
  constructor() {
    super();
    this.state = {
      musicLists: []
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection("publicAlbum").onSnapshot(Snapshot => {
      const musicLists = [];
      Snapshot.forEach(doc => {
        musicLists.push({ ...doc.data(), key: doc.id });
      });
      this.setState({ musicLists });
    });
  }

  render() {
    const { musicLists } = this.state;
    return (
      <div className="newReleaseMusic-musicList">
        {musicLists.map((data, index) => {
          const { alubmImage, playListName, musicList } = data;
          return (
            <div key={index} className="newReleaseMusic-musicBox">
              <div className="newReleaseMusic-musicController">
                <Link
                  to="/MusicPlayer"
                  className="newReleaseMusic-playBtn"
                  onClick={() => this.props.setPlayList(musicList)}
                />
              </div>
              <img src={alubmImage} alt="" height="150px" width="150px" />
              <div className="newReleaseMusic-playListName">{playListName}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setPlayList: defaultMusic => dispatch(setPlayList(defaultMusic))
});

export default connect(null, mapDispatchToProps)(NewReleaseMusic);

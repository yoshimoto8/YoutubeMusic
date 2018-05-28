import React from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setArtist } from "../actions";
import "./styles/Artist.css";

class Artist extends React.Component {
  constructor() {
    super();
    this.state = {
      artistLists: []
    };
  }

  componentDidMount() {
    this.fetchArtist();
  }

  fetchArtist() {
    const db = firebase.firestore();
    db.collection("artists").onSnapshot(Snapshot => {
      const artistLists = [];
      Snapshot.forEach(doc => {
        artistLists.push({ ...doc.data(), key: doc.id });
      });
      this.setState({ artistLists });
    });
  }

  pushData = () => {
    const artist = {
      name: "J.Fla",
      src:
        "https://firebasestorage.googleapis.com/v0/b/musicpomodoro.appspot.com/o/upload_files%2F%E3%82%BF%E3%82%99%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%88%E3%82%99%20(5).jpeg?alt=media&token=00facbea-3414-4ad3-810c-e6bbf09c1ac6",
      musicList: [
        {
          artists: "Kurt Hugo Schneide",
          id: 1,
          name: "Just A Dream",
          src: "https://www.youtube.com/watch?v=a2RA0vsZXf8",
          time: 270
        },
        {
          artists: "Kurt Hugo Schneide",
          id: 2,
          name: "Just A Dream",
          src: "https://www.youtube.com/watch?v=pHoI4g81DIU",
          time: 270
        },
        {
          artists: "Kurt Hugo Schneide",
          id: 3,
          name: "Just A Dream",
          src: "https://www.youtube.com/watch?v=UVBCMz1rmRk",
          time: 270
        },
        {
          artists: "Kurt Hugo Schneide",
          id: 4,
          name: "Just A Dream",
          src: "https://www.youtube.com/watch?v=qJEk2XeN-WU",
          time: 270
        }
      ]
    };
    const db = firebase.firestore();
    db
      .collection("artists")
      .add(artist)
      .then(() => {
        console.log("成功");
      });
  };

  render() {
    const { artistLists } = this.state;
    const { pushData } = this;
    return (
      <div className="main">
        <button onClick={() => pushData()}>データを送る</button>
        <h2 className="Artist-header">アーティストリスト</h2>
        <div className="Artist-display">
          {artistLists.map((data, index) => {
            return (
              <div key={index} className="Artist-artistBox">
                <div className="Artist-musicController">
                  <Link
                    to="/ArtistMusicPlayer"
                    className="Artist-playBtn"
                    onClick={() => this.props.setArtist(data)}
                  />
                </div>
                <img className="Artist-image" src={data.src} alt="" />
                <div className="Artist-name">{data.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setArtist: artistData => dispatch(setArtist(artistData))
});

export default connect(null, mapDispatchToProps)(Artist);

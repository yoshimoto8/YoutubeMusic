import React from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TabHelmet from "../components/Atoms/TabHelmet";
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

  render() {
    const { artistLists } = this.state;
    return (
      <div className="main">
        <TabHelmet title="アーティスト" />
        <h2 className="Artist-header">アーティスト</h2>
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

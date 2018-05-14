import React from "react";
import { connect } from "react-redux";
import { setPlayList } from "../actions/index";
import { Link } from "react-router-dom";
import { Aimer, CharliePuth, selenaGomez } from "./demoMusicList";
import "./styles/MyMusicList.css";
import { auth } from "../firebase/client";
import firebase from "firebase";

class MyMusicList extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultMusic: [Aimer, CharliePuth, selenaGomez],
      playList: []
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref(`users/${sessionStorage.getItem("user")}`)
      .once("value")
      .then(data => {
        const values = data.val();
        const playList = values ? values.musicLists : [];
        this.setState({ playList: playList });
      });
  }
  pushData = () => {
    const { currentUser } = auth();
    firebase
      .database()
      .ref(`users/${currentUser.uid}`)
      .set({
        musicLists: [
          {
            alubmImage:
              "data:image/jpeg;base64,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",
            playListName: "Selena Gomez",
            list: [
              {
                id: 1,
                name: "Marshmello - Wolves",
                artists: "Selena Gomez",
                time: 332,
                src: "https://www.youtube.com/watch?v=cH4E_t3m3xM"
              },
              {
                id: 2,
                name: "Marshmello - Wolves",
                artists: "Selena Gomez",
                time: 332,
                src: "https://www.youtube.com/watch?v=cH4E_t3m3xM"
              },
              {
                id: 3,
                name: "Marshmello - Wolves",
                artists: "Selena Gomez",
                time: 332,
                src: "https://www.youtube.com/watch?v=cH4E_t3m3xM"
              },
              {
                id: 4,
                name: "Marshmello - Wolves",
                artists: "Selena Gomez",
                time: 332,
                src: "https://www.youtube.com/watch?v=cH4E_t3m3xM"
              }
            ]
          }
        ]
      });
  };

  render() {
    const { defaultMusic, playList } = this.state;
    return (
      <div className="main">
        <div className="defaultMusicPlayBox">
          <h2>Default Music</h2>
          <div className="defaultMusicPlayList">
            {defaultMusic.map((data, index) => {
              const { playListImg } = data;
              return (
                <div className="musicPlayBox" key={index}>
                  <div className="displayMusicController">
                    <Link to="/MusicPlayer" className="playBtnMusic">
                      <button
                        className="displayMusicPlaybtn"
                        onClick={() => {
                          this.props.setPlayList(data.musciList);
                        }}
                      />x
                    </Link>
                  </div>
                  <img src={playListImg} alt="" height="200" width="250" />
                </div>
              );
            })}
          </div>
          <div className="MyMusicPlayList">
            {playList.map((data, index) => {
              const { alubmImage } = data;
              console.log(data);
              return (
                <div className="musicPlayBox" key={index}>
                  <div className="displayMusicController">
                    <Link
                      to="/MusicPlayer"
                      className="playBtnMusic"
                      key={index}
                    >
                      <button
                        className="displayMusicPlaybtn"
                        onClick={() => {
                          this.props.setPlayList(data.list);
                        }}
                      />
                    </Link>
                  </div>
                  <img src={alubmImage} alt="" height="200" width="250" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setPlayList: defaultMusic => dispatch(setPlayList(defaultMusic))
});

export default connect(null, mapDispatchToProps)(MyMusicList);

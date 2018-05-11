import React from "react";
import { connect } from "react-redux";
import { setPlayList } from "../actions/index";
import { Link } from "react-router-dom";
import { Aimer, CharliePuth, selenaGomez } from "./demoMusicList";
import "./styles/MyMusicList.css";

class MyMusicList extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultMusic: [Aimer, CharliePuth, selenaGomez]
    };
  }

  render() {
    const { defaultMusic } = this.state;
    return (
      <div className="main">
        <div className="defaultMusicPlayBox">
          <h2>Default Music</h2>
          <div className="defaultMusicPlayList">
            {defaultMusic.map((data, index) => {
              const { playListImg, playListName } = data;
              return (
                <Link to="/MusicPlayer" key={index}>
                  <div
                    className="musicPlayBox"
                    onClick={() => {
                      this.props.setPlayList(data.musciList);
                    }}
                  >
                    <img src={playListImg} alt="" height="200" width="250" />
                  </div>
                </Link>
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

const mapStateToProps = state => ({
  history: state.routing
});

export default connect(mapStateToProps, mapDispatchToProps)(MyMusicList);

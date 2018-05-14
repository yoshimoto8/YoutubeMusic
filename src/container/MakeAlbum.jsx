import React from "react";
import update from "immutability-helper";
import { YOUTUBEAPI } from "../ENV";
import axios from "axios";
import { connect } from "react-redux";
import { setPlayList } from "../actions/index";
import "./styles/MakeAlbum.css";
import { Link } from "react-router-dom";
import SearchMusicTable from "../components/Molecules/SearchMusicTable";
import firebase from "firebase";
import noImage from "../images/noimage.png";

class MakeAlbum extends React.Component {
  constructor() {
    super();
    this.state = {
      duration: [],
      userId: null,
      searchKeyWord: "",
      videoList: [],
      setAddPlayListIndex: 0,
      setAddPlayListLength: 0,
      setAddPlayList: null,
      setNewMyPlaylist: null,
      playList: []
    };
  }

  emptyAlubm = e => {
    e.preventDefault();
    const emptyAlbum = {
      alubmImage: noImage,
      playListName: "アルバム名がありません",
      list: []
    };
    this.setState({ setNewMyPlaylist: emptyAlbum });
  };

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

  onDuration = duration => {
    const newState = update(this.state.duration, { $push: [duration] });
    this.setState({ duration: newState });
  };

  setAddPlayList = (playList, index = null) => {
    const newList = Object.keys(playList.list).map(function(key) {
      return playList.list[key];
    });
    const playListState = update(playList, { list: { $set: newList } });
    this.setState({
      setAddPlayList: playListState,
      setAddPlayListIndex: index,
      setAddPlayListLength: playListState.list.length
    });
  };

  musicDataConstruction = (url, id, title, time) => {
    const musicDataConstruction = {
      id: id,
      name: title,
      artists: "名無し",
      time: time,
      src: url
    };
    return musicDataConstruction;
  };

  pushPlayLists = (url, id, title, time) => {
    const playList = this.musicDataConstruction(url, id, title, time);
    const newState = update(this.state.setAddPlayList, {
      list: { $push: [playList] }
    });
    this.setState({
      setAddPlayList: newState,
      setAddPlayListLength: newState.list.length
    });
    if (this.state.setAddPlayListIndex === null) {
      this.updatePushNewMusicList(newState);
    } else {
      this.updatePushMusicList(playList);
    }
  };

  updatePushNewMusicList = newState => {
    const musicListsRef = firebase
      .database()
      .ref(`users/${sessionStorage.getItem("user")}/musicLists/`);
    const newStateMusic = update(this.state.playList, {
      $push: [newState]
    });
    musicListsRef.set(newStateMusic);
  };

  updatePushMusicList = playList => {
    const musicListsRef = firebase
      .database()
      .ref(
        `users/${sessionStorage.getItem("user")}/musicLists/${
          this.state.setAddPlayListIndex
        }/list/`
      );
    musicListsRef.push(playList);
  };

  changeplayListName = e => {
    const newState = update(this.state.setNewMyPlaylist, {
      playListName: { $set: e.target.value }
    });
    this.setState({ setNewMyPlaylist: newState });
  };

  SerchYoutube = e => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${
          this.state.searchKeyWord
        }&key=${YOUTUBEAPI}`
      )
      .then(results => {
        this.setState({ videoList: results.data.items });
      });
  };

  changeSearchKeyWord = e => {
    this.setState({ searchKeyWord: e.target.value });
  };

  makeUrl = videoId => {
    return `https://www.youtube.com/watch?v=${videoId}`;
  };

  render() {
    const {
      setNewMyPlaylist,
      playList,
      duration,
      setAddPlayListLength
    } = this.state;
    const { setAddPlayList, pushPlayLists, makeUrl, onDuration } = this;
    const newAlubm = !setNewMyPlaylist ? (
      <div />
    ) : (
      <div onClick={playList => setAddPlayList(setNewMyPlaylist)}>
        {!setNewMyPlaylist.alubmImage ? (
          <div className="emptyImage" />
        ) : (
          <img
            src={setNewMyPlaylist.alubmImage}
            alt=""
            width="200"
            height="200"
          />
        )}
        <input
          type="text"
          value={setNewMyPlaylist.playListName}
          onChange={e => this.changeplayListName(e)}
        />
      </div>
    );

    return (
      <div className="main">
        <div className="searchYoutubeMusic">
          <h2>Search Youtube Music</h2>
          <div className="myMusicList">
            <div>
              <a href="" className="btn" onClick={e => this.emptyAlubm(e)}>
                +
              </a>
            </div>
            {newAlubm}
            {playList.map((data, index) => {
              const indexNumber = index;
              return (
                <div
                  key={index}
                  className="myMusicPlayList"
                  onClick={(playList, index) =>
                    setAddPlayList(data, indexNumber)
                  }
                >
                  <div className="makeAlbum-displayMusic">
                    <Link to="/MusicPlayer">
                      <button
                        className="makeAlbum-playBtn"
                        onClick={() => {
                          this.props.setPlayList(data.list);
                        }}
                      />
                    </Link>
                  </div>
                  <img src={data.alubmImage} alt="" width="200" height="200" />
                  <div div="displayMusicName">{data.playListName}</div>
                </div>
              );
            })}
          </div>
          <form onSubmit={e => this.SerchYoutube(e)}>
            <input
              type="text"
              value={this.state.searchKeyWord}
              onChange={e => this.changeSearchKeyWord(e)}
            />
            <input type="submit" value="send" />
          </form>
          <div>
            {this.state.videoList.map((item, index) => {
              const playListName = !this.state.setAddPlayList
                ? "アルバムを選んでください"
                : `${this.state.setAddPlayList.playListName}に追加する`;

              const time = duration[index];
              return (
                <SearchMusicTable
                  key={index}
                  time={time}
                  onDuration={duration => onDuration(duration)}
                  index={index}
                  setAddPlayListLength={setAddPlayListLength}
                  videoId={item.id.videoId}
                  title={item.snippet.title}
                  playListName={playListName}
                  pushPlayLists={(url, id, title, time) =>
                    pushPlayLists(url, id, title, time)
                  }
                  makeUrl={videoId => makeUrl(videoId)}
                />
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

export default connect(null, mapDispatchToProps)(MakeAlbum);

import React from "react";
import update from "immutability-helper";
import Modal from "react-modal";
import { Tooltip } from "react-tippy";
import ReactPlayer from "react-player";
import axios from "axios";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setPlayList } from "../actions/index";
import "./styles/MyAlbum.css";
import { YOUTUBEAPI } from "../ENV";
import noImage from "../images/noimage.png";
import "react-tippy/dist/tippy.css";
import IoAndroidMoreHorizontal from "react-icons/lib/io/android-more-horizontal";
import EditAlbumModal from "./EditAlbumModal";

class MyAlbum extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      searchKeyWord: "",
      duration: 0,
      youtubes: [],
      myMusicLists: [],
      selectupdateMusic: {},
      selectEditMusic: {}
    };
  }

  componentDidMount() {
    this.fetchMyMusicList();
  }

  // ここからアルバムを編集する関数
  openModal(data) {
    this.setState({ modalIsOpen: true, selectEditMusic: data });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onDuration = duration => {
    this.setState({ duration });
  };

  emptyAlubm = e => {
    e.preventDefault();
    const emptyAlbum = {
      alubmImage: noImage,
      playListName: "アルバム名がありません",
      musicList: [],
      createdOn: new Date()
    };
    this.createMusicList(emptyAlbum);
  };

  createMusicList = data => {
    const db = firebase.firestore();
    const currentUser = sessionStorage.getItem("user");
    db
      .collection(`users/${currentUser}/userMusicList`)
      .add(data)
      .then(() => {
        console.log("seikou");
      });
  };

  updateMyMusicList = Music => {
    const { key, musicList } = this.state.selectupdateMusic;
    const newMusicList = [...musicList, Music];
    const db = firebase.firestore();
    db
      .collection(`users/${sessionStorage.getItem("user")}/userMusicList`)
      .doc(key)
      .update({
        musicList: newMusicList
      })
      .then(() => {
        const newState = update(this.state.selectupdateMusic, {
          musicList: { $set: newMusicList }
        });
        this.setState({ selectupdateMusic: newState });
        console.log("成功");
      });
  };

  fetchMyMusicList = () => {
    const db = firebase.firestore();
    db
      .collection(`users/${sessionStorage.getItem("user")}/userMusicList`)
      .onSnapshot(Snapshot => {
        const myMusicLists = [];
        Snapshot.forEach(doc => {
          myMusicLists.push({ ...doc.data(), key: doc.id });
        });
        this.setState({ myMusicLists });
      });
  };

  fetchYoutube = e => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${
          this.state.searchKeyWord
        }&key=${YOUTUBEAPI}`
      )
      .then(results => {
        this.setState({ youtubes: results.data.items });
      });
  };

  changeSearchKeyWord = e => {
    this.setState({ searchKeyWord: e.target.value });
  };

  generateYoutubeUrl = videoId => {
    return `https://www.youtube.com/watch?v=${videoId}`;
  };

  createMusicFormat = (url, title) => {
    const id = this.state.selectupdateMusic.musicList.length + 1;
    const time = this.state.duration;
    const musicDataConstruction = {
      id: id,
      name: title,
      artists: "名無し",
      time: time,
      src: url
    };
    return musicDataConstruction;
  };

  render() {
    const {
      fetchYoutube,
      changeSearchKeyWord,
      generateYoutubeUrl,
      emptyAlubm,
      updateMyMusicList,
      onDuration,
      setEditMusic,
      closeModal
    } = this;
    const {
      searchKeyWord,
      youtubes,
      myMusicLists,
      duration,
      selectEditMusic
    } = this.state;
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
      }
    };
    return (
      <div>
        <div className="myAlbum-displayMusicBox">
          <div>
            <a href="" className="btn" onClick={e => emptyAlubm(e)}>
              +
            </a>
          </div>
          {myMusicLists.map((data, index) => {
            const { alubmImage, musicList, playListName } = data;
            return (
              <div key={index} className="myAlbum-displayMusic">
                <div className="myAlbum-musicController">
                  <Link
                    to="/MusicPlayer"
                    className="myAlbum-playBtn"
                    onClick={() => this.props.setPlayList(musicList)}
                  />
                  <Tooltip
                    position="right"
                    trigger="click"
                    interactive
                    html={
                      <div className="myAlbum-musicAction">
                        <div
                          className="myAlbum-musicAction1"
                          onClick={() => this.openModal(data)}
                        >
                          アルバムを編集する
                        </div>
                        <div className="myAlbum-musicAction1">
                          アルバムを消去する
                        </div>
                      </div>
                    }
                  >
                    <IoAndroidMoreHorizontal
                      className="myAlbum-detailMusic"
                      size="25"
                    />
                  </Tooltip>
                </div>
                <img src={alubmImage} alt="" height="200px" width="200px" />
                <h3 className="myAlbum-playListName">{playListName}</h3>
                <button
                  onClick={() => this.setState({ selectupdateMusic: data })}
                >
                  選択
                </button>
              </div>
            );
          })}
        </div>
        <form onSubmit={e => fetchYoutube(e)}>
          <input
            type="text"
            value={searchKeyWord}
            onChange={e => changeSearchKeyWord(e)}
          />
          <input type="submit" value="send" />
        </form>
        {youtubes.map((data, index) => {
          const { snippet, id } = data;
          const url = generateYoutubeUrl(id.videoId);
          return (
            <div key={index}>
              <h2>{snippet.title}</h2>
              <ReactPlayer
                width="200px"
                height="200px"
                url={url}
                onDuration={duration => onDuration(duration)}
              />
              <button
                onClick={Music =>
                  updateMyMusicList(this.createMusicFormat(url, snippet.title))
                }
              >
                追加する
              </button>
            </div>
          );
        })}
        <Modal isOpen={this.state.modalIsOpen} style={customStyles}>
          <EditAlbumModal
            data={selectEditMusic}
            closeModal={() => closeModal()}
          />
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setPlayList: defaultMusic => dispatch(setPlayList(defaultMusic))
});

export default connect(null, mapDispatchToProps)(MyAlbum);
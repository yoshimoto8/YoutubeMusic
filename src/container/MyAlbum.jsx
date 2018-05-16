import React from "react";
import update from "immutability-helper";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tippy";
import { connect } from "react-redux";
import { setPlayList, fetchYoutube, createAlubm } from "../actions/index";
import noImage from "../images/noimage.png";
import IoAndroidMoreHorizontal from "react-icons/lib/io/android-more-horizontal";
import EditAlbumModal from "./EditAlbumModal";
import "react-tippy/dist/tippy.css";
import "./styles/MyAlbum.css";
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
    return emptyAlbum;
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
        console.log("成功");
      });
    const newState = update(this.state.selectupdateMusic, {
      musicList: { $set: newMusicList }
    });
    this.setState({ selectupdateMusic: newState });
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

  handleFetchYoutube = e => {
    e.preventDefault();
    const { searchKeyWord } = this.state;
    this.props.fetchYoutube(searchKeyWord);
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
    const { musicList, createAlubm } = this.props;
    const {
      handleFetchYoutube,
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
            <a
              href=""
              className="btn"
              onClick={e => createAlubm(emptyAlubm(e))}
            >
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
        <form onSubmit={e => handleFetchYoutube(e)}>
          <input
            type="text"
            value={searchKeyWord}
            onChange={e => changeSearchKeyWord(e)}
          />
          <input type="submit" value="send" />
        </form>
        {musicList.map((data, index) => {
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
  setPlayList: defaultMusic => dispatch(setPlayList(defaultMusic)),
  fetchYoutube: searchKeyWord => dispatch(fetchYoutube(searchKeyWord)),
  createAlubm: emptyAlbum => dispatch(createAlubm(emptyAlbum))
});

const mapStateToProps = state => ({
  musicList: state.rootReducer.fetchYoutube.musicList
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAlbum);

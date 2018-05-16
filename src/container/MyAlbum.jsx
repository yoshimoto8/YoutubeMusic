import React from "react";
import update from "immutability-helper";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import firebase from "firebase";
import { connect } from "react-redux";
import { setPlayList, fetchYoutube, createAlubm } from "../actions/index";
import noImage from "../images/noimage.png";
import EditAlbumModal from "./EditAlbumModal";
import MyAlubmList from "../components/Molecules/MyAlubmList";
import MyAlubmSearch from "../components/Molecules/MyAlubmSearch";
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
    console.log(data);
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

  setUpdateMusic = data => {
    this.setState({ selectupdateMusic: data });
  };

  render() {
    const { musicList, createAlubm, setPlayList } = this.props;
    const {
      handleFetchYoutube,
      changeSearchKeyWord,
      generateYoutubeUrl,
      emptyAlubm,
      updateMyMusicList,
      onDuration,
      setEditMusic,
      closeModal,
      openModal,
      setUpdateMusic
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
        <MyAlubmList
          myMusicLists={myMusicLists}
          createAlubm={emptyAlbum => createAlubm(emptyAlbum)}
          emptyAlubm={e => emptyAlubm(e)}
          setPlayList={musicList => setPlayList(musicList)}
          openModal={openModal.bind(this)}
          setUpdateMusic={data => setUpdateMusic(data)}
        />
        <MyAlubmSearch
          handleFetchYoutube={e => handleFetchYoutube(e)}
          searchKeyWord={searchKeyWord}
          changeSearchKeyWord={e => changeSearchKeyWord(e)}
        />
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

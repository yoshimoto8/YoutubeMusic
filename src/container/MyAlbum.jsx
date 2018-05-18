import React from "react";
import update from "immutability-helper";
import Modal from "react-modal";
import firebase from "firebase";
import { connect } from "react-redux";
import {
  setPlayList,
  fetchYoutube,
  createAlubm,
  deleteAlbum
} from "../actions/index";
import noImage from "../images/noimage.png";
import EditAlbumModal from "./EditAlbumModal";
import MyAlubmList from "../components/Molecules/MyAlubmList";
import MyAlubmSearch from "../components/Molecules/MyAlubmSearch";
import MyAlubmResult from "../components/Molecules/MyAlubmResult";
import "react-tippy/dist/tippy.css";
import "./styles/MyAlbum.css";
class MyAlbum extends React.Component {
  constructor() {
    super();
    this.state = {
      indexStart: 0,
      indexEnd: 4,
      modalIsOpen: false,
      searchKeyWord: "",
      duration: [],
      youtubes: [],
      myMusicLists: [],
      selectupdateMusic: {},
      selectEditMusic: {}
    };
  }

  componentDidMount() {
    this.fetchMyMusicList();
    if (
      this.props.musicList.length === 0 &&
      !!sessionStorage.getItem("search")
    ) {
      this.props.fetchYoutube(sessionStorage.getItem("search"));
      this.setState({ duration: [] });
    }
  }

  stepNext = () => {
    this.setState({
      indexStart: this.state.indexStart + 4,
      indexEnd: this.state.indexEnd + 4
    });
  };

  stepBack = () => {
    this.setState({
      indexStart: this.state.indexStart - 4,
      indexEnd: this.state.indexEnd - 4
    });
  };

  // ここからアルバムを編集する関数
  openModal(data) {
    this.setState({ modalIsOpen: true, selectEditMusic: data });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onDuration = duration => {
    const newState = update(this.state.duration, { $push: [duration] });
    this.setState({ duration: newState });
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
    console.log(Music);
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
        const newState = update(this.state.selectupdateMusic, {
          musicList: { $set: newMusicList }
        });
        this.setState({ selectupdateMusic: newState });
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

  handleFetchYoutube = e => {
    e.preventDefault();
    const { searchKeyWord } = this.state;
    this.props.fetchYoutube(searchKeyWord);
    this.setState({ duration: [] });
  };

  changeSearchKeyWord = e => {
    this.setState({ searchKeyWord: e.target.value });
  };

  generateYoutubeUrl = videoId => {
    return `https://www.youtube.com/watch?v=${videoId}`;
  };

  createMusicFormat = (url, title, index) => {
    const id = this.state.selectupdateMusic.musicList.length + 1;
    const time = this.state.duration[index];
    console.log(time);
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
    const { musicList, createAlubm, setPlayList, deleteAlbum } = this.props;
    const {
      handleFetchYoutube,
      changeSearchKeyWord,
      generateYoutubeUrl,
      emptyAlubm,
      updateMyMusicList,
      onDuration,
      closeModal,
      openModal,
      setUpdateMusic,
      createMusicFormat,
      stepNext,
      stepBack
    } = this;
    const {
      searchKeyWord,
      myMusicLists,
      duration,
      selectEditMusic,
      selectupdateMusic,
      indexStart,
      indexEnd
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
      <div className="main">
        <MyAlubmSearch
          handleFetchYoutube={e => handleFetchYoutube(e)}
          searchKeyWord={searchKeyWord}
          changeSearchKeyWord={e => changeSearchKeyWord(e)}
        />
        <MyAlubmList
          indexStart={indexStart}
          indexEnd={indexEnd}
          myMusicLists={myMusicLists}
          createAlubm={emptyAlbum => createAlubm(emptyAlbum)}
          emptyAlubm={e => emptyAlubm(e)}
          setPlayList={musicList => setPlayList(musicList)}
          openModal={openModal.bind(this)}
          setUpdateMusic={data => setUpdateMusic(data)}
          selectupdateMusic={selectupdateMusic}
          deleteAlbum={alubm => deleteAlbum(alubm)}
          stepNext={() => stepNext()}
          stepBack={() => stepBack()}
        />
        <MyAlubmResult
          musicList={musicList}
          selectupdateMusic={selectupdateMusic}
          generateYoutubeUrl={videoId => generateYoutubeUrl(videoId)}
          onDuration={duration => onDuration(duration)}
          duration={duration}
          updateMyMusicList={music => updateMyMusicList(music)}
          createMusicFormat={(url, title, index) =>
            createMusicFormat(url, title, index)
          }
        />
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
  createAlubm: emptyAlbum => dispatch(createAlubm(emptyAlbum)),
  deleteAlbum: alubm => dispatch(deleteAlbum(alubm))
});

const mapStateToProps = state => ({
  musicList: state.rootReducer.fetchYoutube.musicList
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAlbum);

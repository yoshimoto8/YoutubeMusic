import React from "react";
import Modal from "react-modal";
import firebase from "firebase";
import { connect } from "react-redux";
import { setPlayList, createAlubm, deleteAlbum } from "../actions/index";
import noImage from "../images/noimage.png";
import EditAlbumModal from "./EditAlbumModal";
import MyAlubmList from "../components/Molecules/MyAlubmList";
import "react-tippy/dist/tippy.css";
import "./styles/MyAlbum.css";
class MyAlbum extends React.Component {
  constructor() {
    super();
    this.state = {
      indexStart: 0,
      indexEnd: 4,
      modalIsOpen: false,
      youtubes: [],
      myMusicLists: [],
      selectEditMusic: {}
    };
  }

  componentDidMount() {
    this.fetchMyMusicList();
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

  changeSearchKeyWord = e => {
    this.setState({ searchKeyWord: e.target.value });
  };

  setUpdateMusic = data => {
    this.setState({ selectupdateMusic: data });
  };

  render() {
    const { createAlubm, setPlayList, deleteAlbum } = this.props;
    const {
      emptyAlubm,
      closeModal,
      openModal,
      setUpdateMusic,
      stepNext,
      stepBack
    } = this;
    const {
      myMusicLists,
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
  createAlubm: emptyAlbum => dispatch(createAlubm(emptyAlbum)),
  deleteAlbum: alubm => dispatch(deleteAlbum(alubm))
});

export default connect(null, mapDispatchToProps)(MyAlbum);

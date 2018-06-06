import React from "react";
import update from "immutability-helper";
import firebase from "firebase";
import { connect } from "react-redux";
import { fetchYoutube } from "../actions";
import SearchContent from "../components/Molecules/SearchContent";
import TabHelmet from "../components/Atoms/TabHelmet";
import "./styles/Search.css";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      duration: [],
      searchKeyWord: "",
      myFavoriteMusic: []
    };
  }

  componentDidMount() {
    this.fetchMyFavoriteMusic();
    if (this.props.musicList.length === 0) {
      const searchKeyWord = localStorage.getItem("searchKeyWord");
      !!searchKeyWord
        ? this.props.fetchYoutube(searchKeyWord)
        : this.props.fetchYoutube("remix");
    }
  }

  addFavoriteMusic = (musicName, url, duration) => {
    console.log(musicName, url, duration);
    const db = firebase.firestore();
    db
      .collection(`users/${sessionStorage.getItem("user")}/userFavoriteMusic`)
      .add({
        musicName: musicName,
        url: url,
        artist: "登録されてません",
        duration: duration
      })
      .then(console.log("成功"));
  };

  fetchMyFavoriteMusic() {
    const db = firebase.firestore();
    db
      .collection(`users/${sessionStorage.getItem("user")}/userFavoriteMusic`)
      .onSnapshot(Snapshot => {
        const myFavoriteMusic = [];
        Snapshot.forEach(doc => {
          myFavoriteMusic.push({ ...doc.data(), key: doc.id });
        });
        this.setState({ myFavoriteMusic });
      });
  }

  onDuration = duration => {
    const newState = update(this.state.duration, { $push: [duration] });
    this.setState({ duration: newState });
  };

  handleFetchYoutube = e => {
    e.preventDefault();
    const { searchKeyWord } = this.state;
    localStorage.setItem("searchKeyWord", searchKeyWord);
    this.props.fetchYoutube(searchKeyWord);
  };

  changeSearchKeyWord = e => {
    this.setState({ searchKeyWord: e.target.value });
  };

  generateYoutubeUrl = videoId => {
    return `https://www.youtube.com/watch?v=${videoId}`;
  };

  render() {
    const {
      handleFetchYoutube,
      changeSearchKeyWord,
      generateYoutubeUrl,
      onDuration,
      addFavoriteMusic
    } = this;
    const { searchKeyWord, duration, myFavoriteMusic } = this.state;
    const { musicList } = this.props;
    return (
      <div className="main">
        <TabHelmet title="検索" />
        <SearchContent
          handleFetchYoutube={e => handleFetchYoutube(e)}
          searchKeyWord={searchKeyWord}
          changeSearchKeyWord={e => changeSearchKeyWord(e)}
          musicList={musicList}
          generateYoutubeUrl={videoId => generateYoutubeUrl(videoId)}
          onDuration={duration => onDuration(duration)}
          duration={duration}
          addFavoriteMusic={(musicName, url, duration) =>
            addFavoriteMusic(musicName, url, duration)
          }
          myFavoriteMusic={myFavoriteMusic}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchYoutube: searchKeyWord => dispatch(fetchYoutube(searchKeyWord))
});

const mapStateToProps = state => ({
  musicList: state.rootReducer.fetchYoutube.musicList
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

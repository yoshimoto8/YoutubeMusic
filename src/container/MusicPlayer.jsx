import React from "react";
import firebase from "firebase";
import { createAlubm } from "../actions";
import { connect } from "react-redux";
import MusicPlayerLists from "../components/Molecules/MusicPlayerLists";
import MusicPlayerDisplay from "../components/Molecules/MusicPlayerDisplay";
import MusicPlayerOperation from "../components/Molecules/MusicPlayerOperation";
import "./styles/MusicPlayer.css";

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myMusicLists: [],
      musicList: [
        {
          id: 1,
          name: "After Dark",
          artists: "Aimer",
          time: 278,
          src: "https://www.youtube.com/watch?v=hIQeXJxWMi4"
        }
      ],
      albumLength: null,
      playingId: null,
      musicName: "",
      artist: "",
      url: null,
      playing: true,
      volume: 0.5,
      muted: false,
      played: 0,
      loaded: 0,
      duration: [],
      playbackRate: 1.0,
      loop: false
    };
  }
  componentWillMount() {
    this.fetchMyMusicList();
    const musicList = this.props.musicList;
    const setmusicList =
      typeof musicList === "object"
        ? Object.keys(musicList).map(function(key) {
            return musicList[key];
          })
        : musicList;

    const albumLength = !setmusicList
      ? this.state.musicList.length
      : setmusicList.length;

    !setmusicList
      ? this.setState({
          albumLength: albumLength
        })
      : this.setState({
          musicList: setmusicList,
          albumLength: albumLength
        });
  }

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

  setFirstMusic = (src, musicName, artist, id) => {
    const playingId = id;
    this.setState({
      url: src,
      musicName: musicName,
      artist: artist,
      playing: false,
      playingId: playingId,
      played: 0
    });
  };

  setUrl = (src, musicName, artist, id) => {
    const playingId = id;
    this.setState({
      playingId: playingId,
      url: src,
      musicName: musicName,
      artist: artist,
      played: 0
    });
  };

  playPause = () => {
    const conditions = this.state.playing ? false : true;
    this.setState({ playing: conditions });
  };

  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  onDuration = duration => {
    this.setState({ duration });
  };

  onProgress = state => {
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  onPlay = () => {
    this.setState({ playing: true });
  };

  onPause = () => {
    this.setState({ playing: false });
  };

  nextPlayMusic = playingId => {
    const nextPlay = playingId === 0 ? playingId + 1 : playingId;
    const { id, src, name, artists } = this.state.musicList[nextPlay];
    this.setState({
      playingId: id,
      url: src,
      musicName: name,
      artist: artists,
      playing: true,
      played: 0
    });
  };

  backPlayMusic = playingId => {
    const nextPlayId = playingId - 2;
    const { id, src, name, artists } = this.state.musicList[nextPlayId];
    this.setState({
      playingId: id,
      url: src,
      musicName: name,
      artist: artists,
      playing: true,
      played: 0
    });
  };

  toggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  format = seconds => {
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor((seconds % 3600) % 60);
    let timeFormated = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    return timeFormated;
  };

  createAlubmFormat = (musicList, alubmImage, playListName) => {
    const alubm = {
      alubmImage: alubmImage,
      playListName: playListName,
      musicList: musicList,
      createdOn: new Date()
    };
    this.props.createAlubm(alubm);
  };

  addFavoriteMusic = (musicName, url, artist, duration) => {
    const db = firebase.firestore();
    db
      .collection(`users/${sessionStorage.getItem("user")}/userFavoriteMusic`)
      .add({
        musicName: musicName,
        url: url,
        artist: artist,
        duration: duration
      })
      .then(console.log("成功"));
  };

  fetchFavoriteMusic = () => {
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

  render() {
    if (this.state.musicList.length !== 0) {
      const {
        setUrl,
        playPause,
        onProgress,
        onDuration,
        setVolume,
        setFirstMusic,
        onPlay,
        onPause,
        nextPlayMusic,
        backPlayMusic,
        toggleLoop,
        createAlubmFormat,
        addFavoriteMusic
      } = this;

      const {
        musicList,
        url,
        playing,
        volume,
        played,
        duration,
        musicName,
        artist,
        playingId,
        albumLength,
        loop,
        myMusicLists
      } = this.state;

      const { isAddMylist, playListName, alubmImage } = this.props;
      if (played === 1 && playingId !== albumLength) {
        nextPlayMusic(playingId);
      }
      const { src, artists, name, id } = musicList[0];
      !url ? setFirstMusic(src, name, artists, id) : null;
      return (
        <div className="main">
          <div className="musicPlay">
            <MusicPlayerDisplay
              myMusicLists={myMusicLists}
              musicName={musicName}
              url={url}
              playing={playing}
              volume={volume}
              loop={loop}
              onProgress={state => onProgress(state)}
              onDuration={duration => onDuration(duration)}
              playPause={playPause}
              onPlay={() => onPlay()}
              onPause={() => onPause()}
              musicList={musicList}
              alubmImage={alubmImage}
              playListName={playListName}
              isAddMylist={isAddMylist}
              createAlubmFormat={(musicList, alubmImage, playListName) =>
                createAlubmFormat(musicList, alubmImage, playListName)
              }
            />
            <MusicPlayerLists
              musicList={musicList}
              url={url}
              playing={playing}
              setUrl={(src, musicName, artist, id) =>
                setUrl(src, musicName, artist, id)
              }
              formatChange={seconds => this.format(seconds)}
            />
          </div>

          {url ? (
            <MusicPlayerOperation
              playingId={playingId}
              albumLength={albumLength}
              playPause={() => playPause()}
              playing={playing}
              played={played}
              duration={duration}
              volume={volume}
              setVolume={e => setVolume(e)}
              musicName={musicName}
              artist={artist}
              nextPlayMusic={playingId => nextPlayMusic(playingId)}
              backPlayMusic={playingId => backPlayMusic(playingId)}
              toggleLoop={() => toggleLoop()}
              loop={loop}
              url={url}
              addFavoriteMusic={(musicName, url, artist, duration) =>
                addFavoriteMusic(musicName, url, artist, duration)
              }
            />
          ) : (
            <div />
          )}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => ({
  musicList: state.rootReducer.setPlayList.defaultMusic,
  alubmImage: state.rootReducer.setPlayList.alubmImage,
  playListName: state.rootReducer.setPlayList.playListName,
  isAddMylist: state.rootReducer.setPlayList.isAddMylist
});

const mapDispatchToProps = dispatch => ({
  createAlubm: emptyAlbum => dispatch(createAlubm(emptyAlbum))
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);

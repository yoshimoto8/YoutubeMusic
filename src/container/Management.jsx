import React from "react";
import firebase from "firebase";
import Dropzone from "react-dropzone";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import update from "immutability-helper";

class Management extends React.Component {
  constructor() {
    super();
    this.state = {
      file: "",
      url: "",
      musicName: "",
      artist: "",
      duration: 0,
      videoId: "",
      alubmName: "",
      alubmImage: "",
      musicList: []
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({ videoId: this.state.url });
  };

  handleChange = e => {
    e.preventDefault();
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  onDuration = duration => {
    this.setState({ duration });
  };

  add = () => {
    const { url, musicName, artist, duration } = this.state;
    const id = this.state.musicList.length + 1;
    const music = {
      id: id,
      name: musicName,
      artists: artist,
      time: duration,
      src: url
    };
    const newState = update(this.state.musicList, { $push: [music] });
    this.setState({ musicList: newState });
  };

  uploadImage = file => {
    return new Promise(resolve => {
      const storageRef = firebase.storage().ref("upload_files/" + file.name);
      storageRef.put(file).then(() => {});
      storageRef.getDownloadURL().then(url => {
        resolve(url);
      });
    });
  };

  pushAlubm = () => {
    this.uploadImage(this.state.file).then(url => {
      const alubm = {
        playListName: this.state.alubmName,
        alubmImage: url,
        musicList: this.state.musicList,
        createdOn: new Date()
      };

      const db = firebase.firestore();
      db
        .collection("publicAlbum")
        .add(alubm)
        .then(() => {
          console.log("成功");
        });
    });
  };

  onDrop(files) {
    const file = files[0];
    this.setState({ file });
  }

  handleChangeAlbumName(e) {
    this.setState({ alubmName: e.target.name });
  }

  render() {
    const { onDuration, musicList } = this;
    return (
      <div>
        <ReactPlayer
          width="200px"
          height="200px"
          onDuration={onDuration}
          url={this.state.videoId}
        />
        <form action="" onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="url">URL</label>
          <input
            name="url"
            type="text"
            value={this.state.url}
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="musicName">MusicName</label>
          <input
            name="musicName"
            type="text"
            value={this.state.musicName}
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="artist">アーティスト名前</label>
          <input
            name="artist"
            type="text"
            value={this.state.artist}
            onChange={e => this.handleChange(e)}
          />
          <button type="submit">確認</button>
        </form>
        <button onClick={() => this.add()}>追加</button>
        <form action="">
          <Dropzone onDrop={this.onDrop.bind(this)} />
          <label htmlFor="artist">アルバム名</label>
          <input
            name="alubmname"
            type="text"
            value={this.state.albumName}
            onChange={e => this.handleChangeAlbumName(e)}
          />
        </form>
        <button onClick={() => this.pushAlubm()}>完了</button>
      </div>
    );
  }
}

export default connect(null, null)(Management);

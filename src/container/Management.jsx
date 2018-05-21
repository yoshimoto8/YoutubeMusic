import React from "react";
import firebase from "firebase";
import Dropzone from "react-dropzone";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import update from "immutability-helper";
import "./styles/Management.css";

class Management extends React.Component {
  constructor() {
    super();
    this.state = {
      file: "",
      url: "",
      musicName: "",
      artist: "",
      duration: [],
      videoId: "",
      playLists: [],
      alubmName: "",
      alubmImage: "",
      musicList: []
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const obj = {
      name: this.state.musicName,
      artists: this.state.artist,
      src: this.state.url
    };
    const newState = update(this.state.playLists, { $push: [obj] });
    this.setState({ playLists: newState });
  };

  handleChange = e => {
    e.preventDefault();
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  onDuration = duration => {
    const newState = update(this.state.duration, { $push: [duration] });
    this.setState({ duration: newState });
  };

  add = () => {
    const { playLists, duration } = this.state;
    const id = this.state.musicList.length + 1;
    const time = duration[0];
    const music = { id, time, ...playLists[0] };
    const newState = update(this.state.musicList, { $push: [music] });
    this.setState({ musicList: newState, duration: [], playLists: [] });
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
    console.log(this.state.alubmName);
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

  render() {
    const { onDuration } = this;
    return (
      <div>
        {this.state.playLists.map((data, index) => {
          return (
            <ReactPlayer
              key={index}
              width="200px"
              height="200px"
              onDuration={onDuration}
              url={data.src}
            />
          );
        })}
        <form className="form" action="" onSubmit={e => this.onSubmit(e)}>
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
            name="alubmName"
            type="text"
            value={this.state.albumName}
            onChange={e => this.handleChange(e)}
          />
        </form>
        {this.state.musicList.map((data, index) => {
          return (
            <div key={index} className="management-displayAddList">
              <div>id: {data.id}</div>
              <div>URL: {data.src}</div>
              <div>名前： {data.name} </div>
              <div>アーティスト: {data.artists}</div>
              <div>時間: {data.time}</div>
            </div>
          );
        })}
        <button onClick={() => this.pushAlubm()}>完了</button>
      </div>
    );
  }
}

export default connect(null, null)(Management);

import React from "react";
import Dropzone from "react-dropzone";
import "./styles/EditAlbumModal.css";
import firebase from "firebase";

class EditAlbumModal extends React.Component {
  constructor() {
    super();
    this.state = {
      editAlubm: {},
      alibmName: "",
      imagePreviewUrl: "",
      file: null,
      updateImg: null
    };
  }

  componentDidMount() {
    const alibmName = this.props.data.playListName;
    this.setState({ editAlubm: this.props.data, alibmName: alibmName });
  }

  uploadImage = file => {
    return new Promise(resolve => {
      const storageRef = firebase.storage().ref("upload_files/" + file.name);
      storageRef.put(file).then(() => {});
      storageRef.getDownloadURL().then(url => {
        resolve(url);
      });
    });
  };

  // とりあいずできたげとコードが複雑すぎる
  updateAlubm = () => {
    if (!!this.state.file) {
      const file = this.state.file;
      this.uploadImage(file).then(url => {
        const { key } = this.state.editAlubm;
        const db = firebase.firestore();
        db
          .collection(`users/${sessionStorage.getItem("user")}/userMusicList`)
          .doc(key)
          .update({
            alubmImage: url,
            playListName: this.state.alibmName
          })
          .then(() => {
            this.props.closeModal();
          });
      });
    } else {
      const { key, alubmImage } = this.state.editAlubm;
      const db = firebase.firestore();
      db
        .collection(`users/${sessionStorage.getItem("user")}/userMusicList`)
        .doc(key)
        .update({
          alubmImage: alubmImage,
          playListName: this.state.alibmName
        })
        .then(() => {
          this.props.closeModal();
        });
    }
  };

  changeAlubmName = e => {
    this.setState({ alibmName: e.target.value });
  };

  onDrop(files) {
    const reader = new FileReader();
    const file = files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  render() {
    const { changeAlubmName } = this;
    const { alibmName, imagePreviewUrl } = this.state;
    return (
      <div>
        <div className="EditAlbumModal-edit_top">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            {imagePreviewUrl ? (
              <img src={imagePreviewUrl} alt="" height="204px" width="200px" />
            ) : (
              <p>ここに画像をドロップダウンするかクリックしてください</p>
            )}
          </Dropzone>
          <input
            type="text"
            value={alibmName}
            onChange={e => changeAlubmName(e)}
          />
        </div>
        <button onClick={() => this.updateAlubm()}>登録する</button>
        <button onClick={() => this.props.closeModal()}>やめる</button>
      </div>
    );
  }
}

export default EditAlbumModal;

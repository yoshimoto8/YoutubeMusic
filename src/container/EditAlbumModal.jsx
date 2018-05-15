import React from "react";
import Dropzone from "react-dropzone";
import "./styles/EditAlbumModal.css";
import firebase from "firebase";

class EditAlbumModal extends React.Component {
  constructor() {
    super();
    this.state = {
      editAlubm: {},
      files: null
    };
  }

  componentDidMount() {
    this.setState({ editAlubm: this.props.data });
  }

  // 画像アップロード
  uploadImage = () => {
    const file = this.state.files[0];
    const storageRef = firebase.storage().ref(`upload_files/${file.name}`);
    storageRef
      .put(file)
      .then(result => {
        debugger;
      })
      .catch(err => console.log("エラーーーー", err));
  };

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    const { editAlubm } = this.state;
    const { playListName } = editAlubm;
    console.log(this.state.files);
    return (
      <div>
        <div className="EditAlbumModal-edit_top">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>ここに画像をドロップダウンするかクリックしてください</p>
          </Dropzone>
          <h1>{playListName}</h1>
        </div>
        <button onClick={() => this.uploadImage()}>登録する</button>
        <button onClick={() => this.props.closeModal()}>やめる</button>
      </div>
    );
  }
}

export default EditAlbumModal;

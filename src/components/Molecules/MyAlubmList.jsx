import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tippy";
import IoAndroidMoreHorizontal from "react-icons/lib/io/android-more-horizontal";

const MyAlubmList = props => {
  const {
    createAlubm,
    emptyAlubm,
    myMusicLists,
    setPlayList,
    openModal,
    setUpdateMusic,
    selectupdateMusic
  } = props;
  return (
    <div className="myAlbum-displayMusicBox">
      <Tooltip
        title="アルバムを作成することができます"
        position="left"
        trigger="mouseenter"
      >
        <a href="" className="btn" onClick={e => createAlubm(emptyAlubm(e))}>
          +
        </a>
      </Tooltip>
      {myMusicLists.map((data, index) => {
        const { alubmImage, musicList, playListName } = data;
        const isSelected = selectupdateMusic === data;
        return (
          <div key={index} className="myAlbum-displayMusic">
            <div className="myAlbum-musicController">
              <Link
                to="/MusicPlayer"
                className="myAlbum-playBtn"
                onClick={() => setPlayList(musicList)}
              />
              <Tooltip
                position="right"
                trigger="click"
                interactive
                html={
                  <div className="myAlbum-musicAction">
                    <div
                      className="myAlbum-musicAction1"
                      onClick={() => openModal(data)}
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
            {isSelected ? (
              <h3 className="myAlbum-selected">{playListName}</h3>
            ) : (
              <h3
                className="myAlbum-playListName"
                onClick={() => setUpdateMusic(data)}
              >
                {playListName}
              </h3>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MyAlubmList;

import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tippy";
import IoAndroidMoreHorizontal from "react-icons/lib/io/android-more-horizontal";
import FaAngleLeft from "react-icons/lib/fa/angle-left";
import FaAngleRight from "react-icons/lib/fa/angle-right";

const MyAlubmList = props => {
  const {
    createAlubm,
    emptyAlubm,
    myMusicLists,
    setPlayList,
    openModal,
    setUpdateMusic,
    selectupdateMusic,
    deleteAlbum,
    indexStart,
    indexEnd,
    stepNext,
    stepBack
  } = props;

  const sliceMusicList = myMusicLists.slice(indexStart, indexEnd);
  return (
    <div className="myAlbum-displayMusicBox">
      <Tooltip
        className="myAlbum-addBtnWrapper"
        title="アルバムを作成することができます"
        position="left"
        trigger="mouseenter"
      >
        <a className="myAlbum-addBtn" onClick={e => createAlubm(emptyAlubm(e))}>
          +
        </a>
      </Tooltip>
      <div className="myAlbum-stepBackBox">
        <FaAngleLeft className="myAlbum-stepBack" onClick={() => stepBack()} />
      </div>
      {sliceMusicList.map((data, index) => {
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
                    <div
                      className="myAlbum-musicAction1"
                      onClick={() => deleteAlbum(data)}
                    >
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
      <div className="myAlbum-stepNextBox">
        <FaAngleRight className="myAlbum-stepBack" onClick={() => stepNext()} />
      </div>
    </div>
  );
};

export default MyAlubmList;

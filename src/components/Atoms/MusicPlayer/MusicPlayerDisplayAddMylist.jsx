import React from "react";

const MusicPlayerDisplayAddMylist = props => {
  const {
    sameName,
    createAlubmFormat,
    musicList,
    alubmImage,
    playListName,
    isAddMylist
  } = props;
  console.log(sameName, isAddMylist);
  if (isAddMylist) {
    return (
      <div>
        {sameName.length === 0 ? (
          <button
            className="mylistBtn"
            onClick={() =>
              createAlubmFormat(musicList, alubmImage, playListName)
            }
          >
            マイリストに追加
          </button>
        ) : (
          <button className="mylistBtn">追加済み</button>
        )}
      </div>
    );
  } else {
    return <div />;
  }
};

export default MusicPlayerDisplayAddMylist;

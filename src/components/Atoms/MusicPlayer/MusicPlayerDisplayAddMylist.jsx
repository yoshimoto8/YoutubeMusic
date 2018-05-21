import React from "react";
import PropTypes from "prop-types";

const MusicPlayerDisplayAddMylist = props => {
  const {
    sameName,
    createAlubmFormat,
    musicList,
    alubmImage,
    playListName,
    isAddMylist
  } = props;

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

MusicPlayerDisplayAddMylist.propTypes = {
  sameName: PropTypes.array,
  createAlubmFormat: PropTypes.func,
  musicList: PropTypes.array,
  alubmImage: PropTypes.string,
  playListName: PropTypes.string,
  isAddMylist: PropTypes.bool
};

export default MusicPlayerDisplayAddMylist;

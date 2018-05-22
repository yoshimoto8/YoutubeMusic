import React from "react";
import PropTypes from "prop-types";
import MyAlubmSearch from "./MyAlubmSearch";
import MyAlubmResult from "./MyAlubmResult";

const MyAlubmSearchContent = props => {
  const {
    handleFetchYoutube,
    searchKeyWord,
    changeSearchKeyWord,
    musicList,
    selectupdateMusic,
    generateYoutubeUrl,
    onDuration,
    duration,
    updateMyMusicList,
    createMusicFormat
  } = props;

  return (
    <div>
      <MyAlubmSearch
        handleFetchYoutube={handleFetchYoutube}
        searchKeyWord={searchKeyWord}
        changeSearchKeyWord={changeSearchKeyWord}
      />
      <MyAlubmResult
        musicList={musicList}
        generateYoutubeUrl={generateYoutubeUrl}
        onDuration={onDuration}
        duration={duration}
      />
    </div>
  );
};

MyAlubmSearchContent.propTypes = {
  handleFetchYoutube: PropTypes.func,
  searchKeyWord: PropTypes.string,
  changeSearchKeyWord: PropTypes.func,
  musicList: PropTypes.array,
  generateYoutubeUrl: PropTypes.func,
  onDuration: PropTypes.func,
  duration: PropTypes.any.isRequired
};

export default MyAlubmSearchContent;

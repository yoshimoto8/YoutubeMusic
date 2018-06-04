import React from "react";
import PropTypes from "prop-types";
import SearchContentSearch from "./SearchContentSearch";
import SearchContentResult from "./SearchContentResult";

const SearchContent = props => {
  const {
    handleFetchYoutube,
    searchKeyWord,
    changeSearchKeyWord,
    musicList,
    generateYoutubeUrl,
    onDuration,
    duration,
    addFavoriteMusic,
    myFavoriteMusic
  } = props;

  return (
    <div>
      <SearchContentSearch
        handleFetchYoutube={handleFetchYoutube}
        searchKeyWord={searchKeyWord}
        changeSearchKeyWord={changeSearchKeyWord}
      />
      <SearchContentResult
        musicList={musicList}
        generateYoutubeUrl={generateYoutubeUrl}
        onDuration={onDuration}
        duration={duration}
        addFavoriteMusic={addFavoriteMusic}
        myFavoriteMusic={myFavoriteMusic}
      />
    </div>
  );
};

SearchContent.propTypes = {
  handleFetchYoutube: PropTypes.func,
  searchKeyWord: PropTypes.string,
  changeSearchKeyWord: PropTypes.func,
  musicList: PropTypes.array,
  generateYoutubeUrl: PropTypes.func,
  onDuration: PropTypes.func,
  duration: PropTypes.any.isRequired
};

export default SearchContent;

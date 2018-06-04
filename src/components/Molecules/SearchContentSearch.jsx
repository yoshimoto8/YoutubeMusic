import React from "react";

const SearchContentSearch = props => {
  const { handleFetchYoutube, searchKeyWord, changeSearchKeyWord } = props;
  return (
    <form className="myAlubm-searchForm" onSubmit={e => handleFetchYoutube(e)}>
      <input
        className="myAlubm-searchKeyWord"
        type="text"
        placeholder="search"
        value={searchKeyWord}
        onChange={e => changeSearchKeyWord(e)}
      />
    </form>
  );
};
export default SearchContentSearch;

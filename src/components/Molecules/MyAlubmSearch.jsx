import React from "react";

const MyAlubmSearch = props => {
  const { handleFetchYoutube, searchKeyWord, changeSearchKeyWord } = props;
  return (
    <form onSubmit={e => handleFetchYoutube(e)}>
      <input
        type="text"
        value={searchKeyWord}
        onChange={e => changeSearchKeyWord(e)}
      />
      <input type="submit" value="send" />
    </form>
  );
};
export default MyAlubmSearch;

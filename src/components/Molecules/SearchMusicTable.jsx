import React from "react";
import SearchYoutube from "../Atoms/SearchYoutube";
import "./styles/SearchMusicTable.css";

const SearchMusicTable = props => {
  const {
    videoId,
    title,
    pushPlayLists,
    makeUrl,
    playListName,
    onDuration,
    time,
    setAddPlayListLength
  } = props;
  const url = makeUrl(videoId);
  const id = setAddPlayListLength === 0 ? 1 : setAddPlayListLength + 1;
  return (
    <div className="musicSearchRow">
      <SearchYoutube videoId={url} onDuration={onDuration} />
      <h2>{title}</h2>
      {playListName === "アルバムを選んでください" ? (
        <button>{playListName}</button>
      ) : (
        <button onClick={() => pushPlayLists(url, id, title, time)}>
          {playListName}
        </button>
      )}
    </div>
  );
};

export default SearchMusicTable;

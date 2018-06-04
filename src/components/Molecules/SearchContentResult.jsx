import React from "react";
import ReactPlayer from "react-player";
import FaHeartO from "react-icons/lib/fa/heart-o";
import FaHeart from "react-icons/lib/fa/heart";

const SearchContentResult = props => {
  const {
    musicList,
    generateYoutubeUrl,
    onDuration,
    addFavoriteMusic,
    duration,
    myFavoriteMusic
  } = props;
  return (
    <div className="MyAlubmResult-resultLists">
      {musicList.map((data, index) => {
        const { snippet, id } = data;
        const url = generateYoutubeUrl(id.videoId);
        const favoriteArray = myFavoriteMusic.filter(data => {
          return data.url === url;
        });
        const isFavorite = favoriteArray.length === 0 ? false : true;
        return (
          <div key={index} className="MyAlubmResult-resultBox">
            <ReactPlayer
              className="MyAlubmResult-resultPlayer"
              width="200px"
              height="200px"
              url={url}
              onDuration={onDuration}
            />
            <div className="MyAlubmResult-wrraper">
              <div className="Search-favorite">
                {isFavorite ? (
                  <FaHeart color="#1db954" />
                ) : (
                  <FaHeartO
                    color="hsla(0, 0%, 100%, 0.6)"
                    onClick={() =>
                      addFavoriteMusic(snippet.title, url, duration[index])
                    }
                  />
                )}
              </div>
              <div className="MyAlubmResult-resultTitle">{snippet.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchContentResult;

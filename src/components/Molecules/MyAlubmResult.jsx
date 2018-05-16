import React from "react";
import ReactPlayer from "react-player";

const MyAlubmResult = props => {
  const {
    musicList,
    generateYoutubeUrl,
    duration,
    onDuration,
    updateMyMusicList,
    createMusicFormat
  } = props;

  return (
    <div>
      {musicList.map((data, index) => {
        const { snippet, id } = data;
        const url = generateYoutubeUrl(id.videoId);
        return (
          <div key={index}>
            <h2>{snippet.title}</h2>
            <ReactPlayer
              width="200px"
              height="200px"
              url={url}
              onDuration={() => onDuration(duration)}
            />
            <button
              onClick={Music =>
                updateMyMusicList(createMusicFormat(url, snippet.title))
              }
            >
              追加する
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MyAlubmResult;

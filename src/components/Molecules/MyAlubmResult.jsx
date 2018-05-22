import React from "react";
import ReactPlayer from "react-player";

const MyAlubmResult = props => {
  const { musicList, generateYoutubeUrl, onDuration } = props;
  return (
    <div className="MyAlubmResult-resultLists">
      {musicList.map((data, index) => {
        const { snippet, id } = data;
        const url = generateYoutubeUrl(id.videoId);
        return (
          <div key={index} className="MyAlubmResult-resultBox">
            <ReactPlayer
              className="MyAlubmResult-resultPlayer"
              width="200px"
              height="200px"
              url={url}
              onDuration={duration => onDuration(duration)}
            />
            <div className="MyAlubmResult-wrraper">
              <div className="MyAlubmResult-resultTitle">{snippet.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyAlubmResult;

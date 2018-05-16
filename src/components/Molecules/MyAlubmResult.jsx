import React from "react";
import ReactPlayer from "react-player";

import MyAlubmResultAddBtn from "../Atoms/MyAlubmResultAddBtn";

const MyAlubmResult = props => {
  const {
    musicList,
    generateYoutubeUrl,
    onDuration,
    updateMyMusicList,
    createMusicFormat,
    selectupdateMusic
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
              onDuration={duration => onDuration(duration)}
            />
            <MyAlubmResultAddBtn
              updateMyMusicList={updateMyMusicList}
              createMusicFormat={createMusicFormat}
              selectupdateMusic={selectupdateMusic}
              url={url}
              title={snippet.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MyAlubmResult;

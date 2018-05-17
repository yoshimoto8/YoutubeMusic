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
              <MyAlubmResultAddBtn
                updateMyMusicList={updateMyMusicList}
                createMusicFormat={createMusicFormat}
                selectupdateMusic={selectupdateMusic}
                url={url}
                title={snippet.title}
              />
              <div className="MyAlubmResult-resultTitle">{snippet.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyAlubmResult;

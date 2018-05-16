import React from "react";

const MyAlubmResultAddBtn = props => {
  const {
    updateMyMusicList,
    createMusicFormat,
    selectupdateMusic,
    url,
    title
  } = props;

  const isSet = Object.keys(selectupdateMusic).length === 0 ? false : true;

  if (isSet) {
    return (
      <button
        onClick={Music => updateMyMusicList(createMusicFormat(url, title))}
      >
        追加する
      </button>
    );
  } else {
    return <button>アルバムを選択してくだい</button>;
  }
};

export default MyAlubmResultAddBtn;

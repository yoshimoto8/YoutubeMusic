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
        className="MyAlubmResultAddBtn-addBtn"
        onClick={Music => updateMyMusicList(createMusicFormat(url, title))}
      >
        追加する
      </button>
    );
  } else {
    return (
      <div className="MyAlubmResultAddBtn-selectBtn">
        アルバムを選択してくだい
      </div>
    );
  }
};

export default MyAlubmResultAddBtn;

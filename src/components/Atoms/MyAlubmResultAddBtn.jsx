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
      <div
        className="MyAlubmResultAddBtn-addBtn"
        onClick={Music => updateMyMusicList(createMusicFormat(url, title))}
      >
        +
      </div>
    );
  } else {
    return <div />;
  }
};

export default MyAlubmResultAddBtn;

import React from "react";
import MdAdd from "react-icons/lib/md/add";
import MdCheck from "react-icons/lib/md/check";

const MyAlubmResultAddBtn = props => {
  const {
    updateMyMusicList,
    createMusicFormat,
    selectupdateMusic,
    url,
    title
  } = props;

  const isSet = Object.keys(selectupdateMusic).length === 0 ? false : true;
  const sameMusic = selectupdateMusic.musicList.filter(
    data => data.name === title
  );
  const isAdd = sameMusic.length === 0;

  if (isSet && isAdd) {
    return (
      <div
        className="MyAlubmResultAddBtn-addBtn"
        onClick={Music => updateMyMusicList(createMusicFormat(url, title))}
      >
        <MdAdd />
      </div>
    );
  } else if (isSet) {
    return (
      <div className="MyAlubmResultAddBtn-alreadyAdd">
        <MdCheck />
      </div>
    );
  } else {
    return <div />;
  }
};

export default MyAlubmResultAddBtn;

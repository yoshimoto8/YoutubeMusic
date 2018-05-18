import React from "react";
import MdAdd from "react-icons/lib/md/add";
import MdCheck from "react-icons/lib/md/check";

const MyAlubmResultAddBtn = props => {
  const {
    updateMyMusicList,
    createMusicFormat,
    selectupdateMusic,
    url,
    title,
    index
  } = props;

  const isSet = Object.keys(selectupdateMusic).length === 0 ? false : true;
  const sameMusic = isSet
    ? selectupdateMusic.musicList.filter(data => data.name === title)
    : [];

  if (isSet && sameMusic.length === 0) {
    return (
      <div
        className="MyAlubmResultAddBtn-addBtn"
        onClick={Music =>
          updateMyMusicList(createMusicFormat(url, title, index))
        }
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

import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "react-tippy";
import FaEllipsisH from "react-icons/lib/fa/ellipsis-h";
import MusicPlayerListsTitle from "../Atoms/MusicPlayer/MusicPlayerListsTitle";
import MusicPlayerListsIcon from "../Atoms/MusicPlayer/MusicPlayerListsIcon";

const MusicPlayerLists = props => {
  const { musicList, url, setUrl, formatChange, isAddMylist } = props;
  return (
    <div className="musicList">
      {musicList.map((data, index) => {
        const playNow = data.src === url;
        return (
          <div
            className="musicRow"
            key={index}
            onClick={() => setUrl(data.src, data.name, data.artists, data.id)}
          >
            <MusicPlayerListsIcon playNow={playNow} />
            <MusicPlayerListsTitle
              title={data.name}
              artist={data.artists}
              playNow={playNow}
            />
            <div className="musicTime">{formatChange(data.time)}</div>
          </div>
        );
      })}
    </div>
  );
};

MusicPlayerLists.propTypes = {
  musicList: PropTypes.array,
  url: PropTypes.string,
  setUrl: PropTypes.func,
  formatChange: PropTypes.func,
  isAddMylist: PropTypes.bool
};

export default MusicPlayerLists;

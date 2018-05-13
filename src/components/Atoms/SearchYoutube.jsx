import React from "react";
import ReactPlayer from "react-player";
import "./styles/YoutubeMusic.css";

class SearchYoutube extends React.Component {
  render() {
    const { onDuration, videoId } = this.props;
    return (
      <ReactPlayer
        width="200px"
        height="200px"
        url={videoId}
        onDuration={duration => onDuration(duration)}
      />
    );
  }
}

export default SearchYoutube;

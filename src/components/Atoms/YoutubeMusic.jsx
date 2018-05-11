import React from "react";
import ReactPlayer from "react-player";
import "./styles/YoutubeMusic.css";

class YouTubeMusic extends React.Component {
  render() {
    const { data, className, onPlay, onPause } = this.props;
    const { id, videoId, playing } = data;
    return (
      <ReactPlayer
        className={className}
        width="200px"
        height="200px"
        url={videoId}
        playing={playing}
        onPlay={() => onPlay(id)}
        onPause={() => onPause(id)}
      />
    );
  }
}

export default YouTubeMusic;

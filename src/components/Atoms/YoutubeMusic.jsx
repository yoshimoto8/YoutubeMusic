import React from "react";
import YouTube from "react-youtube";
import "./styles/YoutubeMusic.css";

class YouTubeMusic extends React.Component {
  render() {
    const opts = {
      height: "200",
      width: "200"
    };
    const { videoId, className } = this.props;

    return (
      <YouTube
        className={className}
        videoId={videoId}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YouTubeMusic;

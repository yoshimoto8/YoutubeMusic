import React from "react";
import update from "immutability-helper";
import { connect } from "react-redux";
import { fetchYoutube } from "../actions";
import MyAlubmSearchContent from "../components/Molecules/MyAlubmSearchContent";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      duration: [],
      searchKeyWord: ""
    };
  }

  onDuration = duration => {
    const newState = update(this.state.duration, { $push: [duration] });
    this.setState({ duration: newState });
  };

  handleFetchYoutube = e => {
    e.preventDefault();
    const { searchKeyWord } = this.state;
    this.props.fetchYoutube(searchKeyWord);
    this.setState({ duration: [] });
  };

  changeSearchKeyWord = e => {
    this.setState({ searchKeyWord: e.target.value });
  };

  generateYoutubeUrl = videoId => {
    return `https://www.youtube.com/watch?v=${videoId}`;
  };

  render() {
    const {
      handleFetchYoutube,
      changeSearchKeyWord,
      generateYoutubeUrl,
      onDuration
    } = this;
    const { searchKeyWord, duration } = this.state;
    const { musicList } = this.props;
    return (
      <div className="main">
        <MyAlubmSearchContent
          handleFetchYoutube={e => handleFetchYoutube(e)}
          searchKeyWord={searchKeyWord}
          changeSearchKeyWord={e => changeSearchKeyWord(e)}
          musicList={musicList}
          generateYoutubeUrl={videoId => generateYoutubeUrl(videoId)}
          onDuration={duration => onDuration(duration)}
          duration={duration}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchYoutube: searchKeyWord => dispatch(fetchYoutube(searchKeyWord))
});

const mapStateToProps = state => ({
  musicList: state.rootReducer.fetchYoutube.musicList
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

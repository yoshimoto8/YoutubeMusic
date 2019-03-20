import React from "react";
import { connect } from "react-redux";
import TabHelmet from "../components/Atoms/TabHelmet";
import { setArtist } from "../actions";
import { fetchArtist } from "../actions/artist";
import ArtistList from "../components/Molecules/ArtistList";
import "./styles/Artist.css";

class Artist extends React.Component {
  componentDidMount() {
    this.props.fetchArtist();
  }

  render() {
    const { setArtist, artistLists } = this.props;
    return (
      <div className="main">
        <TabHelmet title="アーティスト" />
        <h2 className="Artist-header">アーティスト</h2>
        <ArtistList
          artistLists={artistLists}
          setArtist={data => setArtist(data)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setArtist: artistData => dispatch(setArtist(artistData)),
  fetchArtist: () => dispatch(fetchArtist())
});

const mapStateToProps = state => ({
  artistLists: state.rootReducer.fetchArtist.fetchArtist
});

export default connect(mapStateToProps, mapDispatchToProps)(Artist);

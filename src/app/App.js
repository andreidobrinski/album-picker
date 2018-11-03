import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAlbum, getAlbumListLength } from './api';
import Curators from './curators';
import Labels from './labels/labels';
import CuratorLabel from './labels/curator-label';
import Vinyl from './vinyl-svg';
import { AppBG, RandomizeButton } from './styled';

class App extends Component {
  state = this.getInitialState();

  getInitialState() {
    const { location: { pathname } } = this.props;
    const curatorNameFromUrl = pathname.replace(/\//gi, '');
    return {
      albumTitle: 'Tap below to choose an album',
      artist: '',
      curator: Curators[curatorNameFromUrl],
      albumListLength: 0,
    };
  }

  componentDidMount() {
    const { curator } = this.state;
    getAlbumListLength(curator.id)
      .then(response => this.setState({
        albumListLength: response.newAlbumListLength,
      }));
  }

  pickRandomAlbum = () => {
    const { albumListLength, curator } = this.state;
    const albumRow = Math.floor(Math.random() * (albumListLength));
    getAlbum(curator.id, albumRow)
      .then(response => this.setState({
        albumTitle: response.newAlbumTitle,
        artist: response.newArtist,
      }));
  }

  render() {
    const { albumTitle, artist, curator } = this.state;
    return (
      <AppBG>
        <Labels
          albumTitle={albumTitle}
          artist={artist}
        />
        <RandomizeButton
          onClick={() => this.pickRandomAlbum()}
        >
          <Vinyl />
        </RandomizeButton>
        <CuratorLabel curator={curator} />
      </AppBG>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAlbum, getAlbumListLength } from './api';
import Curators from './curators';
import Labels from './labels/labels';
import CuratorLabel from './labels/curator-label';
import Vinyl from './vinyl-svg';
import { AppBG, RandomizeButton } from './styled';

class App extends Component {
  state = {
    albumTitle: 'Tap below to choose an album',
    artist: '',
    curator: Curators.andrei,
    albumListLength: 0,
  };

  componentWillMount() {
    this.setState({
      curator: Curators[this.getCuratorNameFromUrl()],
    });
  }

  componentDidMount() {
    getAlbumListLength(this.state.curator.id)
      .then(response => this.setState({
        albumListLength: response.newAlbumListLength,
      }));
  }

  getCuratorNameFromUrl = () => {
    const url = this.props.location.pathname;
    const curatorName = url.replace(/\//gi, '');
    return curatorName;
  };

  pickRandomAlbum = () => {
    const { albumListLength } = this.state;
    const albumRow = Math.floor(Math.random() * (albumListLength));
    getAlbum(this.state.curator.id, albumRow)
      .then(response => this.setState({
        albumTitle: response.newAlbumTitle,
        artist: response.newArtist,
      }));
  }

  render() {
    return (
      <AppBG>
        <Labels
          albumTitle={this.state.albumTitle}
          artist={this.state.artist}
        />
        <RandomizeButton
          onClick={() => this.pickRandomAlbum()}
        >
          <Vinyl />
        </RandomizeButton>
        <CuratorLabel curator={this.state.curator} />
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

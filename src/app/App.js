import React, { Component } from 'react';
import { getAlbum, getAlbumListLength } from './api';
import Labels from '../components/labels/labels';
import CuratorLabel from '../components/labels/curator-label';
import Vinyl from '../components/vinyl';
import { AppBG, View, RandomizeButton } from './styled';
import './App.css';

class App extends Component {
  state = {
    albumTitle: '',
    artist: '',
    curator: 1,
    albumListLength: 0,
  };

  componentWillMount() {
    this.setState({
      curator: this.getCuratorFromUrl(),
    });
  }

  componentDidMount() {
    getAlbumListLength(this.state.curator)
      .then(response => this.setState({
        albumListLength: response.newAlbumListLength,
      }));
  }

  getCuratorFromUrl = () => {
    const url = window.location.href;
    if (url.includes('andrei')) return 1;
    if (url.includes('amanda')) return 2;
    if (url.includes('aaron')) return 3;
    if (url.includes('kathleenkyle')) return 4;
    return 1;
  };

  pickRandomAlbum = () => {
    const albumList = this.state.albumListLength;
    const albumRow = Math.floor(Math.random() * (albumList));
    getAlbum(this.state.curator, albumRow)
      .then(response => this.setState({
        albumTitle: response.newAlbumTitle,
        artist: response.newArtist,
      }));
  }

  render() {
    return (
      <AppBG>
        <View>
          <Labels
            albumTitle={this.state.albumTitle}
            artist={this.state.artist}
          />
          <RandomizeButton
            onClick={() => this.pickRandomAlbum()}
          >
            <Vinyl />
          </RandomizeButton>
          <br />
          <CuratorLabel curator={this.state.curator} />
        </View>
      </AppBG>
    );
  }
}

export default App;

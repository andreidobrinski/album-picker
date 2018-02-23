import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Andrei from '../curators/andrei';
import Amanda from '../curators/amanda';
import Labels from '../components/labels/labels';
import CuratorLabel from '../components/labels/curator-label';
import Vinyl from '../components/vinyl';
import { AppBG, View, RandomizeButton, CuratorButton } from './styled';
import './App.css';

class App extends Component {
  state = {
    albumTitle: '',
    artist: '',
    curator: Amanda,
  };

  pickRandomAlbum = () => {
    const { albumList } = this.state.curator;
    const randomize = Math.floor(Math.random() * albumList.length);
    const newAlbumTitle = albumList[randomize].albumTitle;
    const newArtist = albumList[randomize].artist;
    this.setState({
      albumTitle: newAlbumTitle,
      artist: newArtist,
    });
  }

  changeCurator = () => {
    if (this.state.curator === Amanda) {
      return this.setState({
        curator: Andrei,
      });
    }
    if (this.state.curator === Andrei) {
      return this.setState({
        curator: Amanda,
      });
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
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
            <CuratorButton
              onClick={() => this.changeCurator()}
            >
              Change Curator
            </CuratorButton>
          </View>
        </AppBG>
      </ThemeProvider>
    );
  }
}

export default App;

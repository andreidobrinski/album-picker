import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Andrei from '../curators/andrei';
import Amanda from '../curators/amanda';
import Labels from '../components/labels/labels';
import CuratorLabel from '../components/labels/curator-label';
import { AppBG, View, RandomizeButton, CuratorButton } from './styled';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.pickRandomAlbum = this.pickRandomAlbum.bind(this);
    this.changeCurator = this.changeCurator.bind(this);
    this.state = {
      albumTitle: '',
      artist: '',
      curator: Amanda
    };
  };

  pickRandomAlbum() {
    let albumList = this.state.curator.albumList
    const randomize = Math.floor(Math.random() * albumList.length);
    const newAlbumTitle = albumList[randomize].albumTitle;
    const newArtist = albumList[randomize].artist;
    this.setState({
      albumTitle: newAlbumTitle,
      artist: newArtist
    });
  }

  changeCurator() {
    if (this.state.curator === Amanda) {
      return this.setState({
        curator: Andrei
      });
    }
    if (this.state.curator === Andrei) {
      return this.setState({
        curator: Amanda
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
              Randomize!
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

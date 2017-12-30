import React, { Component } from 'react';
import Andrei from './andrei';
import Amanda from './amanda';
import Labels from './components/labels';
import CuratorLabel from './components/curator-label';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.randomAlbum = this.randomAlbum.bind(this);
    this.changeCurator - this.changeCurator.bind(this);
    this.state = {
      albumTitle: '',
      artist: '',
      curator: Amanda
    };
  };

  randomAlbum() {
    this.randomize = Math.floor(Math.random() * this.state.curator.length);
    const newAlbumTitle = this.state.curator[this.randomize].albumTitle;
    const newArtist = this.state.curator[this.randomize].artist;
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
      <div className="App">
        <div className="view">
          <Labels
            albumTitle={this.state.albumTitle}
            artist={this.state.artist}
          />
          <button
            onClick={() => this.randomAlbum()}
            className="button"
          >
            Randomize!
          </button>
          <br />
          <button
            onClick={() => this.changeCurator()}
            className="button"
          >
            Change Curator
          </button>
          <CuratorLabel curator={this.state.curator} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Albums from './albums';
import Labels from './components/labels';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.randomAlbum = this.randomAlbum.bind(this);
    this.state = {
      albumTitle: '',
      artist: ''
    }
  }

  randomAlbum() {
    this.ralbum = Math.floor(Math.random() * Albums.length);
    const newAlbumTitle = Albums[this.ralbum].albumTitle;
    const newArtist = Albums[this.ralbum].artist;
    this.setState({
      albumTitle: newAlbumTitle,
      artist: newArtist
    });
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
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Albums from './albums';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.randomAlbum = this.randomAlbum.bind(this);
    this.state = {
      albumTitle: "",
      artist: ""
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
          <div className="label-box">
            <p className="label-text">
              {this.state.albumTitle}
            </p>
            <p className="label-text">
              {this.state.artist}
            </p>
          </div>
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

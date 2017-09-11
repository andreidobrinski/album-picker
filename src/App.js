import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const albums = [
  {albumTitle: "By The Way",
  artist: "Red Hot Chili Peppers"
  },
  {albumTitle: "Illmatic",
  artist: "Nas"
  },
  {albumTitle: "In Return",
  artist: "Odesza"
  }
  ];

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
    this.ralbum = Math.floor(Math.random() * albums.length);
    const newAlbumTitle = albums[this.ralbum].albumTitle;
    const newArtist = albums[this.ralbum].artist;
    this.setState({
      albumTitle: newAlbumTitle,
      artist: newArtist
    });
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div className="view">

          <div className="label-box">

            <p className="label-text">
              {this.state.albumTitle}
            </p>

            <p className="label-text">
              {this.state.artist}
            </p>
            
          </div>

          <button className="button"
          onClick={this.randomAlbum.bind(this)}>
            Randomize!
          </button>

        </div>

      </div>
    );
  }
}

export default App;

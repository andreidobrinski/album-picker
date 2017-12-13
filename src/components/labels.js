import React from 'react';
import '../App.css';

const Labels = ({ albumTitle, artist} ) => {
  return (
    <div className="label-box">
      <p className="label-text">
        {albumTitle}
      </p>
      <p className="label-text">
        {artist}
      </p>
    </div>
  );
};

export default Labels;

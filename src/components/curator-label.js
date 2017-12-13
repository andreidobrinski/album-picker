import React from 'react';
import '../App.css';

const CuratorLabel = ({ curator }) => {
  return (
    <div className="label-box">
      <p className="label-text">
        {curator}
      </p>
    </div>
  );
};

export default CuratorLabel;

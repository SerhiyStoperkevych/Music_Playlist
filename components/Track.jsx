import React from 'react';

const Track = ({ track, isCurrent }) => {
  return (
    <div className={`track ${isCurrent ? 'current' : ''}`}>
      <span>{track.title}</span>
    </div>
  );
};

export default Track;

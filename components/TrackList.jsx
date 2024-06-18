import React from 'react';
import Track from './Track';

const TrackList = ({ tracks, currentTrackIndex }) => {
  return (
    <div className="track-list">
      {tracks.map((track, index) => (
        <Track 
          key={index}
          track={track}
          isCurrent={index === currentTrackIndex}
        />
      ))}
    </div>
  );
};

export default TrackList;

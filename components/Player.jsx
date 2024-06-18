import React, { useState, useRef } from 'react';
import Controls from './Controls';
import TrackList from './TrackList';

const Player = () => {
  const [tracks] = useState([
    { title: "Track 1", src: "/path/to/track1.mp3" },
    { title: "Track 2", src: "/path/to/track2.mp3" },
  ]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
    setIsPlaying(false);
  };

  return (
    <div className="player">
      <audio src={tracks[currentTrackIndex].src} ref={audioRef} />
      <h2>{tracks[currentTrackIndex].title}</h2>
      <Controls 
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <TrackList tracks={tracks} currentTrackIndex={currentTrackIndex} />
    </div>
  );
};

export default Player;

import React from 'react';

function playRandomSong() {
  // Replace this with the actual audio file paths
  const audioFiles = [
    'path/to/song1.mp3',
    'path/to/song2.mp3',
    // Add more song paths as needed
  ];

  // Get a random index to select a random song
  const randomIndex = Math.floor(Math.random() * audioFiles.length);

  // Create a new audio element
  const audio = new Audio(audioFiles[randomIndex]);

  // Play the selected song
  audio.play();
}

const MusicPlayer = () => {
  return (
    <div>
      <button onClick={playRandomSong}>Play Random Song</button>
      {/* Add more audio controls here if needed */}
    </div>
  );
};

export default MusicPlayer;

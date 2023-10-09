import React from 'react';

function playRandomSong(audioFiles) {
  if (!Array.isArray(audioFiles) || audioFiles.length === 0) {
    console.error('Invalid audioFiles array:', audioFiles);
    return; // Exit the function if audioFiles is not a valid array
  }

  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const selectedSong = audioFiles[randomIndex];

  if (!selectedSong) {
    console.error('No selected song found.');
    return; // Exit the function if selectedSong is undefined
  }

  const audio = new Audio(selectedSong);
  audio.play();

  // Log statements to check the function execution
  console.log('playRandomSong called with audioFiles:', audioFiles);
  console.log('Selected song:', selectedSong);
}

const colorSongs = {
  yellow: [
    '/src/music/happy/Feeling_Happy_FesliyanStudios.mp3',
    '/src/music/happy/Happy_Dreams_David_Fesliyan.mp3',
    '/src/music/happy/Happy_Feet_www.com.mp3',
    '/src/music/happy/Smilin_And_Vibin_.mp3',
  ],
  green: [
    '/src/music/sad/Emotional_Regret_.mp3',
    '/src/music/sad/Goodbye,_My_Friend_.mp3',
    '/src/music/sad/Lost_Souls.com.mp3',
    '/src/music/sad/Please_Dont_Cry_mp3.mp3',
  ],
  red: [
    '/src/music/happy/Feeling_Happy_FesliyanStudios.mp3', 
    '/src/music/happy/Happy_Dreams_David_Fesliyan.mp3', 
    '/src/music/happy/Happy_Feet_www.com.mp3', 
    '/src/music/happy/Smilin_And_Vibin_.mp3'
  ],
  blue: [
    '/src/music/sad/Emotional_Regret_.mp3',
    '/src/music/sad/Goodbye,_My_Friend_.mp3',
    '/src/music/sad/Lost_Souls.com.mp3',
    '/src/music/sad/Please_Dont_Cry_mp3.mp3'
  ],
  pink: [
    '/src/music/happy/Feeling_Happy_FesliyanStudios.mp3',
    '/src/music/happy/Happy_Dreams_David_Fesliyan.mp3',
    '/src/music/happy/Happy_Feet_www.com.mp3',
    '/src/music/happy/Smilin_And_Vibin_.mp3'
  ],
  purple: [
    '/src/music/sad/Emotional_Regret_.mp3',
    '/src/music/sad/Goodbye,_My_Friend_.mp3',
    '/src/music/sad/Lost_Souls.com.mp3',
    '/src/music/sad/Please_Dont_Cry_mp3.mp3'
  ],
  brown: [
    '/src/music/happy/Feeling_Happy_FesliyanStudios.mp3',
    '/src/music/happy/Happy_Dreams_David_Fesliyan.mp3',
    '/src/music/happy/Happy_Feet_www.com.mp3',
    '/src/music/happy/Smilin_And_Vibin_.mp3'
  ],
  orange: [
    '/src/music/sad/Emotional_Regret_.mp3',
    '/src/music/sad/Goodbye,_My_Friend_.mp3',
    '/src/music/sad/Lost_Souls.com.mp3',
    '/src/music/sad/Please_Dont_Cry_mp3.mp3'
  ],
  grey: [
    '/src/music/happy/Feeling_Happy_FesliyanStudios.mp3',
    '/src/music/happy/Happy_Dreams_David_Fesliyan.mp3',
    '/src/music/happy/Happy_Feet_www.com.mp3',
    '/src/music/happy/Smilin_And_Vibin_.mp3'
  ],
  aqua: [
    '/src/music/sad/Emotional_Regret_.mp3',
    '/src/music/sad/Goodbye,_My_Friend_.mp3',
    '/src/music/sad/Lost_Souls.com.mp3',
    '/src/music/sad/Please_Dont_Cry_mp3.mp3'
  ],
  white: [
    '/src/music/happy/Feeling_Happy_FesliyanStudios.mp3',
    '/src/music/happy/Happy_Dreams_David_Fesliyan.mp3',
    '/src/music/happy/Happy_Feet_www.com.mp3',
    '/src/music/happy/Smilin_And_Vibin_.mp3'
  ],
  // Add more colors and audio files as needed
};

const MusicPlayer = () => {
  
  return (
    <div>
      {Object.keys(colorSongs).map((color) => (
        <button
          key={color}
          onClick={() => playRandomSong(colorSongs[color])}
        >
          Play {color} Song
        </button>
      ))}
    </div>
  );
};

export { playRandomSong, colorSongs };
export default MusicPlayer;
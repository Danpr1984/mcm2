import React from 'react';
import MusicPlayer, { playRandomSong } from './MusicPlayer'; // Import the MusicPlayer component and the playRandomSong function


const colorSongs = {
  yellow: [
    'src/music/happy/Feeling_Happy_FesliyanStudios.mp3',
    'src/music/happy/Happy_Dreams_David_Fesliyan.mp3',
    'src/music/happy/Happy_Feet_www.com.mp3',
    'src/music/happy/Smilin_And_Vibin_.mp3',
  ],
  green: [
    'src/music/sad/Emotional_Regret_.mp3',
    'src/music/sad/Goodbye,_My_Friend_.mp3',
    'src/music/sad/Lost_Souls.com.mp3',
    'src/music/sad/Please_Dont_Cry_mp3.mp3',
  ],
  red: [
    'src/music/happy/Feeling_Happy_FesliyanStudios.mp3', 
    'src/music/happy/Happy_Dreams_David_Fesliyan.mp3', 
    'src/music/happy/Happy_Feet_www.com.mp3', 
    'src/music/happy/Smilin_And_Vibin_.mp3'
  ],
    blue: [
      'src/music/sad/Emotional_Regret_.mp3', 
      'src/music/sad/Goodbye,_My_Friend_.mp3', 
      'src/music/sad/Lost_Souls.com.mp3', 
      'src/music/sad/Please_Dont_Cry_mp3.mp3'
    ],
    pink: [
      'src/music/happy/Feeling_Happy_FesliyanStudios.mp3',
      'src/music/happy/Happy_Dreams_David_Fesliyan.mp3', 
      'src/music/happy/Happy_Feet_www.com.mp3', 
      'src/music/happy/Smilin_And_Vibin_.mp3'
    ],
    purple: [
      'src/music/sad/Emotional_Regret_.mp3', 
      'src/music/sad/Goodbye,_My_Friend_.mp3', 
      'src/music/sad/Lost_Souls.com.mp3', 
      'src/music/sad/Please_Dont_Cry_mp3.mp3'
    ],
    brown: [
      'src/music/happy/Feeling_Happy_FesliyanStudios.mp3', 
      'src/music/happy/Happy_Dreams_David_Fesliyan.mp3', 
      'src/music/happy/Happy_Feet_www.com.mp3', 
      'src/music/happy/Smilin_And_Vibin_.mp3'
    ],
    orange: [
      'src/music/sad/Emotional_Regret_.mp3', 
      'src/music/sad/Goodbye,_My_Friend_.mp3', 
      'src/music/sad/Lost_Souls.com.mp3', 
      'src/music/sad/Please_Dont_Cry_mp3.mp3'
    ],
    grey: [
      'src/music/happy/Feeling_Happy_FesliyanStudios.mp3', 
      'src/music/happy/Happy_Dreams_David_Fesliyan.mp3', 
      'src/music/happy/Happy_Feet_www.com.mp3', 
      'src/music/happy/Smilin_And_Vibin_.mp3'
    ],
    aqua: [
      'src/music/sad/Emotional_Regret_.mp3', 
      'src/music/sad/Goodbye,_My_Friend_.mp3', 
      'src/music/sad/Lost_Souls.com.mp3', 
      'src/music/sad/Please_Dont_Cry_mp3.mp3'
    ],
    white: [
      'src/music/happy/Feeling_Happy_FesliyanStudios.mp3', 
      'src/music/happy/Happy_Dreams_David_Fesliyan.mp3', 
      'src/music/happy/Happy_Feet_www.com.mp3', 
      'src/music/happy/Smilin_And_Vibin_.mp3'
    ],
  // Define songs for other colors as needed
};

const ColorWheel = () => {
  const colors = ['yellow', 'green', 'red', 'blue', 'pink', 'purple', 'brown', 'orange', 'grey', 'aqua', 'white'];
  const segmentAngle = (2 * Math.PI) / colors.length;

  // Function to play music when a color is clicked
  const handleColorClick = (color) => {
    const songsForColor = colorSongs[color];
    if (songsForColor && songsForColor.length > 0) {
      const randomIndex = Math.floor(Math.random() * songsForColor.length);
      const selectedSong = songsForColor[randomIndex];
      // Play the selected song using the MusicPlayer component
      MusicPlayer.playRandomSong(selectedSong);
    }
  };

  return (
    <div className="color-wheel-container">
      <svg width="400" height="400">
        <circle cx="200" cy="200" r="180" stroke="black" strokeWidth="2" fill="none" />

        {colors.map((color, index) => {
          const startAngle = index * segmentAngle;
          const endAngle = (index + 1) * segmentAngle;
          const x1 = 200 + 180 * Math.cos(startAngle);
          const y1 = 200 + 180 * Math.sin(startAngle);
          const x2 = 200 + 180 * Math.cos(endAngle);
          const y2 = 200 + 180 * Math.sin(endAngle);

          return (
            <polygon
              key={color}
              points={`200,200 ${x1},${y1} ${x2},${y2}`}
              fill={color}
              onClick={() => handleColorClick(color)} // Add the onClick handler here
            />
          );
        })}
      </svg>
      <MusicPlayer />
    </div>
  );
};

export default ColorWheel;

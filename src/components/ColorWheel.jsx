import React from 'react';
import MusicPlayer from './MusicPlayer';

const colorSongs = {
  yellow: ['src/music/happy/Feeling_Happy_FesliyanStudios.mp3', 'src/music/happy/Happy_Dreams_David_Fesliyan.mp3', 'src/music/happy/Happy_Feet_www.com.mp3', 'src/music/happy/Smilin_And_Vibin_.mp3'],
  grey: ['src/music/sad/Emotional_Regret_.mp3', 'src/music/sad/Goodbye,_My_Friend_.mp3', 'src/music/sad/Lost_Souls.com.mp3', 'src/music/sad/Please_Dont_Cry_mp3.mp3'],
  // Define songs for other colors as needed
};

const ColorWheel = () => {
  const colors = ['yellow', 'green', 'red', 'blue', 'pink', 'purple', 'brown', 'orange', 'grey', 'aqua', 'terracotta'];
  const segmentAngle = (2 * Math.PI) / colors.length;

  const playSong = (song) => {
    // Implement logic to play the song (you can use the MusicPlayer component)
    console.log(`Playing song: ${song}`);
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

          // Define an onClick handler to play a random song for each color
          const handleColorClick = () => {
            const songsForColor = colorSongs[color];
            if (songsForColor && songsForColor.length > 0) {
              const randomIndex = Math.floor(Math.random() * songsForColor.length);
              const selectedSong = songsForColor[randomIndex];
              // Play the selected song (you can implement this logic using your MusicPlayer component)
              playSong(selectedSong);
            }
          };

          return (
            <polygon
              key={color}
              points={`200,200 ${x1},${y1} ${x2},${y2}`}
              fill={color}
              onClick={handleColorClick} // Add the onClick handler here
            />
          );
        })}
      </svg>
      <MusicPlayer />
    </div>
  );
};

export default ColorWheel;

import React, { useState } from 'react';
import './Colors.css';
import { colorSongs } from '/workspace/mcm/src/components/MusicPlayer.jsx';

const ColorWheel = () => {
  const colors = [
    'yellow',
    'green',
    'red',
    'blue',
    'pink',
    'purple',
    'brown',
    'orange',
    'grey',
    'aqua',
    'white',
  ];
  const segmentAngle = (2 * Math.PI) / colors.length;

  const [currentAudio, setCurrentAudio] = useState(null);

  const handleColorClick = (color) => {
    const songsForColor = colorSongs[color];
    if (songsForColor && songsForColor.length > 0) {
      if (currentAudio) {
        currentAudio.pause();
      }
      const randomIndex = Math.floor(Math.random() * songsForColor.length);
      const selectedSong = songsForColor[randomIndex];
      const audio = new Audio(selectedSong);
      audio.play();
      setCurrentAudio(audio);
    }
  };

  return (
    <div className="color-wheel-container">
      <div className="center-container">
        <svg width="500" height="500">
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
                onClick={() => handleColorClick(color)}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default ColorWheel;
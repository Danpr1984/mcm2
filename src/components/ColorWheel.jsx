import React, { useState } from 'react';

import './Colors.css';
import { colorSongs } from '/Users/danielporras/mcm/src/components/MusicPlayer.jsx';
import { musicPlaylists } from '/Users/danielporras/mcm/src/components/MusicData.jsx';

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

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const playRandomSong = (audioFiles) => {
    if (!Array.isArray(audioFiles) || audioFiles.length === 0) {
      console.error('Invalid audioFiles array:', audioFiles);
      return;
    }

    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const selectedSong = audioFiles[randomIndex];

    if (!selectedSong) {
      console.error('No selected song found.');
      return;
    }

    const audio = new Audio(selectedSong.url);
    audio.play();
  };

  const handleColorClick = (color) => {
    const audioFiles = colorSongs[color];
    playRandomSong(audioFiles);
  };

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    setSelectedColor(null);
  };

  const handleAssignColorClick = (song) => {
    setSelectedColor(song);
  };

  const handleColorAssign = (color) => {
    if (selectedColor) {
      // Assign the selected color to the selected song
      console.log(`Assigning color ${color} to song ${selectedColor.name}`);
      setSelectedColor(null);
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
      <div className="genre-menu">
        <h2>Genres</h2>
        <ul>
          {Object.keys(musicPlaylists).map((genre) => (
            <li key={genre} onClick={() => handleGenreClick(genre)}>
              {genre}
              {selectedGenre === genre && (
                <div className="song-info">
                  <ul>
                    {musicPlaylists[genre].map((song, index) => (
                      <li key={index}>
                        {song.name}
                        <button onClick={() => playRandomSong([song])}>Play</button>
                        <button onClick={() => handleAssignColorClick(song)}>Assign Color</button>
                        {selectedColor === song && (
                          <div className="color-dropdown">
                            {colors.map((color) => (
                              <div
                                key={color}
                                className={`color-option ${color}`}
                                onClick={() => handleColorAssign(color)}
                              />
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorWheel;
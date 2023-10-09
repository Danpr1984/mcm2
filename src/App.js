import React from 'react';
import ColorWheel from '/workspace/mcm/src/components/ColorWheel.jsx';
import { playRandomSong } from '/workspace/mcm/src/components/MusicPlayer.jsx';

const App = () => {
  return (
    <div>
      <h1>Color Songs</h1>
      <ColorWheel />
      <button onClick={() => playRandomSong(['src/music/happy/Feeling_Happy_FesliyanStudios.mp3'])}>
        Play Single Song
      </button>
    </div>
  );
};

export default App;
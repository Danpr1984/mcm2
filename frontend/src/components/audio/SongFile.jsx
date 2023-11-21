import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

const SongFile = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <p>{track.track.name || "No name"}</p>
      {/* <button onClick={(event) => handleAssignColorClick(event, track)}>
        Assign Color
      </button> */}
      <AudioPlayer
        track={track.track}
        isPlaying={isPlaying}
        onPlay={() => setIsPlaying((prev) => !prev)}
      />
    </div>
  );
};

export default SongFile;

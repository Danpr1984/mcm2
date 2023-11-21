import { useContext, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { ColorContext } from "../../context/ColorContext";

const SongFile = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { setAssignTrack } = useContext(ColorContext);

  return (
    <div>
      <p>{track.track.name || "No name"}</p>
      <button onClick={() => setAssignTrack(track)}>Assign Color</button>
      <AudioPlayer
        track={track.track}
        isPlaying={isPlaying}
        onPlay={() => setIsPlaying((prev) => !prev)}
      />
    </div>
  );
};

export default SongFile;

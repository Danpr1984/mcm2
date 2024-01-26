import { useContext, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { ColorContext } from "../../context/ColorContext";

const SongFile = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { setAssignTrack } = useContext(ColorContext);

  return (
    <div>
      <p>{track.track.name || "No name"}</p>
      <button
        className="m-1 rounded bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-700"
        onClick={() => setAssignTrack(track)}
      >
        Assign Color
      </button>
      <AudioPlayer
        track={track.track}
        isPlaying={isPlaying}
        onPlay={() => setIsPlaying((prev) => !prev)}
      />
    </div>
  );
};

export default SongFile;

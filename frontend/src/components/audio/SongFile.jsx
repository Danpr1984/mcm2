import { useContext, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { ColorContext } from "../../context/ColorContext";
import SongPreviewItem from "../SongPreviewItem";
import { FaQuestion } from "react-icons/fa";
import TestAudioLayout from "./TestAudioLayout";

const SongFile = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { setAssignTrack } = useContext(ColorContext);

  return (
    <div>
      <p>{track.track.name || "No name"}</p>
      {/* <button
        className="m-1 rounded bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-700"
        onClick={() => setAssignTrack(track)}
      >
        Assign Color
      </button> */}

      <div className="flex gap-2">
        <TestAudioLayout />

        <AudioPlayer
          track={track.track}
          isPlaying={isPlaying}
          onPlay={() => setIsPlaying((prev) => !prev)}
        />
        <div className="flex aspect-square h-12 items-center justify-center rounded-full border border-slate-950 bg-slate-200 bg-opacity-80 bg-clip-padding backdrop-blur-md backdrop-filter">
          <FaQuestion />
        </div>
      </div>
    </div>
  );
};

export default SongFile;

import { useContext, useEffect, useState } from "react";
import { AudioContext } from "../context/AudioContext";
import AudioPlayer from "./audio/AudioPlayer";
import { motion } from "framer-motion";
import { opacityScaleChild, staggerContainer } from "../animations/containers";

const COLORS = [
  "yellow",
  "orange",
  "red",
  "green",
  "skyblue",
  "blue",
  "gray",
  "black",
];

const AssignedSongs = () => {
  const { userSongs } = useContext(AudioContext);
  const [assignedColor, setAssignedColor] = useState("");
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    setFilteredSongs(userSongs);
  }, [userSongs]);

  console.log(userSongs);

  const handleColorAssign = async (color) => {
    setAssignedColor(color);
    const newfilteredSongs = userSongs.filter((item) => item.color === color);

    setFilteredSongs(newfilteredSongs);
  };

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center">
      <h1 className="mt-5 text-xl font-bold text-indigo-600">
        Your Assigned Songs
      </h1>
      <div className="flex gap-2">
        <motion.ul
          className="mx-auto my-5 flex items-center justify-center gap-1"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {COLORS.map((color, index) => (
            <motion.button
              key={index}
              onClick={() => handleColorAssign(color)}
              variants={opacityScaleChild}
              whileFocus={{ scale: 1.1 }}
              whileHover={{ scale: 1.1 }}
              className={`${color} h-10 w-10 rounded-full border border-black/30 shadow-md `}
            ></motion.button>
          ))}
        </motion.ul>
      </div>

      <div
        className={`no-scrollbar container max-h-96 overflow-scroll rounded-lg border border-indigo-200 p-4 ${assignedColor}`}
      >
        {filteredSongs?.map((item, index) => {
          const { song, color } = item;
          return (
            <div
              className="flex cursor-pointer border-b px-2 py-3 hover:shadow-md"
              key={index}
            >
              <img
                className="h-10 w-10 rounded-lg object-cover"
                alt="track album cover"
                src={song.image}
              />
              <div className="flex w-full flex-col px-2">
                <span className="pt-1 text-sm font-semibold capitalize text-red-500">
                  {song.name || "No name"}
                </span>
                <span className="text-xs font-medium uppercase text-gray-500 ">
                  -{song.artist}
                </span>
              </div>
              <AudioPlayer track={song} />
              <div
                className={`${color} flex aspect-square h-12 items-center justify-center rounded-full border border-slate-950 bg-opacity-80 bg-clip-padding backdrop-blur-md backdrop-filter`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssignedSongs;

import React, { useContext } from "react";
import Playlist from "./audio/Playlist.jsx";
import { AudioContext } from "../context/AudioContext.jsx";

function Library({ token }) {
  if (!token) return;
  const { playlists } = useContext(AudioContext);

  return (
    <div className="flex flex-col">
      <div className="text-center">
        <h1 className=" my-5 text-xl font-bold text-indigo-600">
          Select a playlist
        </h1>
        <hr className="my-5" />
        <div className="grid w-full justify-center gap-3 md:grid-cols-3">
          {playlists?.map((playlist, index) => (
            <Playlist playlist={playlist} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;

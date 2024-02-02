import React, { useContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Playlist from "./audio/Playlist.jsx";
import { ColorContext } from "../context/ColorContext.jsx";
import { AudioContext } from "../context/AudioContext.jsx";

function Library({ token }) {
  if (!token) return;
  const { playlists } = useContext(AudioContext);
  const { assignTrack } = useContext(ColorContext);

  const handleColorAssign = async (color) => {
    if (!assignTrack) return;
    const colorData = {
      color: color,
      track: assignTrack,
    };

    const cookie = Cookies.get("csrftoken");
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": cookie,
      },
    };
    const body = JSON.stringify(colorData);

    const response = await axios.post(
      "http://localhost:8000/api/assign_color_to_song/",
      body,
      config,
    );
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 overflow-hidden rounded-lg border-2 border-slate-900">
        {assignTrack &&
          colors.map((color) => (
            <div
              key={color.id}
              className="p-8"
              style={{ backgroundColor: color.name }}
              onClick={() => handleColorAssign(color)}
            />
          ))}
      </div>
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

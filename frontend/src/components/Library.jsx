import React, { useState, useEffect, useContext } from "react";
import APIKit from "./spotify.js";
import { colors } from "./ColorWheel.jsx";
import AudioPlayer from "./audio/AudioPlayer.jsx";
import Cookies from "js-cookie";
import axios from "axios";
import Playlist from "./audio/Playlist.jsx";
import { ColorContext } from "../context/ColorContext.jsx";

function Library({ token }) {
  if (!token) return;
  const [playlists, setPlaylists] = useState(null);
  const { assignTrack } = useContext(ColorContext);

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists = async () => {
    try {
      const response = await APIKit.get("me/playlists");

      const playlists = response.data.items;
      const promises = playlists.map((playlist) =>
        APIKit.get(playlist.tracks.href).then((response) => {
          playlist.tracks.items = response.data.items;
          return playlist;
        }),
      );
      const playlistsWithTracks = await Promise.all(promises);
      setPlaylists(playlistsWithTracks);
    } catch (error) {
      console.error("Error fetching playlists or tracks:", error);
    }
  };

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
      <div className="flex w-full justify-center gap-3">
        {playlists?.map((playlist, index) => (
          <Playlist playlist={playlist} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Library;

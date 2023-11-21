import React, { useState, useEffect } from "react";
import APIKit from "./spotify.js";
import { colors } from "./ColorWheel.jsx";
import AudioPlayer from "./audio/AudioPlayer.jsx";
import Cookies from "js-cookie";
import axios from "axios";
import Playlist from "./audio/Playlist.jsx";

function Library({ token }) {
  if (!token) return;
  const [playlists, setPlaylists] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tracks, setTracks] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userSavedSongs, setUserSavedSongs] = useState();

  useEffect(() => {
    fetchPlaylists();
  }, []);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

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

  const handlePlaylistClick = (playlistId) => {
    setSelectedPlaylist((prevPlaylistId) =>
      prevPlaylistId === playlistId ? null : playlistId,
    );
  };

  const handleAssignColorClick = (event, track) => {
    event.stopPropagation();
    setSelectedTrack(track); // Set the selected track
  };

  const handleColorAssign = async (color) => {
    if (!selectedTrack) return;
    const colorData = {
      color: color,
      track: selectedTrack,
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
        {colors.map((color) => (
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

import { createContext, useEffect, useState } from "react";

import APIKit from "../components/spotify.js";
import {
  colorAssign,
  fetchUserSongs,
  reassignColor,
  removeSong,
} from "../routes/api.js";
import { AuthContext } from "./AuthContext.jsx";
import { useContext } from "react";
import { baseURLClient } from "../App.jsx";

export const AudioContext = createContext({
  assignTrack: "",
  setAssignTrack: () => {},
  setPlaylists: () => {},
  playlists: null,
  userSongs: [],
  setUserSongs: () => {},
  loadUserSongs: () => {},
  handleRemoveSong: () => {},
  handleColorReAssign: () => {},
  handleColorAssign: () => {},
  songError: "",
  loadingSongs: false,
  setLoadingSongs: () => {},
});

export default function AudioContextProvider({ children }) {
  const [assignTrack, setAssignTrack] = useState("");
  const [userSongs, setUserSongs] = useState([]);
  const [userImage, setUserImage] = useState("/images/colourwheel.png");
  const [playlists, setPlaylists] = useState(null);
  const [songError, setSongError] = useState(null);
  const [loadingSongs, setLoadingSongs] = useState(false);
  const { getCSRF } = useContext(AuthContext);

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists = async () => {
    try {
      const response = await APIKit.get("me/playlists");
      const userResponse = await APIKit.get("me");
      setUserImage(userResponse.data.images[0].url);

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
      window.localStorage.removeItem("token");
    }
  };

  const loadUserSongs = async () => {
    try {
      const songs = await fetchUserSongs(csrfToken);
      setUserSongs(songs);
      setLoadingSongs(false);
    } catch (error) {
      setSongError(error.message);
      setLoadingSongs(false);
    }
  };

  const handleRemoveSong = async (song) => {
    try {
      const csrfToken = await getCSRF();
      baseURLClient.defaults.headers["X-CSRFToken"] = csrfToken;
      await removeSong(song);
    } catch (error) {
      setSongError(error.message);
    }
    loadUserSongs();
  };

  const handleColorReAssign = async (color) => {
    const colorData = {
      color: color,
      track: assignTrack,
    };
    try {
      const csrfToken = await getCSRF();
      baseURLClient.defaults.headers["X-CSRFToken"] = csrfToken;
      await reassignColor(colorData);
    } catch (error) {
      setSongError(error.message);
    }
    loadUserSongs();
  };

  const handleColorAssign = async (color) => {
    const colorData = {
      color: color,
      track: assignTrack,
    };

    try {
      const csrfToken = await getCSRF();
      baseURLClient.defaults.headers["X-CSRFToken"] = csrfToken;
      await colorAssign(colorData);
    } catch (error) {
      setSongError(error.message);
    }
    loadUserSongs();
  };

  const value = {
    assignTrack,
    setAssignTrack,
    playlists,
    setPlaylists,
    userImage,
    userSongs,
    setUserSongs,
    loadUserSongs,
    handleRemoveSong,
    handleColorReAssign,
    handleColorAssign,
    loadingSongs,
    setLoadingSongs,
    songError,
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}

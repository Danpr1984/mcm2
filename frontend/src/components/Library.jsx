import React, { useContext, useEffect } from "react";
import Playlist from "./audio/Playlist.jsx";
import { AudioContext } from "../context/AudioContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import AudioPlayer from "./audio/AudioPlayer.jsx";
import PlayWheel from "./PlayWheel.jsx";
import AssignedSongs from "./AssignedSongs.jsx";

function Library({ token }) {
  if (!token) return;
  const { playlists, setUserSongs, userSongs } = useContext(AudioContext);
  const { getCSRF } = useContext(AuthContext);

  const fetchUserSongs = async () => {
    const csrf = await getCSRF();

    try {
      const response = await fetch("http://localhost:8000/api/user_songs/", {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrf,
        },
        credentials: "include",
      });

      const { user_songs } = await response.json();
      setUserSongs(user_songs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserSongs();
  }, []);

  return (
    <div className="p-2">
      <div className="flex justify-center">
        <PlayWheel />
      </div>
      <AssignedSongs />

      <div className="mx-auto my-2 max-w-5xl rounded-lg border border-indigo-200 p-4 text-center">
        <h2 className=" my-5 text-xl font-bold text-indigo-600">
          Select a playlist
        </h2>
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

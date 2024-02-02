import React, { useContext, useEffect } from "react";
import Playlist from "./audio/Playlist.jsx";
import { AudioContext } from "../context/AudioContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import AudioPlayer from "./audio/AudioPlayer.jsx";

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
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" my-5 text-xl font-bold text-indigo-600">
          Your Assigned Songs
        </h1>

        <div className="container">
          {userSongs?.map((item, index) => {
            const { song, color } = item;

            console.log(song);

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
                  className="flex aspect-square h-12 items-center justify-center rounded-full border border-slate-950 bg-opacity-80 bg-clip-padding backdrop-blur-md backdrop-filter"
                  style={{ background: color.name }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center">
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

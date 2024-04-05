import React, { useContext, useEffect } from "react";
import Playlist from "./audio/Playlist.jsx";
import { AudioContext } from "../context/AudioContext.jsx";
import PlayWheel from "./PlayWheel.jsx";
import AssignedSongs from "./AssignedSongs.jsx";
import {} from "../routes/api.js";
import LoadingSpinner from "./ui/LoadingSpinner.jsx";

function Library({ token }) {
  if (!token) return;
  const { playlists, loadUserSongs, loadingSongs, songError } =
    useContext(AudioContext);

  useEffect(() => {
    loadUserSongs();
  }, []);

  if (loadingSongs) return <LoadingSpinner />;

  return (
    <div className="p-2">
      {songError ? (
        <h1 className="text-center text-2xl text-red-700">
          Error: {songError}
        </h1>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default Library;

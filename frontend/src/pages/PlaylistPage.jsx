import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AudioContext } from "../context/AudioContext";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { generatePlaylistSlug } from "../components/audio/Playlist";
import ColorWheel from "../components/ColorWheel";
import AudioLayout from "../components/audio/AudioLayout";

const PlaylistPage = () => {
  const { slug } = useParams();
  const { playlists } = useContext(AudioContext);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const { loadUserSongs, loadingSongs, songError, setAssignTrack } =
    useContext(AudioContext);

  useEffect(() => {
    if (!playlists) return;
    const selectedPlaylist = playlists.find(
      (playlist) => generatePlaylistSlug(playlist.name) === slug,
    );
    setSelectedPlaylist(selectedPlaylist);
    setAssignTrack(selectedPlaylist.tracks.items[0].track);
  }, [slug, playlists]);

  useEffect(() => {
    loadUserSongs();
  }, []);

  if (loadingSongs) return <LoadingSpinner />;

  return (
    <div className="h-[calc(100vh-64px)]">
      {songError ? (
        <h1 className="text-center text-2xl text-red-700">
          Error: {songError}
        </h1>
      ) : (
        <div className="my-3 flex flex-col items-center justify-center">
          <ColorWheel />
          <p className="my-2 font-medium uppercase text-gray-700">
            Select A Colour to assign to playing song
          </p>

          {selectedPlaylist ? (
            <AudioLayout tracks={selectedPlaylist.tracks.items} />
          ) : (
            <LoadingSpinner />
          )}
        </div>
      )}
    </div>
  );
};

export default PlaylistPage;

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AudioContext } from "../context/AudioContext";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { generatePlaylistSlug } from "../components/audio/Playlist";
import SongFile from "../components/audio/SongFile";
import ColorWheel from "../components/ColorWheel";
import TestAudioLayout from "../components/audio/TestAudioLayout";

const PlaylistPage = () => {
  const { slug } = useParams();
  const { playlists } = useContext(AudioContext);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  useEffect(() => {
    if (!playlists) return;
    const selectedPlaylist = playlists.find(
      (playlist) => generatePlaylistSlug(playlist.name) === slug,
    );
    setSelectedPlaylist(selectedPlaylist);
  }, [slug, playlists]);

  return (
    <div className="h-[calc(100vh-64px)]">
      <div className="my-3 flex flex-col items-center justify-center">
        <ColorWheel />
        <p className="my-2 font-medium uppercase text-gray-700">
          Select A Colour to assign to playing song
        </p>

        {selectedPlaylist ? (
          <TestAudioLayout tracks={selectedPlaylist.tracks.items} />
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

export default PlaylistPage;

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AudioContext } from "../context/AudioContext";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { generatePlaylistSlug } from "../components/audio/Playlist";

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
    <div className="flex h-[calc(100vh-64px)] items-center justify-center">
      {selectedPlaylist ? (
        <h2>Playlist Details for {slug}</h2>
      ) : (
        <LoadingSpinner />
      )}
      {/* Add more content for displaying playlist details */}
    </div>
  );
};

export default PlaylistPage;

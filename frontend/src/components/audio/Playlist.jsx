import { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import SongFile from "./SongFile";

const Playlist = ({ playlist }) => {
  const [openPLaylist, setOpenPlaylist] = useState(false);

  return (
    <div onClick={() => setOpenPlaylist((prev) => !prev)}>
      <img
        src={playlist.images[0].url}
        className="h-40 w-40 rounded-lg shadow-lg"
        alt="Playlist-Art"
      />
      {openPLaylist && (
        <div className="playlist-songs">
          {playlist.tracks.items.map((track, index) => (
            <SongFile track={track} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Playlist;

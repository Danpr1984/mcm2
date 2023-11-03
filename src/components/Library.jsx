import React, { useState, useEffect } from "react";
import APIKit from "/Users/danielporras/mcm/src/components/spotify.js";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import ColorWheel, { colors } from '/Users/danielporras/mcm/src/components/ColorWheel.jsx';
import AudioPlayer from "/Users/danielporras/mcm/src/components/audioPlayer.jsx";

function Library() {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [isAssigningColor, setIsAssigningColor] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [tracks, setTracks] = useState([]);
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioPlayers, setAudioPlayers] = useState([]);


  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      console.log('Playlists:', response.data.items);
      const playlists = response.data.items;
      const promises = playlists.map(playlist =>
        APIKit.get(playlist.tracks.href).then(response => {
          playlist.tracks.items = response.data.items; // Add the tracks to the playlist
          return playlist;
        }).catch(error => {
          console.error('Error fetching tracks:', error);
        })
      );
      Promise.all(promises).then(playlistsWithTracks => {
        setPlaylists(playlistsWithTracks);
      }).catch(error => {
        console.error('Error fetching playlists or tracks:', error);
      });
    }).catch(error => {
      console.error('Error fetching playlists:', error);
    });
  }, []);

  useEffect(() => {
    console.log('location.state:', location.state); // Log location.state
    console.log('location.state?.id:', location.state?.id); // Log location.state?.id
    if (location.state) {
      APIKit
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        })
        .catch(error => {
          console.error('Error fetching tracks:', error); // Log any errors
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  const navigate = useNavigate();

  const handlePlaylistClick = (playlistId) => {
    setSelectedPlaylist(prevPlaylistId => prevPlaylistId === playlistId ? null : playlistId);
  };

  const handleAssignColorClick = (trackId) => {
    setSelectedTrack(prevTrackId => prevTrackId === trackId ? null : trackId);
  };

  const handleColorAssign = (color) => {
    if (selectedTrack) {
      // Assign the selected color to the selected track
      console.log(`Assigning color ${color} to track ${selectedTrack}`);
      setSelectedTrack(null);
    }
  };
  
  const handlePlaySong = (track, index) => {
    setCurrentTrack(track); // Set the current track when a song is played
    setCurrentIndex(index);
    setIsPlaying(true); // Start playing the song
  };

  return (
    <div className="sidebar-container">
      <div className="library-body">
        {playlists?.map((playlist) => (
          <div
            className={`playlist-card ${selectedPlaylist === playlist.id ? 'active' : ''}`}
            key={playlist.id}
            onClick={() => handlePlaylistClick(playlist.id)}
          >
            {playlist.images && playlist.images[0] && (
              <img
                src={playlist.images[0].url}
                className="playlist-image"
                alt="Playlist-Art"
              />
            )}
            <div className="playlist-songs">
              {selectedPlaylist === playlist.id && playlist.tracks.items && playlist.tracks.items.map((track, index) => (
                <div key={index}>
                  <p>{track.track.name || 'No name'}</p>
                  <button onClick={() => handleAssignColorClick(track.track.id)}>Assign Color</button>
                  {selectedTrack === track.track.id && (
                    <div className="color-assignment-panel">
                      {colors.map((color) => (
                        <div
                          key={color}
                          className="color-square"
                          style={{ backgroundColor: color }}
                          onClick={() => handleColorAssign(color)}
                        />
                      ))}
                    </div>
                  )}
                  <button onClick={() => handlePlaySong(track.track, index)}>Play</button>
                  <AudioPlayer
                    currentTrack={track.track}
                    total={playlist.tracks.items}
                    currentIndex={index}
                    setCurrentIndex={setCurrentIndex}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
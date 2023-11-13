import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import APIKit from "./spotify.js";
import { useNavigate, useLocation } from "react-router-dom";
import ColorWheel, { colors } from "./ColorWheel.jsx";
import AudioPlayer from "./audioPlayer.jsx";
import UserContext from "../UserContext.jsx";

function Library() {
  const [openColorPanels, setOpenColorPanels] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tracks, setTracks] = useState([]);
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState("");
  const { user } = useContext(UserContext);
  const [songColors, setSongColors] = useState({});
  const [testingAudioSave, setTestingAudioSave] = useState();

  useEffect(() => {
    fetchPlaylists();
  }, []);

  useEffect(() => {
    if (location.state) {
      fetchTracks(location.state?.id);
    }
  }, [location.state]);

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
        })
      );
      const playlistsWithTracks = await Promise.all(promises);
      setPlaylists(playlistsWithTracks);
    } catch (error) {
      console.error("Error fetching playlists or tracks:", error);
    }
  };

  

  const fetchTrackFeatures = async (trackId) => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/audio-features/${trackId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });

      console.log('Response data:', response.data);

      return response.data;
    } catch (error) {
      console.error('Error fetching track features:', error);
      throw error;
    }
  };


  const fetchTracks = async (playlistId) => {
    try {
      const res = await APIKit.get("playlists/" + playlistId + "/tracks");
      setTracks(res.data.items);
      setCurrentTrack(res.data?.items[0]?.track);

      // Save the tracks to your database
      for (const item of res.data.items) {
        const track = item.track;
        let features;
        try {
          features = await fetchTrackFeatures(track.id); 
          console.log(features);
        } catch (error) {
          console.error('Error fetching features for track:', track.id);
        }
        await axios.post(
          "http://localhost:8000/api/songs/",
          {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            duration: track.duration_ms,
            image: track.album.images[0].url,
            features: features // Save the features to your database
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        // Verify that the song was stored correctly
        const response = await axios.get(
          `http://localhost:8000/api/songs/${track.id}`
        );
        console.log("Stored song:", response.data.song);
      }
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  };


  const handlePlaylistClick = (playlistId) => {
    setSelectedPlaylist((prevPlaylistId) =>
      prevPlaylistId === playlistId ? null : playlistId
    );
  };

  // const assignColorToSong = async (userId, colorId, songId) => {
  //   const response = await fetch(
  //     "http://localhost:8000/api/assign_color_to_song/",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`, // Get the token from local storage
  //       },
  //       body: JSON.stringify({
  //         user_id: userId,
  //         color_id: colorId,
  //         song_id: songId,
  //       }),
  //     }
  //   );

  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }

  //   const data = await response.json();
  //   console.log(
  //     `Assigned color with ID ${colorId} to song with ID ${songId} for user with ID ${userId}`
  //   );
  //   console.log(data);

  //   // Update the songColors state variable
  //   setSongColors((prevSongColors) => ({
  //     ...prevSongColors,
  //     [songId]: colorId,
  //   }));
  // };

  const handleAssignColorClick = (event, track) => {
    event.stopPropagation();
    setSelectedTrack(track); // Set the selected track
    // console.log(track.track.id);
    // setOpenColorPanels((prevState) => {
    //   console.log(prevState);
    //   if (prevState.includes(track.track.id)) {
    //     return prevState.filter(
    //       (prevTrack) => prevTrack.id.id !== track.track.id
    //     );
    //   } else {
    //     // Otherwise, open it
    //     return [...prevState, track];
    //   }
    // });
  };

  const handleColorAssign = async (color) => {
    // console.log(
    //   "handleColorAssign called with color:",
    //   color,
    //   "and selectedTrack:",
    //   selectedTrack
    // );
    if (!selectedTrack) return;

    // USER IS NULL DUE TO CONTEXT ISSUES
    const data = {
      color: color,
      track: selectedTrack,
    };
    setTestingAudioSave(data);

    // await assignColorToSong(userId, colorId, songId);

    // Save the color ID to the database
    //   axios
    //     .post(
    //       "/api/colors",
    //       { colorId: color.id },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         },
    //       }
    //     )
    //     .then((response) => {
    //       console.log("Color ID saved successfully");
    //     })
    //     .catch((error) => {
    //       console.error("Error saving color ID:", error);
    //     });

    //   // Update the songColors state variable
    //   setSongColors((prevSongColors) => ({
    //     ...prevSongColors,
    //     [colorId]: [...(prevSongColors[colorId] || []), songId],
    //   }));
    //   setSelectedTrack(null);
    // }
  };

  console.log(testingAudioSave);

  const handlePlaySong = (track, index) => {
    setCurrentTrack(track);
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  console.log(testingAudioSave);

  return (
    <>
      <h1 style={{ fontFamily: "'Raleway', sans-serif" }}>Mood, Music & Color Wheel</h1>
      {testingAudioSave && (
        <>
          <p>{testingAudioSave.color.name}</p>
          <AudioPlayer
            track={testingAudioSave.track.track}
            // isPlaying={isPlaying && currentTrack === track.track.id}
            onPlay={() => handlePlaySong(testingAudioSave.track.track, 1)}
          />
        </>
      )}
      <div className="sidebar-container">
        <div className="library-body">
          {playlists?.map((playlist) => (
            <div
              className={`playlist-card ${
                selectedPlaylist === playlist.id ? "active" : ""
              }`}
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
                {selectedPlaylist === playlist.id &&
                  playlist.tracks.items &&
                  playlist.tracks.items.map((track, index) => (
                    <div key={index}>
                      <p>{track.track.name || "No name"}</p>
                      <button
                        onClick={(event) =>
                          handleAssignColorClick(event, track)
                        }
                      >
                        Assign Color
                      </button>
                      <div className="color-assignment-panel">
                        {colors.map((color) => (
                          <div
                            key={color.id}
                            className="color-square"
                            style={{ backgroundColor: color.name }}
                            onClick={() => handleColorAssign(color)}
                          />
                        ))}
                      </div>
                      <AudioPlayer
                        track={track.track}
                        isPlaying={isPlaying && currentTrack === track.track.id}
                        onPlay={() => handlePlaySong(track.track, index)}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
        </>
  );
}

export default Library;
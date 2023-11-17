import { useContext, useEffect, useState } from "react";
import APIKit from "./spotify.js";
import SpotifyLogin from "../auth/SpotifyLogin";
import { AuthContext } from "../context/AuthContext.jsx";

const Dashboard = () => {
  const [playlists, setPlaylists] = useState(null);
  const { spotifyToken, setSpotifyToken } = useContext(AuthContext);

  if (!spotifyToken) return;

  const fetchPlaylists = async () => {
    const response = await fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: "Bearer " + spotifyToken,
      },
    });

    const data = await response.json();
    console.log(data);
  };

  fetchPlaylists();

  return (
    <>
      {/* {!token && <SpotifyLogin />} */}
      <div></div>
    </>
  );
};

export default Dashboard;

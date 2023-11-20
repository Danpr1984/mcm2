import { useContext, useEffect, useState } from "react";
import SpotifyLogin from "../auth/SpotifyLogin";
import { AuthContext } from "../context/AuthContext.jsx";
import Library from "./Library";
import { setClientToken } from "./spotify";

const Dashboard = () => {
  const { spotifyToken, setSpotifyToken } = useContext(AuthContext);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setSpotifyToken(_token);
      setClientToken(_token);
    } else {
      setSpotifyToken(token);
      setClientToken(token);
    }
  }, [spotifyToken]);

  return (
    <>{!spotifyToken ? <SpotifyLogin /> : <Library token={spotifyToken} />}</>
  );
};

export default Dashboard;

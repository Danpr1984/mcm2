import React, { useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "../components/LoginForm.jsx";
import Dashboard from "../components/Dashboard.jsx";
import Library from "../components/Library.jsx";
import { setClientToken } from "../components/spotify.js";
import SpotifyLogin from "../auth/SpotifyLogin.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import RegisterForm from "../auth/RegisterForm.jsx";

export const AccessTokenContext = createContext(null);

const Routing = () => {
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
    <Router>
      <Routes>
        {!spotifyToken && <Route path="/" element={<SpotifyLogin />} />}
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        <Route path="/dashboard" element={<Library token={spotifyToken} />} />
      </Routes>
    </Router>
  );
};

export default Routing;

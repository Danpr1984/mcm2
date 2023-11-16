import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from "../components/RegisterForm.jsx";
import { setClientToken } from "../components/spotify.js";
import SpotifyLogin from "../auth/SpotifyLogin.jsx";
import Library from "../components/Library.jsx";

export const AccessTokenContext = createContext(null);

const Routing = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, [token]);

  return (
    <AccessTokenContext.Provider value={token}>
      <Router>
        <Routes>
          {!token && <Route path="/" element={<SpotifyLogin />} />}
          {/* <Route path="/" element={<RegisterForm />} /> */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/library" element={<Library token={token} />} />
        </Routes>
      </Router>
    </AccessTokenContext.Provider>
  );
};

export default Routing;

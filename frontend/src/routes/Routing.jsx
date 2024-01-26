import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard.jsx";
import Library from "../components/Library.jsx";
import { setClientToken } from "../components/spotify.js";
import SpotifyLogin from "../auth/SpotifyLogin.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import RegisterForm from "../auth/RegisterForm.jsx";
import HomePage from "../pages/HomePage.jsx";
import PlaylistPage from "../pages/PlaylistPage.jsx";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/playlist/:slug" element={<PlaylistPage />} />
    </Routes>
  );
};

export default Routing;

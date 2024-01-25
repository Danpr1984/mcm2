import React, { useEffect, createContext, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "../components/LoginForm.jsx";
import Dashboard from "../components/Dashboard.jsx";
import Library from "../components/Library.jsx";
import { setClientToken } from "../components/spotify.js";
import SpotifyLogin from "../auth/SpotifyLogin.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import RegisterForm from "../auth/RegisterForm.jsx";
import HomePage from "../pages/HomePage.jsx";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Routing;

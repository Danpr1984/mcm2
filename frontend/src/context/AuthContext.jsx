import { createContext, useEffect, useState } from "react";
import { setClientToken } from "../components/spotify";

export const AuthContext = createContext({
  user: "",
  setUser: () => {},
  spotifyToken: "",
  setSpotifyToken: () => {},
});

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [spotifyToken, setSpotifyToken] = useState();

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

  const value = {
    user,
    setUser,
    setSpotifyToken,
    spotifyToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

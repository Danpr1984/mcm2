import { createContext, useState } from "react";

export const AuthContext = createContext({
  user: "",
  setUser: () => {},
  spotifyToken: "",
  setSpotifyToken: () => {},
});

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [spotifyToken, setSpotifyToken] = useState();

  const value = {
    user,
    setUser,
    setSpotifyToken,
    spotifyToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

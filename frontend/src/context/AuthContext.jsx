import { createContext, useEffect, useState } from "react";
import { setClientToken } from "../components/spotify";
import { baseURLClient, setAuthToken } from "../App";
import useLocationStorage from "../../hooks/useLocalStorage";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  loadingUser: true,
  setLoadingUser: () => {},
  spotifyToken: "",
  setSpotifyToken: () => {},
  whoami: async () => {},
  setUserAuthToken: () => {},
});

export default function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userAuthToken, setUserAuthToken] = useLocationStorage("access_token");
  const [loadingUser, setLoadingUser] = useState(true);
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
    whoami();
  }, [spotifyToken]);

  const whoami = async () => {
    try {
      if (!userAuthToken) {
        return;
      }
      setAuthToken(userAuthToken);

      const response = await baseURLClient.get("auth/user");

      if (response.status === 200) {
        setIsAuthenticated(true);
      }
      setLoadingUser(false);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    setSpotifyToken,
    spotifyToken,
    loadingUser,
    setLoadingUser,
    whoami,
    setUserAuthToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

import { createContext, useEffect, useState } from "react";
import { setClientToken } from "../components/spotify";

export const AuthContext = createContext({
  user: "",
  setUser: () => {},
  spotifyToken: "",
  setSpotifyToken: () => {},
  csrf: "",
  setCsrf: () => {},
  getCSRF: () => Promise,
});

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [spotifyToken, setSpotifyToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [csrf, setCsrf] = useState("");

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

  async function getCSRF() {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/csrf`, {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const csrfToken = response.headers.get("X-CSRFToken");
      setCsrf(csrfToken);
      return csrfToken;
    } catch (err) {
      console.error(err);
    }
  }

  const getSession = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/session`, {
        credentials: "include",
      });

      response.text().then(console.log); // Temporarily log the response text


      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.isAuthenticated) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        await getCSRF();
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    const asyncGetSession = async () => {
      await getSession();
      setLoading(false);
    };

    asyncGetSession();
  }, []);

  const whoami = () => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/whoami`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        const { user } = data;
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const value = {
    user,
    setUser,
    setSpotifyToken,
    spotifyToken,
    csrf,
    getCSRF,
    isAuthenticated,
    setIsAuthenticated,
    loading,
    whoami,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

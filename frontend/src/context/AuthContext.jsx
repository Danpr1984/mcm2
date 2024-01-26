import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
  }, [spotifyToken]);

  async function getCSRF() {
    try {
      const response = await fetch("http://localhost:8000/api/csrf", {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const csrfToken = response.headers.get("X-CSRFToken");
      setCsrf(csrfToken);
    } catch (err) {
      console.error(err);
    }
  }

  const getSession = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/session", {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.isAuthenticated) {
        setIsAuthenticated({ isAuthenticated: true });
      } else {
        setIsAuthenticated({ isAuthenticated: false });
        await getCSRF();
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const asyncGetSession = async () => {
      await getSession();
    };

    asyncGetSession();
  }, []);

  const whoami = () => {
    fetch("http://localhost:8000/api/whoami", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("You are logged in as: " + data.username);
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
  };

  return (
    <AuthContext.Provider value={value}>
      <button className="btn btn-primary mr-2" onClick={whoami}>
        WhoAmI
      </button>

      {children}
    </AuthContext.Provider>
  );
}

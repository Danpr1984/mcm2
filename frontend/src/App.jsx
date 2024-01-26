import { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AuthContextProvider, { AuthContext } from "./context/AuthContext";
import ColorContextProvider from "./context/ColorContext";
import HomePage from "./pages/HomePage";
import Routing from "./routes/Routing";
import { BrowserRouter } from "react-router-dom";
import SpotifyLogin from "./auth/SpotifyLogin";
import AudioContextProvider from "./context/AudioContext";

function App() {
  const { spotifyToken } = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <ColorContextProvider>
        <BrowserRouter>
          {spotifyToken ? (
            <AudioContextProvider>
              <header>
                <Navbar />
              </header>
              <main>
                <Routing />
              </main>
            </AudioContextProvider>
          ) : (
            <SpotifyLogin />
          )}
        </BrowserRouter>
      </ColorContextProvider>
    </AuthContextProvider>
  );
}

export default App;

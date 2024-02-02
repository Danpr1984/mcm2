import { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AuthContextProvider, { AuthContext } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import Routing from "./routes/Routing";
import { BrowserRouter } from "react-router-dom";
import SpotifyLogin from "./auth/SpotifyLogin";
import AudioContextProvider from "./context/AudioContext";

function App() {
  const { spotifyToken } = useContext(AuthContext);

  return (
    <AuthContextProvider>
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
    </AuthContextProvider>
  );
}

export default App;

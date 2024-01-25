import "./App.css";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContext";
import ColorContextProvider from "./context/ColorContext";
import HomePage from "./pages/HomePage";
import Routing from "./routes/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <AuthContextProvider>
      <ColorContextProvider>
        <BrowserRouter>
          <header>
            <Navbar />
          </header>
          <main>
            <Routing />
          </main>
        </BrowserRouter>
      </ColorContextProvider>
    </AuthContextProvider>
  );
}

export default App;

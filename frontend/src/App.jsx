import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import ColorContextProvider from "./context/ColorContext";
import Routing from "./routes/Routing";

function App() {
  return (
    <AuthContextProvider>
      <ColorContextProvider>
        <main className="w-100 flex min-h-screen items-center justify-center bg-violet-50">
          <Routing />
        </main>
      </ColorContextProvider>
    </AuthContextProvider>
  );
}

export default App;

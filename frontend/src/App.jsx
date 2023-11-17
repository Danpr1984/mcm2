import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import Routing from "./routes/Routing";

function App() {
  return (
    <AuthContextProvider>
      <main className="w-100 flex min-h-screen items-center justify-center bg-violet-50">
        <Routing />
      </main>
    </AuthContextProvider>
  );
}

export default App;

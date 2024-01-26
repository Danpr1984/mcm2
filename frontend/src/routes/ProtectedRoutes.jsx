import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const ProtectedRoutes = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  return (
    <>
      {loading && (
        <section className="flex h-[calc(100vh-64px)]  flex-1 items-center justify-center bg-indigo-600">
          <LoadingSpinner />
        </section>
      )}
      <>
        {!loading && (
          <> {!loading && isAuthenticated ? <Outlet /> : <Navigate to="/" />}</>
        )}
      </>
    </>
  );
};

export default ProtectedRoutes;

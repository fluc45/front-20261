import { Navigate, Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import useAuth from "../hooks/useAuth";

function Layout() {
  const { autenticado } = useAuth();

  return (
    <>
      {autenticado ? (
        <>
          <aside>
            <Sidebar />
          </aside>
          <main>
            <Outlet />
          </main>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Layout;

import { Navigate, Outlet } from 'react-router';
import Sidebar from "../components/Sidebar";
import { useAuthContext } from "../context/AuthContext";

function Layout() {
  const { autenticado } = useAuthContext

  return (
    <>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

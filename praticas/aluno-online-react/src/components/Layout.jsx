import Sidebar from "../components/Sidebar";
import { Outlet } from 'react-router';
import Topbar from "../components/Topbar";

function Layout() {
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

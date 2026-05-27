import Sidebar from "../components/Sidebar";
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

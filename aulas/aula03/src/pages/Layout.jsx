import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Layout(props) {
  return (
    <>
      <Sidebar />
      <main className="flex-1 p-4">
        <Topbar titulo={props.titulo} />
        <h2>{props.subtitulo}</h2>
        <section>
          {props.children}
        </section>
      </main>
    </>
  );
}

export default Layout;

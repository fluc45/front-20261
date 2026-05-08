import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Layout(props) {
  return (
    <>
      <Sidebar />
      <main className="flex-1 m-6">
        <Topbar titulo={props.titulo} />
        <h2 className="text-2xl font-bold mb-4">{props.subtitulo}</h2>
        <section>
          {props.children}
        </section>
      </main>
    </>
  );
}

export default Layout;

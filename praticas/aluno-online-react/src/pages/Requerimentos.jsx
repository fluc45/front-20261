import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Requerimentos() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 m-6">
        <Topbar />
        <h2 className="text-2xl font-bold mb-4">Faça solicitações online para a secretaria</h2>
        <section>
          <Card />
        </section>
      </main>
    </>
  );
}

export default Requerimentos;

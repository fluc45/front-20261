import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Notas() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 m-6">
        <Topbar />
        <h2 className="text-2xl font-bold mb-4">Histórico de Notas por Semestre</h2>
        <section>
          <Card />
          <Card />
        </section>
      </main>
    </>
  );
}

export default Notas;

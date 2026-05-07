import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Card";

function Faltas() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 m-6">
        <Topbar />
        <h2 className="text-2xl font-bold mb-4">Histórico de Faltas por Semestre</h2>
        <section>
          <Card />
          <Card />
        </section>
      </main>
    </>
  );
}

export default Faltas;

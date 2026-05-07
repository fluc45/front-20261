import Card from "../components/Card";
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

function Dashboard() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 m-6">
        <Topbar />
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao portal do aluno</h2>
        <section>
          <Card />
          <Card />
          <Card />
        </section>

      </main>
    </>
  );
}
export default Dashboard;

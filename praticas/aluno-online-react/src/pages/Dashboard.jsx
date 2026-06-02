import Card from "../components/Card";

function Dashboard() {

    const avisos =[
    "Inscrição para o projeto de extensão",
    "Eleição para o representante de turma"
  ];

  const datas = [
    "23/02 - Início do período letivo 2026-1",
    "25/04 - Prazo final para a aplicação da P1",
    "07/06 - Renovação de matrícula",
    "04/07 - Fim do período letivo 2026-1"
  ]

  const disciplinas = [
    "BI e Data Warehousing",
    "Construção de Frontend",
    "Devops"
  ]

  return (
    <section>
      <header>
        <h1>Olá, Aluno</h1>
        <p>Bem-vindo ao portal do aluno</p>
      </header>
      <Card titulo="Mural de Avisos" items={avisos} />
      <Card titulo="Calendário Acadêmico" items={datas} />
      <Card titulo="Minhas Disciplinas" items={disciplinas} />
    </section>
  );
}
export default Dashboard;

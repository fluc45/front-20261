import Tabela from "../components/Tabela";

function Faltas() {

  const colunas = ["Disciplina", "Total de Faltas", "% de Presença"];

  const materias = [
    { disciplina: "BI e Data Warehousing", faltas: 0, presenca: "100%" },
    { disciplina: "Construção de Frontend", faltas: 0, presenca: "100%" },
    { disciplina: "Manuntenção de Software e Devops", faltas: 0, presenca: "100%" },
  ];

  const colunas2 = ["Disciplina", "Total de Faltas", "% de Presença"];

  const materias2 = [
    { disciplina: "BI e Data Warehousing", faltas: 14, presenca: "100%" },
    { disciplina: "Construção de Backend", faltas: 5, presenca: "90%" },
    { disciplina: "Matéria", faltas: 8, presenca: "85%" },
  ];

  return (
    <section>
      <header>
        <h1>Minhas Faltas</h1>
        <p>Histórico de Faltas por Semestre</p>
      </header>
      <Tabela titulos={colunas} dados={materias} header="2026.1" />
      <Tabela titulos={colunas2} dados={materias2} header="2025.2" />
    </section>
  );
}

export default Faltas;

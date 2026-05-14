import Layout from "../components/Layout";
import Tabela from "../components/Tabela";

function Notas() {
  const colunas = ["Disciplina", "A1", "A2", "A3", "Menção"];

  const materias = [
    { disciplina: "BI e Data Warehousing", A1: 0, A2: 0, A3: 0, mencao: "SR" },
    { disciplina: "Construção de Frontend", A1: 0, A2: 0, A3: 0, mencao: "SR" },
    {
      disciplina: "Manuntenção de Software e Devops",
      A1: 0,
      A2: 0,
      A3: 0,
      mencao: "SR",
    },
  ];
  const colunas2 = ["Disciplina", "A1", "A2", "A3", "Menção"];

  const materias2 = [
    {
      disciplina: "BI e Data Warehousing",
      A1: 5.4,
      A2: 9.2,
      A3: 0,
      mencao: "MS",
    },
    {
      disciplina: "Construção de Backend",
      A1: 1.5,
      A2: 3.9,
      A3: 0,
      mencao: "II",
    },
    { disciplina: "Matéria", A1: 7.2, A2: 9.7, A3: 0, mencao: "MS" },
  ];

  return (
    <>
      <Layout titulo="Minhas Notas" subtitulo="Histórico de Notas por Semestre">
        <Tabela titulos={colunas} dados={materias} header="2026.1" />
        <Tabela titulos={colunas2} dados={materias2} header="2025.2" />
      </Layout>
    </>
  );
}

export default Notas;

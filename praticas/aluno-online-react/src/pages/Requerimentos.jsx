import { NavLink } from "react-router";
import Tabela from "../components/Tabela";

function Requerimentos() {
  const colunas = ["Tipo de Requerimento", "Data de Solicitação", "Situação"];
  const requerimento = [
    { titulo: "Revisão de Menção", data: "15/12/2025", sitaucao: "Indeferido" },
    {
      titulo: "Dispensa de Disciplina",
      data: "12/06/2025",
      sitaucao: "Indeferido",
    },
    {
      titulo: "Trancamento de Matrícula",
      data: "05/01/2024",
      sitaucao: "Deferido",
    },
    { titulo: "Mudança de Turno", data: "10/10/2023", sitaucao: "Deferido" },
  ];
  return (
    <section>
      <header>
        <h1>Meus Requerimentos</h1>
        <p>Faça solicitações online para a secretaria</p>
      </header>
      <Tabela titulos={colunas} dados={requerimento} />
      <NavLink to="/requerimentos/novo" className={linkClass}>
        Requerimentos
      </NavLink>
    </section>
  );
}

export default Requerimentos;

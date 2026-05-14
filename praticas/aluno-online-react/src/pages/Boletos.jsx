import Layout from "../components/Layout";
import Tabela from "../components/Tabela";

function Boletos() {
  const colunas = ["Vencimento", "Valor R$", "Situação"];

  const mes = [
    { vencimento: "19/01/2026", valor: "500,00", sitauacao: "Pago" },
    { vencimento: "19/02/2026", valor: "500,00", sitauacao: "Em atraso" },
    {
      vencimento: "19/03/2026",
      valor: "500,00",
      sitauacao: "A pagar",
    },
    {
      vencimento: "19/04/2026",
      valor: "500,00",
      sitauacao: "A pagar",
    },
    {
      vencimento: "19/05/2026",
      valor: "500,00",
      sitauacao: "A pagar",
    },
    {
      vencimento: "19/06/2026",
      valor: "500,00",
      sitauacao: "A pagar",
    },
    {
      vencimento: "19/07/2026",
      valor: "500,00",
      sitauacao: "A pagar",
    },
    {
      vencimento: "19/08/2026",
      valor: "500,00",
      sitauacao: "A pagar",
    },
    {
      vencimento: "19/09/2026",
      valor: "500,00",
      sitauacao: "A pagar",
    },
  ];
  return (
    <>
      <Layout titulo="Meus Boletos" subtitulo="Histórico de Pagamentos">
        <Tabela titulos={colunas} dados={mes} />
      </Layout>
    </>
  );
}

export default Boletos;

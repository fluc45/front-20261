function Tabela({ header, titulos, dados }) {
  return (
<article className="border border-gray-200 rounded-lg mt-6">
      {header && <h3 className= "bg-gray-200 p-1 pl-4 font-bold">{header}</h3>}
      <table className= "flex-col flex auto">
        <thead className= "bg-gray-200 flex-auto p-px pl-4 font-bold">
          <tr className= "flex justify-around">
            {titulos.map((item, index) => (
              <td className="p-2" key={index}>{item}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr className= "flex grow-0 even:bg-gray-100" key={index}>
              {Object.values(item).map((valor, index) => (
                <td className="p-1 flex-1 border border-gray-200" key={index}>{valor}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default Tabela;

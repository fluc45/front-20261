function Card() {
  return (
    <article className="border border-gray-200 rounded-lg mt-6">
      <header className= "bg-gray-200 p-px">
        <h3 className="ml-3 font-bold">Mural de Avisos</h3>
      </header>
      <ul className="p-2">
        <li>Inscrição para projeto de extensão</li>
        <li>Eleição para representante de turma</li>
      </ul>
    </article>
  );
}

export default Card;

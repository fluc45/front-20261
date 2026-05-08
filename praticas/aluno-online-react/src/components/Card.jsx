function Card(props) {
  return (
    <article className="border border-gray-200 rounded-lg mt-6">
      <header className= "bg-gray-200 p-px">
        <h3 className="ml-3 font-bold">{props.titulo}</h3>
      </header>
      <ul className="p-2">
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default Card;

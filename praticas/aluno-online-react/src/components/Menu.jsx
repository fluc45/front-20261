import { NavLink } from "react-router";

function Menu() {
  return (
    <nav>
      <ul className="space-y-5 list-disc font-bold pl-8">
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/faltas">Faltas</NavLink>
        </li>
        <li>
          <NavLink to="/notas">Notas</NavLink>
        </li>
        <li>
          <NavLink to="/boletos">Boletos</NavLink>
        </li>
        <li>
          <NavLink to="/requerimentos">Requerimentos</NavLink>
        </li>
        <li>Sair</li>
      </ul>
    </nav>
  );
}

export default Menu;

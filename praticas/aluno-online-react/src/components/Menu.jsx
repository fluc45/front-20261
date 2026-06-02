import { NavLink } from "react-router-dom";

function Menu() {
  const linkClass = ({ isActive }) =>
    isActive ? "bg-gray-500" : "";

  return (
    <nav>
      <ul className="space-y-5 list-disc font-bold pl-8">
        <li>
          <NavLink to="/" end className={linkClass}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/faltas" className={linkClass}>
            Faltas
          </NavLink>
        </li>
        <li>
          <NavLink to="/notas" className={linkClass}>
            Notas
          </NavLink>
        </li>
        <li>
          <NavLink to="/boletos" className={linkClass}>
            Boletos
          </NavLink>
        </li>
        <li>
          <NavLink to="/requerimentos" className={linkClass}>
            Requerimentos
          </NavLink>
        </li>
        <li>Sair</li>
      </ul>
    </nav>
  );
}

export default Menu;

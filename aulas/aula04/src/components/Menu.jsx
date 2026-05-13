import { useAuthContext } from "../context/AuthContext";
import "./Menu.css";
import { Link, NavLink } from "react-router";

function Menu() {
  const { logout, usuario } = useAuthContext;

  const handleSair = () => {
    logout();
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={`/perfil/`}>Perfil</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Configurações</NavLink>
        </li>
        <li>
          <Link to="/" onClick={handleSair}>
            Sair
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;

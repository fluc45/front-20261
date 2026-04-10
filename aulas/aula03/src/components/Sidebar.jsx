import logo from "../assets/learn.svg";
import Menu from "./Menu";

function Sidebar() {
  return (
    <aside className="pr-16 p-4 hidden md:block">
      <header>
        <img src={logo} alt="logotipo" />
        <h1>Aluno Online</h1>
      </header>
      <Menu />
    </aside>
  );
}

export default Sidebar;

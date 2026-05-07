import logo from "../assets/learn.svg";
import Menu from "./Menu";

function Sidebar() {
  return (
    <aside className="hidden md:block bg-gray-200 w-60 p-4">
      <header className="flex mb-8">
        <img className="w-12 h-12" src={logo} alt="logotipo" />
        <h1 className="text-xl font-bold pt-2 pl-4">Aluno Online</h1>
      </header>
      <Menu />
    </aside>
  );
}

export default Sidebar;

import avatar from "../assets/avatar.svg";

function Topbar() {
  return (
    <header className="flex-1 flex items-center justify-between mb-6">
      <h1 className="text-4xl font-bold">Olá, Aluno!</h1>
      <img className="justify-end h-12 w-12" src={avatar} alt="Imagem do avatar" />
    </header>
  );
}

export default Topbar;

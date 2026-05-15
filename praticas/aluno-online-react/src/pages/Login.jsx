import logo from "../assets/learn.svg";
import FormLogin from "../forms/FormLogin";

function Login() {
  return (
    <main className="content-center flex-1 flex-column justify-items-center">
      <section className="border content-center flex-column justify-items-center">
        <img className="size-24 flex mt-8" src={logo} alt="Imagem do Logo" />
        <h1 className="flex text-3xl font-bold pb-6">Aluno Online</h1>
        <FormLogin />
      </section>
    </main>
  );
}

export default Login;

import logo from "../assets/learn.svg";
import FormLogin from "../forms/FormLogin";

function Login() {
  return (
    <main className="flex-1 flex min-h-screen items-center justify-center p-4">
      <section className="w-full max-w-full flex flex-col items-center justify-center gap-6">
        <img className="size-24 flex" src={logo} alt="Imagem do Logo" />
        <h1 className="flex text-3xl font-bold pb-6">Aluno Online</h1>
        <FormLogin />
      </section>
    </main>
  );
}

export default Login;

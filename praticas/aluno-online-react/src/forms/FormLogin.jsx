import { useState } from "react";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import BotaoSubmit from "../components/BotaoSubmit";

function FormLogin() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [emailErro, setEmailErro] = useState();
  const [senhaErro, setSenhaErro] = useState();

  const trataSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailErro("O campo email é obrigatório");
    }

    if (!senha) {
      setSenhaErro("O campo senha é obrigatório");
    }
  };

  const mudaMatricula = (e) => {
    setEmail(e.target.value);
    setEmailErro("");
  };

  const mudaSenha = (e) => {
    setSenha(e.target.value);
    setSenhaErro("");
  };

  return (
    <form onSubmit={trataSubmit} className="flex flex-col w-full max-w-full">
      <InputEmail valor={email} erro={emailErro} mudaValor={mudaMatricula} />
      <br />

      <InputSenha valor={senha} erro={senhaErro} mudaValor={mudaSenha} />
      <br />
      <BotaoSubmit>Entrar</BotaoSubmit>
    </form>
  );
}

export default FormLogin;

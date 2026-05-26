function InputSenha({ valor, erro, mudaValor }) {
  return (
    <>
      <label htmlFor="senha">Senha</label>
      <br />
      <input className="border w-full p-3 rounded"
        type="password"
        id="senha"
        name="senha"
        value={valor}
        onChange={mudaValor}
      />
      <p className="text-red-700">{erro}</p>
    </>
  );
}

export default InputSenha;
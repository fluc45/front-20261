function InputSenha({ valor, erro, mudaValor }) {
  return (
    <>
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        name="senha"
        value={valor}
        onChange={mudaValor}
      />
      <p>{erro}</p>
    </>
  );
}

export default InputSenha;
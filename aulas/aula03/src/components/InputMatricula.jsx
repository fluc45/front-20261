function InputMatricula({valor, erro, mudaValor }) {
  return (
    <>
      <label htmlFor="matricula">Matrícula</label>
      <input
        type="number"
        id="matricula"
        name="matricula"
        value={valor}
        onChange={mudaValor}
      />
      <p>{erro}</p>
    </>
  );
}

export default InputMatricula;

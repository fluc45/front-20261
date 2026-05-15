function InputEmail({valor, erro, mudaValor}) {
  return (
    <>
      <label htmlFor="email">Email</label>
      <br/>
      <input className="border"
        type="email"
        id="email"
        name="email"
        value={valor}
        onChange={mudaValor}
      />
      <p>{erro}</p>
    </>
  );
}

export default InputEmail;

function InputEmail({valor, erro, mudaValor}) {
  return (
    <>
      <label htmlFor="email">Email</label>
      <br />
      <input className="border w-full p-3 rounded"
        type="email"
        id="email"
        name="email"
        value={valor}
        onChange={mudaValor}
      />
      <p className="text-red-700">{erro}</p>
    </>
  );
}

export default InputEmail;

function BotaoSubmit({ children }) {
  return (
    <button
      type="submit"
      className="w-full py-3 rounded bg-blue-600 text-white font-semibold"
    >
      {children}
    </button>
  );
}

export default BotaoSubmit;

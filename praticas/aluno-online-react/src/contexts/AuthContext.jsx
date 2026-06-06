import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState({});

  const login = () => {
    setUsuario({ id: 0, nome: "user_0", email: "user_0@mail.com" });
    setAutenticado(true);
  };

  const logout = () => {
    setUsuario({});
    setAutenticado(false);
  };

  return (
      <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
}


export { AuthContext, AuthProvider };

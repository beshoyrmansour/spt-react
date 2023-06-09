import { createContext, useState } from "react";
const AuthContext = createContext({});
export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState();
  const [EmailCon, SetemailCon] = useState<string>("");
  const [CodeCon, setCodeCon] = useState<string>("");
  return (
    <AuthContext.Provider
      value={{ auth, setAuth, EmailCon, SetemailCon, CodeCon, setCodeCon }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

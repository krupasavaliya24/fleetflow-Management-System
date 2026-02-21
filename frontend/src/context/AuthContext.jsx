import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // { name, email, role }

  // Mock login function
  const login = (email, password) => {
    // Replace with API call
    let role = "manager"; // or "dispatcher" based on login
    if (email.includes("dispatch")) role = "dispatcher";

    const loggedInUser = { name: "Alex", email, role };
    setUser(loggedInUser);
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
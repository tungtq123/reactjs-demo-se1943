import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Đọc trực tiếp từ storage để có dữ liệu ngay lập tức
    try {
      const savedUser = localStorage.getItem("userdata");
      console.log("User from local storage", savedUser);
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.log("Error parsing user data from localStorage:", error);
      return null;
    }
  });

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(null);

  const login = (userData) => {
    try {
      setUser(userData);
      localStorage.setItem("userdata", JSON.stringify(userData));
    } catch (error) {
      console.log("Error saving user data to localStorage:", error);
    }
  };

  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem("userdata");
    } catch (error) {
      console.log("Error removing user data from localStorage:", error);
      setUser(null); // Still clear user state even if localStorage fails
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

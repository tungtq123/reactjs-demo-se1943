/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import ToolBar from "./components/ToolBar";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";

export const ThemeContext = React.createContext("light");
// luu data vao useContext cho phep truy cap vao kho du lieu chung tu cac components,
// nhung van phai export ra thi component khac moi dung duoc

function App() {
  const [theme, setTheme] = React.useState("light");

  return (
    <div className="container-fluid">
      <ThemeContext.Provider value={[theme, setTheme]}>
        <ToolBar />
        <LoginForm />
      </ThemeContext.Provider>
      {/* <Profile />
      <MyComponent /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;

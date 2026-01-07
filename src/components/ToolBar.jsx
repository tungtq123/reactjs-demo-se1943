import React, { useContext } from "react";
import { ThemeContext } from "../App";

const ToolBar = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

function Button() {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <button
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "black" : "white",
      }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Click Me
    </button>
  );
}

export default ToolBar;

import { useContext } from "react";

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
      onClick={() => setTheme(theme === "light" ? "light" : "dark")}
    >
      Click Me
    </button>
  );
}

export default ToolBar;

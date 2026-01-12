/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import ToolBar from "./components/ToolBar";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProfileComponent from "./components/ProfileComponent";
import MyComponent from "./components/MyComponent";
import Dashboard from "./components/Dashboard";
import DashboardMessage from "./components/DashboardMessage";
import Header from "./components/Header";
import UserList from "./components/UserList";

export const ThemeContext = React.createContext("light");
// luu data vao useContext cho phep truy cap vao kho du lieu chung tu cac components,
// nhung van phai export ra thi component khac moi dung duoc

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [theme, setTheme] = React.useState("light");
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });

  return (
    <>
      {/* <ThemeContext.Provider value={[theme, setTheme]}>
        <ToolBar />
        <LoginForm />
      </ThemeContext.Provider> */}
      {/* <Profile />
      <MyComponent /> */}
      {/* <Counter /> */}
      {/* <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route
          path="/users/:id"
          element={<ProfileComponent  />}
        />
        <Route path="/products" element={<MyComponent />} />
        <Route path="/detail/id" element={<MyComponent />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="messages" element={<DashboardMessage />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <footer className="footer">
        <p>@ 2026 My Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

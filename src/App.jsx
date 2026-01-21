import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
import LocationDisplay from "./components/LocationDisplay";
import ProtectedRoute from "./auth/ProtectedRoute";
import CreateUser from "./components/CreateUser";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><UserList /></ProtectedRoute>} />
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
        <Route path="/location" element={<LocationDisplay />} />
        <Route path="/adduser" element={<CreateUser />} />
      </Routes>
      <footer className="footer">
        <p>@ 2026 My Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

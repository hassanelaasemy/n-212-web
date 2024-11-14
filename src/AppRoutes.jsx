import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Auth/Register";
import { useSelector } from "react-redux";

export default function AppRoutes() {
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);
  
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto relative top-20">
        <Routes>
          <Route
            path="/"
            element={loggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!loggedIn ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!loggedIn ? <Register /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

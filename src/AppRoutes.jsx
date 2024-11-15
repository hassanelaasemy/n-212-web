import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import GuestLayout from "./Layout/GuestLayout";
import Authenticated from "./Layout/Authenticated";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Auth/Register";

export default function AppRoutes() {
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      {loggedIn ? (
        <Authenticated>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Authenticated>
      ) : (
        <GuestLayout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </GuestLayout>
      )}
    </Router>
  );
}

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
import UserProfile from "./pages/user/UserProfile";

import HomeCours from "./pages/Cours/HomeCours";

import DetailCours from "./pages/Cours/DetailCours";
import MyCoursesPage from "./pages/MyCourses/MyCoursesPage";
import FAQPage from "./pages/Faq/FAQPage";

export default function AppRoutes() {
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Router>
      {loggedIn ? (
        <Authenticated>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/content" element={<HomeCours />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/content/show/:id" element={<DetailCours />} />
            <Route path="/mycontent" element={<MyCoursesPage />} />
            <Route path="/faq" element={<FAQPage />} />
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
      <div className={`h-64 ${theme === 'dark' ? 'bg-black' : ""}` }></div>
    </Router>
  );
}

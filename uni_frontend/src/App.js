import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UniversityDashboard from "./pages/UniversityDashboard";
import Register from "./pages/Register";
import CourseCreation from "./pages/CourseCreation";
import Certificate from "./pages/Certificate";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<UniversityDashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-course" element={<CourseCreation />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </div>
    </Router>
  );
}

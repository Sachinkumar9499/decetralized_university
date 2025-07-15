import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import CourseCreation from "./pages/CourseCreation";
import Certificate from "./pages/Certificate";
import UniversityDashboard from "./pages/UniversityDashboard";
export default function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<h1>🎓 Welcome to ICP University Portal</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-course" element={<CourseCreation />} />
          <Route path="/certificate" element={<Certificate />} />
         <Route path="/dashboard" element={<UniversityDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

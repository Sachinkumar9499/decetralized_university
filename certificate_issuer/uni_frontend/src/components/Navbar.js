import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/register" style={{ marginRight: "15px" }}>Register</Link>
      <Link to="/create-course" style={{ marginRight: "15px" }}>Create Course</Link>
      <Link to="/certificate">Issue Certificate</Link>
    </nav>
  );
}

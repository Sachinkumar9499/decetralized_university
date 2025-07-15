import React, { useState } from "react";
import { backend_backend } from "../declarations/backend_backend";

const Register = () => {
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [students, setStudents] = useState([]);

  const registerStudent = async () => {
    if (!studentName || !email) {
      alert("⚠️ Please enter both name and email.");
      return;
    }

    try {
      await backend_backend.register_student(studentName, email);
      alert("✅ Student registered!");
      setStudentName("");
      setEmail("");
    } catch (error) {
      console.error("Error registering student:", error);
      alert("❌ Failed to register student");
    }
  };

  const fetchStudents = async () => {
    try {
      const allStudents = await backend_backend.get_all_students();
      setStudents(allStudents);
    } catch (error) {
      console.error("Error fetching students:", error);
      alert("❌ Failed to fetch students");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>👨‍🎓 Register Student</h2>
      <input
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={registerStudent}>Register</button>

      <h2 style={{ marginTop: "30px" }}>📋 All Students</h2>
      <button onClick={fetchStudents}>Show All Students</button>
      <ul style={{ marginTop: "20px" }}>
        {students.length === 0 && <p>No students found yet.</p>}
        {students.map(([name, email], idx) => (
          <li key={idx}>
            <strong>{name}</strong>: {email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Register;


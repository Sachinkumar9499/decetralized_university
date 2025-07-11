import React, { useState } from "react";
import { backend_backend } from "./declarations/backend_backend";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentCourse, setStudentCourse] = useState("");
  const [queryName, setQueryName] = useState("");
  const [certificate, setCertificate] = useState("");

  // Register student
  const handleRegister = async () => {
    await backend_backend.register_student(name, email);
    alert("Student registered!");
  };

  // Create course
  const handleCreateCourse = async () => {
    await backend_backend.create_course(courseName, courseDesc);
    alert("Course created!");
  };

  // Issue certificate
  const handleIssueCertificate = async () => {
    await backend_backend.issueCertificate(studentName, studentCourse);
    alert("Certificate issued!");
  };

  // Get certificate
  const handleGetCertificate = async () => {
    const cert = await backend_backend.getCertificate(queryName);
    setCertificate(cert);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎓 ICP University Portal</h1>

      <section>
        <h2>Register Student</h2>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <button onClick={handleRegister}>Register</button>
      </section>

      <section>
        <h2>Create Course</h2>
        <input placeholder="Course Name" value={courseName} onChange={e => setCourseName(e.target.value)} />
        <input placeholder="Description" value={courseDesc} onChange={e => setCourseDesc(e.target.value)} />
        <button onClick={handleCreateCourse}>Create Course</button>
      </section>

      <section>
        <h2>Issue Certificate</h2>
        <input placeholder="Student Name" value={studentName} onChange={e => setStudentName(e.target.value)} />
        <input placeholder="Course Name" value={studentCourse} onChange={e => setStudentCourse(e.target.value)} />
        <button onClick={handleIssueCertificate}>Issue Certificate</button>
      </section>

      <section>
        <h2>Get Certificate</h2>
        <input placeholder="Student Name" value={queryName} onChange={e => setQueryName(e.target.value)} />
        <button onClick={handleGetCertificate}>Get Certificate</button>
        <p><strong>Certificate:</strong> {certificate}</p>
      </section>
    </div>
  );
}

export default App;

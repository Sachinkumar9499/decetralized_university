import React, { useState } from "react";
import { backend_backend } from "../declarations/backend_backend";

const Certificate = () => {
  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [queryName, setQueryName] = useState("");
  const [certificate, setCertificate] = useState("");

  const handleIssueCertificate = async () => {
    if (!studentName || !courseName) {
      alert("Please enter both student name and course name.");
      return;
    }

    try {
      await backend_backend.issueCertificate(studentName, courseName);
      alert("✅ Certificate issued!");
      setStudentName("");
      setCourseName("");
    } catch (error) {
      console.error("Error issuing certificate:", error);
      alert("❌ Failed to issue certificate");
    }
  };

  const handleGetCertificate = async () => {
    try {
      const result = await backend_backend.getCertificate(queryName);
      setCertificate(result);
    } catch (error) {
      console.error("Error fetching certificate:", error);
      alert("❌ Could not fetch certificate");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎓 Issue Certificate</h2>
      <input
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        placeholder="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleIssueCertificate}>Issue</button>

      <h2 style={{ marginTop: "30px" }}>🔍 Get Certificate</h2>
      <input
        placeholder="Student Name"
        value={queryName}
        onChange={(e) => setQueryName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleGetCertificate}>Fetch</button>

      {certificate && (
        <div style={{ marginTop: "20px" }}>
          <strong>Certificate:</strong>
          <p>{certificate}</p>
        </div>
      )}
    </div>
  );
};

export default Certificate;

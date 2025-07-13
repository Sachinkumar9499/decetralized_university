import React, { useState } from "react";
import { backend_backend } from "../declarations/backend_backend";

const CourseCreation = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateCourse = async () => {
    if (!courseName || !description) {
      alert("Please fill all fields");
      return;
    }

    try {
      await backend_backend.create_course(courseName, description);
      alert("✅ Course created successfully!");
      setCourseName("");
      setDescription("");
    } catch (error) {
      console.error("Failed to create course:", error);
      alert("❌ Error creating course");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📘 Create a New Course</h2>
      <input
        placeholder="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        placeholder="Course Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleCreateCourse}>Create Course</button>
    </div>
  );
};

export default CourseCreation;

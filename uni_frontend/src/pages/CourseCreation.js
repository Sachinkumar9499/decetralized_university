import React, { useState } from "react";
import { backend_backend } from "../declarations/backend_backend";

export default function CourseCreation() {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  const handleCreateCourse = async () => {
    try {
      await backend_backend.create_course(courseName, courseDescription);
      alert("Course created successfully!");
    } catch (error) {
      console.error("❌ Error creating course:", error);
      alert("Something went wrong while creating the course.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course Description"
        value={courseDescription}
        onChange={(e) => setCourseDescription(e.target.value)}
      />
      <button onClick={handleCreateCourse}>Create Course</button>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { backend_backend } from "../declarations/backend_backend";

export default function UniversityDashboard() {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedCourses = await backend_backend.get_all_courses();
        const fetchedStudents = await backend_backend.get_all_students();
        setCourses(fetchedCourses);
        setStudents(fetchedStudents);
      } catch (error) {
        console.error("Error fetching data from backend:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🏛️ ICP University Dashboard</h1>

      <section>
        <h2>📚 All Courses</h2>
        {courses.length === 0 ? (
          <p>No courses found.</p>
        ) : (
          <ul>
            {courses.map((course, index) => (
              <li key={index}>
                <strong>{course.name}</strong>: {course.description}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>🧑‍🎓 Registered Students</h2>
        {students.length === 0 ? (
          <p>No students registered yet.</p>
        ) : (
          <ul>
            {students.map((student, index) => (
              <li key={index}>
                <strong>{student.name}</strong> ({student.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

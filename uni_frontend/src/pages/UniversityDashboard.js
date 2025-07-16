import React from "react";
import { Link } from "react-router-dom";

export default function UniversityDashboard() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">🎓 ICP University Dashboard</h1>

      <div className="row g-4">
        {/* Student Registration */}
        <div className="col-md-4">
          <div className="card h-100 shadow text-center">
            <div className="card-body">
              <h5 className="card-title">👨‍🎓 Register Student</h5>
              <p className="card-text">Create a new student identity on the blockchain.</p>
              <Link to="/register" className="btn btn-primary">Go to Registration</Link>
            </div>
          </div>
        </div>

        {/* Certificate Issuer */}
        <div className="col-md-4">
          <div className="card h-100 shadow text-center">
            <div className="card-body">
              <h5 className="card-title">📜 Issue Certificate</h5>
              <p className="card-text">Generate and assign certificates to students.</p>
              <Link to="/certificate" className="btn btn-success">Issue Certificate</Link>
            </div>
          </div>
        </div>

        {/* Course Creation */}
        <div className="col-md-4">
          <div className="card h-100 shadow text-center">
            <div className="card-body">
              <h5 className="card-title">📘 Create Course</h5>
              <p className="card-text">Define and add new academic courses to the portal.</p>
              <Link to="/create-course" className="btn btn-info text-white">Create Course</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add login logic (authentication or dummy)
    navigate("/dashboard"); // Redirect to dashboard on success
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">🎓 University Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" required placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required placeholder="Enter password" />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="text-center mt-3">
          <small className="text-muted">Don't have an account? <a href="/register">Register</a></small>
        </div>
      </div>
    </div>
  );
}

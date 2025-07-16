import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Optional: for future custom styles

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-3 fw-bold">🎓 Decentralized Autonomous University</h1>
          <p className="lead mt-3">
            Empowering the future of education with decentralized technology.
          </p>
          <Link to="/login" className="btn btn-light btn-lg mt-4 px-5 py-2">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Us?</h2>
          <div className="row g-4">
            {[
              {
                title: "🛡️ Decentralized Records",
                desc: "Secure, tamper-proof student data using blockchain identity.",
              },
              {
                title: "🧠 Smart Course Creation",
                desc: "Instructors create and manage academic content transparently.",
              },
              {
                title: "📜 On-Chain Certificates",
                desc: "Issue verifiable certificates stored immutably on-chain.",
              },
            ].map((feature, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold mb-3">
                      {feature.title}
                    </h5>
                    <p className="card-text text-muted">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">How It Works</h2>
          <div className="row text-center g-4">
            {[
              { icon: "🧑‍🎓", title: "Register", desc: "Create student identity on-chain." },
              { icon: "📘", title: "Create Course", desc: "Design blockchain-based academic courses." },
              { icon: "📝", title: "Assign Grades", desc: "Evaluate and record results securely." },
              { icon: "📜", title: "Issue Certificates", desc: "Award verified digital certificates." },
            ].map((step, idx) => (
              <div className="col-md-3" key={idx}>
                <div className="fs-1 mb-2">{step.icon}</div>
                <h5 className="fw-semibold">{step.title}</h5>
                <p className="text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h2 className="mb-3">Join the Revolution in Education</h2>
          <p className="mb-4">
            Decentralize your learning and credentials with confidence.
          </p>
          <Link to="/register" className="btn btn-outline-light btn-lg px-4 py-2">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}

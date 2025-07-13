import React, { useState } from "react";
import { backend_backend } from "../declarations/backend_backend";

export default function StudentRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async () => {
    await backend_backend.register_student(name, email);
    alert("Student registered!");
  };

  return (
    <section>
      <h2>Register Student</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </section>
  );
}
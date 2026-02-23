import React, { useEffect, useState } from "react";
import "./workshops.css";
import RegistrationForm from "./RegistrationForm";

export default function Workshops() {

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  /* ================= NEON MATRIX ================= */
  useEffect(() => {
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00f0ff";
      ctx.shadowColor = "#00f0ff";
      ctx.shadowBlur = 15;

      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 40);
    return () => clearInterval(interval);
  }, []);

  /* ================= REGISTER BUTTON ================= */
  const handleRegister = () => {
    setIsRegistrationOpen(true);
  };

  const handleClose = () => {
    setIsRegistrationOpen(false);
  };

  return (
    <div className="workshop-page">

      <canvas id="matrixCanvas"></canvas>

      <div className="event-wrapper">

        <a href="/events" className="back-link">← Back to events</a>

        <div className="event-header">
          <div>
            <h1 className="event-title">
              Digital Forensics & Cyber Investigation
            </h1>

            <p className="event-meta">
              <span><b>Date:</b> March 14, 2026</span>
              <span><b>Time:</b> 09:30 AM</span>
              <span><b>Location:</b> Department of Information Technology</span>
            </p>
          </div>

          <button className="register-btn" onClick={handleRegister}>
            REGISTER NOW
          </button>
        </div>

        <div className="hero-card">
          <div className="hero-placeholder">
            DIGITAL FORENSICS
          </div>
        </div>

        <div className="card">
          <h2>About the Workshop</h2>
          <p>
            This hands-on workshop introduces digital evidence collection,
            cyber crime investigation techniques, log analysis, and
            mobile forensics. Participants will explore real-world case
            studies and forensic tools used in industry.
          </p>
        </div>

        <div className="card">
          <h2>Who Can Participate</h2>
          <ul>
            <li>Open to all college students</li>
            <li>Students from any department eligible</li>
            <li>Interest in Cyber Security preferred</li>
          </ul>
        </div>

      </div>

      {/* 🔥 Registration Modal */}
      <RegistrationForm 
        isOpen={isRegistrationOpen} 
        onClose={handleClose} 
      />

    </div>
  );
}
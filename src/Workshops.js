import React, { useEffect, useState } from "react";
import "./workshops.css";
import RegistrationForm from "./RegistrationForm";
import { motion } from "framer-motion";

export default function Workshops() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];
    for (let i = 0; i < columns; i++) { drops[i] = 1; }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00f0ff";
      ctx.shadowColor = "#00f0ff";
      ctx.shadowBlur = 5;
      ctx.font = fontSize + "px monospace";
      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) { drops[i] = 0; }
        drops[i]++;
      }
    }
    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  const handleRegister = () => setIsRegistrationOpen(true);
  const handleClose = () => setIsRegistrationOpen(false);

  return (
    <motion.div
      className="workshop-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <canvas id="matrixCanvas"></canvas>

      <motion.div
        className="event-wrapper"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <a href="/events" className="back-link">← Back to events</a>

        <div className="event-header">
          <div>
            <h1 className="event-title" style={{ fontFamily: 'Orbitron', color: '#00f0ff' }}>
              Digital Forensics & Cyber Investigation
            </h1>
            <p className="event-meta">
              <span><b>Date:</b> March 14, 2026</span>
              <span><b>Time:</b> 09:30 AM</span>
              <span><b>Location:</b> IT Dept</span>
            </p>
          </div>
          <motion.button
            className="register-btn"
            onClick={handleRegister}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00f0ff" }}
            whileTap={{ scale: 0.95 }}
          >
            REGISTER NOW
          </motion.button>
        </div>

        <motion.div
          className="hero-card"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="hero-placeholder" style={{ fontFamily: 'Orbitron' }}>
            DIGITAL FORENSICS
          </div>
        </motion.div>

        <motion.div className="card" whileHover={{ x: 10 }}>
          <h2 style={{ color: '#00f0ff' }}>About the Workshop</h2>
          <p>
            This hands-on workshop introduces digital evidence collection,
            cyber crime investigation techniques, log analysis, and
            mobile forensics. Participants will explore real-world case
            studies and forensic tools used in industry.
          </p>
        </motion.div>

        <motion.div className="card" whileHover={{ x: 10 }}>
          <h2 style={{ color: '#00f0ff' }}>Who Can Participate</h2>
          <ul>
            <li>Open to all college students</li>
            <li>Students from any department eligible</li>
            <li>Interest in Cyber Security preferred</li>
          </ul>
        </motion.div>
      </motion.div>

      <RegistrationForm isOpen={isRegistrationOpen} onClose={handleClose} />
    </motion.div>
  );
}

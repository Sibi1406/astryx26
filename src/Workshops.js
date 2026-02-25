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

      {/* Animated Robot Background */}
      <svg className="robot-animation" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
        {/* Robot Body */}
        <rect x="35" y="40" width="30" height="35" rx="3" fill="none" stroke="#00f0ff" strokeWidth="2"/>
        
        {/* Robot Head */}
        <circle cx="50" cy="25" r="12" fill="none" stroke="#00f0ff" strokeWidth="2"/>
        
        {/* Eyes */}
        <circle cx="45" cy="23" r="2" fill="#00f0ff"/>
        <circle cx="55" cy="23" r="2" fill="#00f0ff"/>
        
        {/* Antenna */}
        <line x1="50" y1="13" x2="50" y2="5" stroke="#00d9ff" strokeWidth="1.5"/>
        <circle cx="50" cy="4" r="1.5" fill="#00d9ff"/>
        
        {/* Left Arm */}
        <rect x="20" y="50" width="15" height="6" rx="2" fill="none" stroke="#00f0ff" strokeWidth="1.5"/>
        <circle cx="20" cy="53" r="2" fill="#00f0ff"/>
        
        {/* Right Arm */}
        <rect x="65" y="50" width="15" height="6" rx="2" fill="none" stroke="#00f0ff" strokeWidth="1.5"/>
        <circle cx="80" cy="53" r="2" fill="#00f0ff"/>
        
        {/* Left Leg */}
        <rect x="38" y="75" width="6" height="20" rx="2" fill="none" stroke="#00f0ff" strokeWidth="1.5"/>
        
        {/* Right Leg */}
        <rect x="56" y="75" width="6" height="20" rx="2" fill="none" stroke="#00f0ff" strokeWidth="1.5"/>
      </svg>

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
            UIPATH UNLOCKED- WORKSHOP
            </h1>
            <p className="event-meta">
              <span><b>Date:</b> March 14, 2026</span>
              <span><b>Time:</b> 1:15 PM - 4:00 PM</span>
              <span><b>Location:</b> SEMINAR HALL </span>
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
            UIPATH UNLOCKED- WORKSHOP
          </div>
        </motion.div>

        <motion.div className="card" whileHover={{ x: 10 }}>
          <h2 style={{ color: '#00f0ff' }}>About the Workshop</h2>
          <p>
            This hands-on workshop introduces Robotic Process Automation (RPA) using UIPath.
            Participants will learn workflow automation, bot development, process mining,
            and real-world automation solutions. Explore industry best practices and
            create automation workflows using UIPath Studio.
          </p>
        </motion.div>

        <motion.div className="card" whileHover={{ x: 10 }}>
          <h2 style={{ color: '#00f0ff' }}>Who Can Participate</h2>
          <ul>
            <li>Open to all college students</li>
            <li>Students from any department eligible</li>
            <li>Basic programming knowledge helpful</li>
            <li>Interest in Process Automation preferred</li>
          </ul>
        </motion.div>
      </motion.div>

      <RegistrationForm isOpen={isRegistrationOpen} onClose={handleClose} />
    </motion.div>
  );
}

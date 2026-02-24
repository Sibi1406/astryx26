import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const location = useLocation();

  return (
    <motion.header
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-inner">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link to="/" className="nav-logo">ASTRYX'26</Link>
        </div>

        <nav className="nav-center">
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/workshops" className="nav-link">Workshops</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        
      </div>
    </motion.header>
  );
}

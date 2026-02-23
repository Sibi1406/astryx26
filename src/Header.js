import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const showBack = location.pathname.startsWith("/events/") && location.pathname !== "/events";

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {showBack && (
            <button className="back-btn" onClick={() => navigate("/events")}>←</button>
          )}
          <Link to="/" className="nav-logo">ASTRYX'26</Link>
        </div>

        <nav className="nav-center">
          <Link to="/events">Events</Link>
          <Link to="/workshops">Workshops</Link>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-right">
          <Link to="/login" className="login-btn">Login</Link>
        </div>
      </div>
    </header>
  );
}

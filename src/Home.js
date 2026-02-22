import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EVENT_DATE = new Date("2026-03-14T09:00:00");

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

function getTimeLeft(targetDate) {
  const now = new Date();
  const diff = Math.max(0, targetDate - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownBox({ value, label }) {
  return (
    <div className="countdown-box">
      <div className="count-value">{value}</div>
      <div className="count-label">{label}</div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const { days, hours, minutes, seconds } = useCountdown(EVENT_DATE);

  /* 🌌 Parallax Scroll Effect */
  useEffect(() => {
    const handleScroll = () => {
      const stars = document.querySelector(".stars");
      const particles = document.querySelector(".particles");

      const scrollY = window.scrollY;

      if (stars) stars.style.transform = `translateY(${scrollY * 0.15}px)`;
      if (particles) particles.style.transform = `translateY(${scrollY * 0.3}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 return (
  <div className="home-wrapper">

    {/* NAVBAR */}
    <nav className="navbar">
      <div className="nav-inner">

        <div className="nav-left">
          <div className="nav-logo">ASTRYX'26</div>
        </div>

        <div className="nav-center">
          <a href="events">Events</a>
          <a href="#workshops">Workshops</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-right">
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>

      </div>
    </nav>

    {/* HERO */}
    <section className="hero">
      <div className="hero-content">

        {/* ===== Elite Header System ===== */}
        <div className="inst-row">
          <img src="/logo.png" alt="College Logo" className="inst-logo" />

          <div className="inst-text">
            <h2 className="top-info">
              RAMCO INSTITUTE OF TECHNOLOGY
            </h2>

            <p className="inst-sub">
              (An Autonomous Institution)
            </p>

            <p className="inst-desc">
              Approved by AICTE, New Delhi & Affiliated to Anna University<br />
              NAAC Accredited with 'A+' Grade & ISO 9001:2015 Certified Institution<br />
              NBA Accredited UG Programs: CSE, EEE, ECE, MECH and CIVIL
            </p>
          </div>

          <img src="/logo2.png" alt="IE Logo" className="inst-logo" />
        </div>

        {/* ===== Department Section ===== */}
        <div className="hero-main">

          <p className="dept">
            DEPARTMENT OF INFORMATION TECHNOLOGY
          </p>

          <p className="assoc">
            in association with <b>IE (I) IT Student Chapter</b>
          </p>

          <h1 className="main-title">ASTRYX'26</h1>

          <div className="event-info">
            MARCH 14, 2026 • LAST DATE TO REGISTER: 05/03/2026
          </div>

          <div className="cta-buttons">
            <button
              className="explore-btn"
              onClick={() => navigate("/events")}
            >
              Explore Events
            </button>
          </div>

          <div className="countdown-container">
            <CountdownBox value={days} label="DAYS" />
            <CountdownBox value={hours} label="HOURS" />
            <CountdownBox value={minutes} label="MINUTES" />
            <CountdownBox value={seconds} label="SECONDS" />
          </div>

        </div>

      </div>
    </section>

    {/* ABOUT SECTION */}
    <section className="about-section">
      <div className="about-container">

        <h2 className="about-title">About Astryx '26</h2>

        <p className="about-description">
          Astryx ’26 is the flagship National Level Technical Symposium organised by
          the Department of Information Technology at Ramco Institute of Technology.
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>10+ Events</h3>
            <p>Technical & Non-Technical Competitions</p>
          </div>

          <div className="highlight-card">
            <h3>Workshops</h3>
            <p>Hands-on Industry Sessions</p>
          </div>

          <div className="highlight-card">
            <h3>Exciting Prizes</h3>
            <p>Cash Awards & Certificates</p>
          </div>
        </div>

      </div>
    </section>

  </div>
);}
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
  const [menuOpen, setMenuOpen] = useState(false);
/* ================= CONSTELLATION HERO ================= */
useEffect(() => {
  const canvas = document.getElementById("constellationCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = 600;
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const particles = [];
  const count = 70;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.fillStyle = "#00d9ff";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 130) {
          ctx.strokeStyle = "rgba(0,217,255,0.15)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();

  return () => {
    window.removeEventListener("resize", resizeCanvas);
  };
}, []);
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
            <div 
              className="nav-logo"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              ASTRYX'26
            </div>
          </div>

          <div className="nav-center">
            <span onClick={() => navigate("/events")}>
              Events
            </span>

            <span onClick={() => navigate("/workshops")}>
              Workshops
            </span>

            <span onClick={() => navigate("#contact")}>
              Contact
            </span>
          </div>

          <div className="nav-right">
            <button
              className="login-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
<div 
  className="hamburger"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</div>
        </div>
      </nav>
      {menuOpen && (
  <div className="mobile-menu">
    <span onClick={() => navigate("/events")}>Events</span>
    <span onClick={() => navigate("/workshops")}>Workshops</span>
    <span onClick={() => navigate("#contact")}>Contact</span>
    <button onClick={() => navigate("/login")}>Login</button>
  </div>
)}

      {/* HERO */}
      <section className="hero">
        <canvas id="constellationCanvas" className="hero-canvas"></canvas>
        <div className="hero-content">

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

              <button
                className="explore-btn"
                onClick={() => navigate("/workshops")}
              >
                Explore Workshops
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
  );
}
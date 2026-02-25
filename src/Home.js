import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.div
      className="countdown-box"
      whileHover={{ y: -10, scale: 1.05, borderColor: "rgba(0,229,255,0.6)" }}
    >
      <div className="count-value">{value}</div>
      <div className="count-label">{label}</div>
    </motion.div>
  );
}

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const navigate = useNavigate();
  const { days, hours, minutes, seconds } = useCountdown(EVENT_DATE);

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

      particles.forEach((p) => {
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

          if (distance < 100) {
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

  return (
    <motion.div
      className="home-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="hero">
        <canvas id="constellationCanvas" className="hero-canvas"></canvas>
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="inst-row" variants={fadeInUp}>
            <img src="/logo.png" alt="College Logo" className="inst-logo" />
            <div className="inst-text">
              <h2 className="top-info">RAMCO INSTITUTE OF TECHNOLOGY</h2>
              <p className="inst-sub">(An Autonomous Institution)</p>
              <p className="inst-desc">
                Approved by AICTE, New Delhi & Affiliated to Anna University<br />
                NAAC Accredited with 'A+' Grade & ISO 9001:2015 Certified Institution<br />
                NBA Accredited UG Programs: CSE, EEE, ECE, MECH and CIVIL
              </p>
            </div>
            <img src="/logo2.png" alt="IE Logo" className="inst-logo" />
          </motion.div>

          <div className="hero-main">
            <motion.p className="dept" variants={fadeInUp}>DEPARTMENT OF INFORMATION TECHNOLOGY</motion.p>
            <motion.p className="assoc" variants={fadeInUp}>in association with <b>IE (I)-IT Student Chapter</b></motion.p>

            <motion.h1
              className="main-title"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              ASTRYX'26
            </motion.h1>

            <motion.div className="event-info" variants={fadeInUp}>
              MARCH 14, 2026 • LAST DATE TO REGISTER: 12/03/2026
            </motion.div>

            <motion.div className="cta-buttons" variants={fadeInUp}>
              <button className="explore-btn" onClick={() => navigate("/events")}>Explore Events</button>
              <button className="explore-btn" onClick={() => navigate("/workshops")}>Explore Workshops</button>
            </motion.div>

            <motion.div className="countdown-container" variants={fadeInUp}>
              <CountdownBox value={days} label="DAYS" />
              <CountdownBox value={hours} label="HOURS" />
              <CountdownBox value={minutes} label="MINUTES" />
              <CountdownBox value={seconds} label="SECONDS" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="about-section" style={{ padding: "100px 0", position: "relative" }}>
        <div className="about-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "15px", letterSpacing: "2px", fontFamily: 'Orbitron' }}
            >
              ABOUT <span style={{ color: "var(--primary)" }}> ASTRYX '26 </span>
            </motion.h2>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100px", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ height: "4px", background: "linear-gradient(to right, transparent, var(--primary), transparent)", margin: "0 auto" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: "var(--bg-card)",
              borderRadius: "32px",
              border: "1px solid var(--border-light)",
              backdropFilter: "var(--glass-blur)",
              padding: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "50px",
              alignItems: "center",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)"
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: "relative", borderRadius: "24px", overflow: "hidden", border: "4px solid rgba(0, 217, 255, 0.1)" }}
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweqE_kL5037PcnDnqgAQ0gaDTN1mj1ap5szxr41KvQiXzErHRDc3ESO40KQ-Qlwe0ynMQkrL6FzHFB-x2IqzA7Ck8mncEela7lI7Xj8GFi9LF2pez6ZFePsnf81BcL26ikCvlvyO=s1360-w1360-h1020-rw"
                alt="Ramco Institute of Technology"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(2, 4, 10, 0.6), transparent)" }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, opacity: 0.9, marginBottom: "25px" }}>
                <span style={{ color: "var(--primary)", fontWeight: 700 }}>Astryx '26</span> is the premier National Level Technical Symposium hosted by the Department of Information Technology at Ramco Institute of Technology.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, opacity: 0.9 }}>
                <b style={{ color: "white" }}>Astryx '26</b> provides a platform for students to showcase their expertise, learn from industry standards, and network with fellow technophiles. Join us on <span style={{ color: "var(--primary)" }}>March 14th</span> for a journey through the stars of technology!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="highlight-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", padding: "0 20px", marginTop: "80px" }}
          >
            {[
              { title: "Innovate", desc: "Showcase your groundbreaking ideas and projects to an expert panel." },
              { title: "Compete", desc: "Test your skills against the best minds in various technical challenges." },
              { title: "Connect", desc: "Network with peers and industry experts in a vibrant tech community." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <h3 style={{ color: "var(--primary)", marginBottom: "15px", fontSize: "1.5rem" }}>{item.title}</h3>
                <p style={{ opacity: 0.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

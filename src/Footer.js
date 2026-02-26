import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <p>© {new Date().getFullYear()} ASTRYX’26. All Rights Reserved.</p>

      <p className="footer-credit">
        Designed & Developed by <b>Sibiah R</b> & <b>Sobika Joleen G J</b>
      </p>

      {/* LinkedIn row */}
      <div className="footer-linkedin-row">
        <a
          href="https://www.linkedin.com/in/sibiah-r-96420528a/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-item"
        >
          <span className="linkedin-logo">in</span>
          <span className="linkedin-name">Sibiah R</span>
        </a>

        <span className="linkedin-separator">|</span>

        <a
          href="https://www.linkedin.com/in/sobika-joleen-g-j-532981294/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-item"
        >
          <span className="linkedin-logo">in</span>
          <span className="linkedin-name">Sobika Joleen G J</span>
        </a>
      </div>
      <div className="footer-social-row">
  <a href="https://www.facebook.com/profile.php?id=61551997366114" className="social-pill fb" target="_blank" rel="noopener noreferrer">
    <span className="social-icon">f</span>
    <span className="social-text">Department of IT</span>
  </a>

  <a
    href="https://www.instagram.com/ritrjpm.it?igsh=MTZuMm42ZnR0YXJ1Mw=="
    className="social-pill ig"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="social-icon">📷</span>
    <span className="social-text">ritpjm.it</span>
  </a>

  <a href="https://www.linkedin.com/in/rit-information-technology?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="social-pill in" target="_blank" rel="noopener noreferrer">
    <span className="social-icon">in</span>
    <span className="social-text">RIT Department of IT</span>
  </a>

  <a href="https://youtube.com/@rit_it_dept?si=ZSpQLouymdBWXjiA" className="social-pill yt" target="_blank" rel="noopener noreferrer">
    <span className="social-icon">▶</span>
    <span className="social-text">RIT Department of IT</span>
  </a>
</div>
    </motion.footer>
  );
}
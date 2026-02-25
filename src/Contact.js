import { motion } from "framer-motion";
import "./team.css";

export default function Contact() {
  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-container">
        <motion.h1
          className="contact-title"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          style={{ fontFamily: "Orbitron" }}
        >
          CONTACT US
        </motion.h1>

        

        {/* Coordinators Contact Section */}
        <motion.div
          className="contact-section coordinators-section"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Coordinators Contact</h2>
          <motion.div className="coordinators-grid" variants={stagger} initial="initial" animate="animate">
            <motion.div 
              className="coordinator-card" 
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 217, 255, 0.2)" }}
            >
              <div className="coordinator-name">ARJUN G</div>
              <a href="tel:+917548817856" className="phone-link">
                +91 7548817856
              </a>
            </motion.div>
            <motion.div 
              className="coordinator-card" 
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 217, 255, 0.2)" }}
            >
              <div className="coordinator-name">MIRYTHUN AKSHAY M</div>
              <a href="tel:+919363901681" className="phone-link">
                +91 9363901681
              </a>
            </motion.div>
          </motion.div>
        </motion.div>


        {/* Email Section */}
        <motion.div
          className="contact-section email-section"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="section-heading">For Queries & Support</h2>
          <motion.div 
            className="email-card" 
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 217, 255, 0.2)" }}
          >
            <div className="email-label">Email Address</div>
            <a href="mailto:astryx.26@gmail.com" className="email-link">
              astryx.26@gmail.com
            </a>
            <div className="email-description">For any queries, suggestions, or assistance related to ASTRYX'26</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

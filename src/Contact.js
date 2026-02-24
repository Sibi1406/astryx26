import { motion } from "framer-motion";
import "./contact.css";

export default function Contact() {
  const eventIncharges = [
    { incharge: "Dr.K.Palraj" },
    {  incharge: "Dr.G.Mareeswari" },
    { incharge: "Mr.S.Sakkaravarthi" },
    {  incharge: "Mrs.G.Sivasathiya" },
    {  incharge: "Mrs.M.Rethinakumari" },
    { incharge: "Mrs.A.Alagulaksmi" },
     { incharge: "Mrs.M.Thulasi Devi" },
    { incharge: "Mrs.B.Thevahi" },
    { incharge: "Mrs.P.Ramya" },

  ];

  const studentCoordinators = [
    { name: "Arjun", year: "III IT" },
    { name: "Divya sri J S", year: "III IT" },
    { name: "Akshay", year: "II IT" },
    { name: "Kalishwari", year: "II IT" }
  ];

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
          CONTACT INFORMATION
        </motion.h1>

        {/* Convenor Section */}
        <motion.div
          className="contact-section convenor-section"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Event Convenor</h2>
          <div className="contact-card" style={{ borderLeft: "4px solid #00d9ff" }}>
            <div className="role">Convenor</div>
            <div className="name">Dr. V.Anusuya</div>
            <div className="designation">HOD/IT Department</div>
          </div>
        </motion.div>

        {/* Faculty Co-ordinator Section */}
        <motion.div
          className="contact-section faculty-section"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Faculty Co-ordinator</h2>
          <div className="contact-card" style={{ borderLeft: "4px solid #9a2be2" }}>
            <div className="role">Faculty Co-ordinator</div>
            <div className="name">Dr.G.Mareeswari</div>
            <div className="designation">AP/IT Department</div>
          </div>
        </motion.div>

        {/* Faculty Incharges Section */}
        <motion.div
          className="contact-section incharge-section"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Event Faculty Incharges</h2>
          <motion.div className="incharge-grid" variants={stagger} initial="initial" animate="animate">
            {eventIncharges.map((event, index) => (
              <motion.div
                key={index}
                className="incharge-card"
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 217, 255, 0.15)" }}
              >
                <div className="event-name">{event.eventName}</div>
                <div className="incharge-name">{event.incharge}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Student Co-ordinators Section */}
        <motion.div
          className="contact-section student-section"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Student Co-ordinators</h2>
          <motion.div className="student-grid" variants={stagger} initial="initial" animate="animate">
            {studentCoordinators.map((coordinator, index) => (
              <motion.div
                key={index}
                className="student-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(138, 43, 226, 0.2)" }}
              >
                <div className="student-name">{coordinator.name}</div>
                <div className="student-year">{coordinator.year}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Email Contact Section */}
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
            <a href="mailto:astryx26@vit.ac.in" className="email-link">
              astryx26@vit.ac.in
            </a>
            <div className="email-description">For any queries, suggestions, or assistance related to ASTRYX'26</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

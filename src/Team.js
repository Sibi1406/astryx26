import { motion } from "framer-motion";
import "./team.css";

export default function Team() {
  const eventIncharges = [
    { incharge: "Dr.K.Palraj", designation: "ASP/IT" },
    { incharge: "Dr.G.Mareeswari", designation: "AP II/IT" },
    { incharge: "Mr.S.Sakkaravarthi", designation: "AP II/IT" },
    { incharge: "Mrs.G.Sivasathiya", designation: "AP I/IT" },
    { incharge: "Mrs.M.Rethinakumari", designation: "AP I/IT" },
    { incharge: "Mrs.A.Alagulakshmi", designation: "AP I/IT" },
    { incharge: "Mrs.M.Thulasi Devi", designation: "AP I/IT" },
    { incharge: "Mrs.B.Thevahi", designation: "AP I/IT" },
    { incharge: "Mrs.P.Ramya", designation: "AP I/IT" }
  ];

  const studentCoordinators = [
    { name: "Arjun G", year: "III IT" },
    { name: "Divya sri J S", year: "III IT" },
    { name: "Miruthun Akshay M", year: "II IT" },
    { name: "Kaleeswari A K", year: "II IT" }
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
          AstryX'26 Team
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
          <h2 className="section-heading">Faculty Co-ordinator(s)</h2>
          <motion.div className="faculty-grid" variants={stagger} initial="initial" animate="animate">
            <div className="contact-card" style={{ borderLeft: "4px solid #9a2be2" }}>
              <div className="role">Faculty Co-ordinator</div>
              <div className="name">Dr.G.Mareeswari</div>
              <div className="designation">AP II/IT Department</div>
            </div>
            <div className="contact-card" style={{ borderLeft: "4px solid #9a2be2" }}>
              <div className="role">Faculty Co-ordinator</div>
              <div className="name">Mrs.M.Thulasi Devi</div>
              <div className="designation">AP I/IT Department</div>
            </div>
          </motion.div>
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
                <div className="incharge-name">{event.incharge}</div>
                <div className="incharge-designation">{event.designation}</div>
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

      
        
        {/* Website Developers Section */}
        <motion.div
          className="contact-section developer-section"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Website Developed By</h2>
          <div className="developer-credits">
            <div className="developer-item">Sibiah R - III IT</div>
            <div className="developer-item">Sobika Joleen G J - III IT</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

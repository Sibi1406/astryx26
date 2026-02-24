import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./event.css";
import RegistrationForm from "./RegistrationForm";
import { motion } from "framer-motion";

export default function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const eventDetails = {
    // ... (rest of the detailed data stays the same)
    paperpresentation: {
      title: "PAPER PARADE",
      date: "March 14, 2026",
      time: "Morning Session",
      location: "C2L01",
      about: "A Paper Presentation event where participants showcase research insights and innovative solutions.",
      prize: [{ place: "1st Place", amount: "Shield + Certificate" }, { place: "2nd Place", amount: "Shield + Certificate" }, { place: "3rd Place", amount: "Shield + Certificate" }],
      team: { size: "2-3 members" },
      coordinator: { faculty: "Mr.S.Sakkaravarthi", student: "Poorinma A, Vignesh S, Varuna, Lokesh" }
    },
    posterpresentation: {
      title: "THINK & INK",
      date: "March 14, 2026",
      time: "10:00 AM - 11:00 AM",
      location: "Data Science Lab",
      about: "Poster Designing & Presentation blending creativity and communication skills.",
      team: { size: "Individual or participation" },
      coordinator: { faculty: "Mrs.G.Sivasathiya", student: "Gayathri K, Naveen Kumar R S, Hari Eshwar, Harini K" },
      prize: [{ place: "1st Place", amount: "Cash Prize + Certificate" }, { place: "2nd Place", amount: "Cash Prize + Certificate" }, { place: "3rd Place", amount: "Cash Prize + Certificate" }]
    },
    projectexpo: {
      title: "PROTOSHOW",
      date: "March 14, 2026",
      time: "11:15 AM - 12:15 PM",
      location: "Mechanical Seminar Hall",
      about: "Project expo platform for innovative ideas and working models.",
      topics: ["AR / VR", "IoT", "Cyber Security", "Cloud Computing", "Design & Innovation"],
      team: { size: "max 4 members" },
      coordinator: { faculty: "Mrs.M.Rethinakumari", student: "Jeyadevi S, Vimal S, Saranya, Sabari" },
      prize: [{ place: "1st Place", amount: "Cash Prize + Certificate" }, { place: "2nd Place", amount: "Cash Prize + Certificate" }, { place: "3rd Place", amount: "Cash Prize + Certificate" }]
    },
    techtraid: {
      title: "TECH-TRAID",
      date: "March 14, 2026",
      time: "Afternoon Session",
      location: "C2L02",
      about: "Team-based technical event testing knowledge, logic, and creativity through riddles and pictionary.",
      team: { size: "2 members" },
      coordinator: { faculty: "Dr.K.Palraj", student: "Jeeva Sri M, Muniraj M, Abhinaya, Siva" },
      prize: [{ place: "1st Place", amount: "Shield + Certificate" }, { place: "2nd Place", amount: "Shield + Certificate" }, { place: "3rd Place", amount: "Shield + Certificate" }]
    },
    codearena: {
      title: "CODE ARENA",
      date: "March 14, 2026",
      time: "Afternoon Session",
      location: "Data Science Lab",
      about: "Technical competition with MCQ and Debugging rounds.",
      team: { size: "2 members" },
      coordinator: { faculty: "Dr.G.Mareeswari", student: "Poongathai, Varun V, Thiraviyakumar, Santhiya" },
      prize: [{ place: "1st Place", amount: "Cash Prize + Certificate" }, { place: "2nd Place", amount: "Cash Prize + Certificate" }, { place: "3rd Place", amount: "Cash Prize + Certificate" }]
    },
    mysterymanor: {
      title: "MYSTERY MANOR",
      date: "March 14, 2026",
      time: "Morning Session",
      location: "Data Science Lab",
      about: "Detective game inspired by Sherlock Holmes challenging observation and logical reasoning.",
      team: { size: "2-3 members" },
      coordinator: { faculty: "Mrs.P.Ramya", student: "Valli M, Sridhar N, Ram Selvalakshmi, Arun" },
      prize: [{ place: "1st Place", amount: "Shield + Certificate" }, { place: "2nd Place", amount: "Shield + Certificate" }, { place: "3rd Place", amount: "Shield + Certificate" }]
    },
    themaestro: {
      title: "THE MAESTRO",
      date: "March 14, 2026",
      time: "Afternoon Session",
      location: "Mechanical Seminar Hall",
      about: "Business simulation event testing entrepreneurial thinking.",
      coordinator: { faculty: "Mrs.M.Thulasi Devi", student: "Vijayakumar R, Harini M, Suresh, Dhanya" },
      prize: [{ place: "1st Place", amount: "Cash Prize + Certificate" }, { place: "2nd Place", amount: "Cash Prize + Certificate" }, { place: "3rd Place", amount: "Cash Prize + Certificate" }]
    },
    blabberbox: {
      title: "BLABBER BOX",
      date: "March 14, 2026",
      time: "Afternoon Session",
      location: "C2L02",
      about: "Public speaking and communication event.",
      coordinator: { faculty: "Mrs.M.Thulasi Devi", student: "Rashith Meeran A, Selvagayathri P, Vishal Nanda, Pooja" },
      prize: [{ place: "1st Place", amount: "Shield + Certificate" }, { place: "2nd Place", amount: "Shield + Certificate" }, { place: "3rd Place", amount: "Shield + Certificate" }]
    },
    lyricalhunt: {
      title: "LYRIX ARENA",
      date: "March 14, 2026",
      time: "Morning Session",
      location: "C2L01",
      about: "A mix of music and debate events.",
      coordinator: { faculty: "Mrs.B.Thevahi", student: "Jeyalaakshmi A, Saravanankumar V, Shri Vedhisha, Maharaja" },
      prize: [{ place: "1st Place", amount: "Shield + Certificate" }, { place: "2nd Place", amount: "Shield + Certificate" }, { place: "3rd Place", amount: "Shield + Certificate" }]
    },
    franchisetable: {
      title: "THE FRANCHISE TABLE",
      date: "March 14, 2026",
      time: "Morning Session",
      location: "Civil Seminar Hall",
      about: "Entrepreneurship case study and franchising analysis.",
      coordinator: { faculty: "Mrs.A.Alagulaksmi", student: "Saraswathi, Vishal Kumar, Karthik M, Karthiga" },
      prize: [{ place: "1st Place", amount: "Shield + Certificate" }, { place: "2nd Place", amount: "Shield + Certificate" }, { place: "3rd Place", amount: "Shield + Certificate" }]
    },
    humour404: {
      title: "404 HUMOUR NOT FOUND",
      date: "March 14, 2026",
      time: "Afternoon Session",
      location: "Data Structure Lab",
      about: "Meme creation event using Canva to express humor and creativity.",
      team: { size: "Individual or 2 members" },
      coordinator: { faculty: "Mrs.M.Rethinakumari", student: "Pramila Devi, Parasuram C A, Iptika, Vishal" },
      prize: [{ place: "1st Place", amount: "Shield + Certificate" }, { place: "2nd Place", amount: "Shield + Certificate" }, { place: "3rd Place", amount: "Shield + Certificate" }]
    }
  };

  const details = eventDetails[eventId] || eventDetails["codearena"];

  const handleRegister = () => setShowRegistrationForm(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [eventId]);

  const studentCoordinators = details.coordinator?.student
    ? (Array.isArray(details.coordinator.student) ? details.coordinator.student : details.coordinator.student.split(",").map((s) => s.trim()))
    : [];

  const facultyCoordinator = details.coordinator?.faculty || "TBA";

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div
      className="event-details-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="details-container">
        <motion.div
          className="details-header-wrapper"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="details-header">
            <h1 className="details-title" style={{ fontFamily: 'Orbitron', color: '#00d9ff' }}>{details.title}</h1>
            <div className="details-meta">
              <div className="meta-item"><span className="meta-label">Date:</span><span>{details.date}</span></div>
              <div className="meta-item"><span className="meta-label">Time:</span><span>{details.time}</span></div>
              <div className="meta-item"><span className="meta-label">Location:</span><span>{details.location}</span></div>
            </div>
          </div>
          <motion.button
            className="register-btn-top"
            onClick={handleRegister}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 217, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </motion.div>

        <motion.div
          className="event-poster-area"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="poster-placeholder">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="300" fill="rgba(0, 217, 255, 0.05)" />
              <text x="200" y="150" textAnchor="middle" fontSize="24" fill="#00d9ff" style={{ fontFamily: 'Orbitron' }}>
                {details.title}
              </text>
            </svg>
          </div>
        </motion.div>

        <motion.div className="section" variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div className="section-title" style={{ fontFamily: 'Orbitron', fontSize: '1.2rem' }}>About the Event</div>
          <div className="section-content" style={{ whiteSpace: "pre-line" }}>{details.about}</div>
          {details.topics && (
            <div style={{ marginTop: '15px' }}>
              <strong>Topics include:</strong>
              <ul style={{ marginTop: '10px' }}>
                {details.topics.map((topic, index) => (<li key={index}>{topic}</li>))}
              </ul>
            </div>
          )}
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <motion.div className="section" variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <div className="section-title" style={{ fontFamily: 'Orbitron', fontSize: '1.2rem' }}>Team Details</div>
            <div className="section-content">
              <ul><li><strong>Team Size:</strong> {details.team?.size || "Not specified"}</li></ul>
            </div>
          </motion.div>

          <motion.div className="section" variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <div className="section-title" style={{ fontFamily: 'Orbitron', fontSize: '1.2rem' }}>Coordinators</div>
            <div className="section-content">
              <strong>Student:</strong> {studentCoordinators.join(", ") || "TBA"} <br />
              <strong>Faculty:</strong> {facultyCoordinator}
            </div>
          </motion.div>
        </div>

        <motion.div className="section" variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div className="section-title" style={{ fontFamily: 'Orbitron', fontSize: '1.2rem' }}>Prize Pool</div>
          <div className="section-content">
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              {details.prize.map((item, index) => (
                <li key={index}><strong>{item.place}:</strong> {item.amount}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <RegistrationForm isOpen={showRegistrationForm} onClose={() => setShowRegistrationForm(false)} eventId={eventId} />
    </motion.div>
  );
}

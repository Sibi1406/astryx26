import './event.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import RegistrationForm from './RegistrationForm';

export default function Events() {
  const navigate = useNavigate();
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const openEvent = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  const technicalEvents = [
    { name: "Paper Parade", eventId: "paperpresentation", date: "March 14, 2026", location: "IT Dept", image: "https://d7c2r9g9.delivery.rocketcdn.me/wp-content/uploads/poster-presentation-example-powerpoint-1024x585.png" },
    { name: "Think & Ink", eventId: "posterpresentation", date: "March 14, 2026", location: "IT Dept", image: "https://images.template.net/wp-content/uploads/2014/12/181.jpg" },
    { name: "Prompt Wars", eventId: "vibecoding", date: "March 14, 2026", location: "IT Dept", image: "https://miro.medium.com/v2/resize:fit:1200/1*YyDadWTE5eH6rz136fO1aw.png" },
    { name: "Tech-Traid", eventId: "techtraid", date: "March 14, 2026", location: "IT Dept", image: "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg" },
    { name: "Code Arena", eventId: "codearena", date: "March 14, 2026", location: "IT Dept", image: "https://sjinnovation.com/sites/default/files/pictures/blog-post/debug-1024x646.jpg" }
  ];

  const nonTechnicalEvents = [
    { name: "Mystery Manor", eventId: "mysterymanor", date: "March 14, 2026", location: "IT Dept", image: "https://tse1.mm.bing.net/th/id/OIP.Vtw9fF_Nh-HklnnWNRHbXQHaEY?pid=Api&h=220&P=0" },
    { name: "The Maestro", eventId: "themaestro", date: "March 14, 2026", location: "IT Dept", image: "https://tse2.mm.bing.net/th/id/OIP.ND-f8l8GqhYEXy_yYG-M-AHaD4?pid=Api&h=220&P=0" },
    { name: "Blabber Box", eventId: "blabberbox", date: "March 14, 2026", location: "IT Dept", image: "https://tse1.mm.bing.net/th/id/OIP.zdVc1nljewgC5dfZRfSQfgHaDy?pid=Api&h=220&P=0" },
    { name: "Lyrix Arena", eventId: "lyricalhunt", date: "March 14, 2026", location: "IT Dept", image: "https://tse3.mm.bing.net/th/id/OIP.D0E6ZiFm35HyZ5p63ySDrQHaDl?pid=Api&h=220&P=0" },
    { name: "The Franchise Table", eventId: "franchisetable", date: "March 14, 2026", location: "IT Dept", image: "https://tse1.mm.bing.net/th/id/OIP.qfeS42uuBov7gbhu3G0fmQHaEK?pid=Api&h=220&P=0" },
    { name: "404 Humour not Found", eventId: "humour404", date: "March 14, 2026", location: "IT Dept", image: "https://tse2.mm.bing.net/th/id/OIP.QgV6Vqh6NxvSXEWzE-OLKwHaHa?pid=Api&h=220&P=0" }
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
      className="event-details-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="top-controls" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="symposium-title" style={{ fontFamily: 'Orbitron' }}></div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', justifyContent: 'space-between', paddingRight: '20px' }}>
        <motion.h1 className="page-title" variants={fadeInUp} initial="initial" animate="animate" style={{ fontFamily: 'Orbitron', margin: 0 }}>
          TECHNICAL EVENTS
        </motion.h1>
        <button className="register" onClick={() => setShowRegistrationForm(true)} style={{ fontFamily: 'Orbitron', width: 'auto', padding: '10px 30px', whiteSpace: 'nowrap' }}>Register Now</button>
      </div>

      <motion.div className="card-container" variants={stagger} initial="initial" animate="animate">
        {technicalEvents.map((event, index) => (
          <motion.div
            className="event-card"
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 217, 255, 0.2)" }}
          >
            <h2 style={{ fontFamily: 'Orbitron', fontSize: '1.2rem' }}>{event.name}</h2>
            <div className="event-image">
              <img src={event.image} alt={event.name} className="event-poster" />
            </div>
            <p className="info">{event.date} • {event.location}</p>
            <button className="register" onClick={() => openEvent(event.eventId)}>Explore</button>
          </motion.div>
        ))}
      </motion.div>

      <motion.h1 className="page-title" variants={fadeInUp} initial="initial" animate="animate" style={{ fontFamily: 'Orbitron', marginTop: '60px', marginBottom: '30px' }}>
        NON-TECHNICAL EVENTS
      </motion.h1>

      <motion.div className="card-container" variants={stagger} initial="initial" animate="animate">
        {nonTechnicalEvents.map((event, index) => (
          <motion.div
            className="event-card"
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(138, 43, 226, 0.2)" }}
          >
            <h2 style={{ fontFamily: 'Orbitron', fontSize: '1.2rem' }}>{event.name}</h2>
            <div className="event-image">
              <img src={event.image} alt={event.name} className="event-poster" />
            </div>
            <p className="info">{event.date} • {event.location}</p>
            <button className="register" onClick={() => openEvent(event.eventId)}>Register Now</button>
          </motion.div>
        ))}
      </motion.div>

      <RegistrationForm isOpen={showRegistrationForm} onClose={() => setShowRegistrationForm(false)} />
    </motion.div>
  );
}

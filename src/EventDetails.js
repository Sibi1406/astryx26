import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./event.css";
import RegistrationForm from "./RegistrationForm";

export default function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const eventDetails = {
    codeconquer: {
      title: "TECHPRESENTX",
      date: "March 14, 2026",
      time: "09:00 AM",
      location: "Department of Information Technology",
      about:
        "TECHPRESENTX is a Paper Presentation event. It is a technical event where participants showcase their ideas, research insights, and innovative solutions on emerging technologies. This platform encourages students to explore real-world problems, think critically, and present their concepts with clarity and confidence. It’s an opportunity to demonstrate knowledge, creativity, and presentation skills before a panel of judges.(Team Composition: 2-3 members)",
      prize: [
        { place: "1st Place", amount: "Details" },
        { place: "2nd Place", amount: "Details" },
        { place: "3rd Place", amount: "Details" },
      ],

    },
    terrain: {
      title: "THINK & INK",
      date: "March 14, 2026",
      time: "9:00 AM",
      location: "Department of Information Technology",
      about:
        "Poster Designing & Presentation is a dynamic event that blends creativity, innovation, and communication skills. Participants will design an engaging and impactful poster based on the given themes and present their ideas before the judges within the allotted time.The event is divided into Technical and Non-Technical categories, encouraging students to express their thoughts on social responsibility, creativity, emerging technologies, and future innovations.Through visual storytelling and confident presentation, participants must clearly convey their concept, originality, and relevance of the theme. The event duration is 1 hour 30 minutes.This competition evaluates creativity, clarity of thought, design aesthetics, innovation, and presentation skills.(Individual Participation)",
      prize: [
        { place: "1st Place", amount: "details" },
        { place: "2nd Place", amount: "details" },
        { place: "3rd Place", amount: "details" },
      ],
    },
    sustaino: {
      title: "PROTOSHOW",
      date: "March 14, 2026",
      time: "9:00 PM",
      location: "Department of Information Technology",
      price: "₹100.00",
      about:
        "Details",
      prize: [
        { place: "1st Place", amount: "₹5000 + Certificate" },
        { place: "2nd Place", amount: "₹3000 + Certificate" },
        { place: "3rd Place", amount: "₹1000 + Certificate" },
      ],
    },
    techtraid: {
      title: "TECH-TRAID",
      date: "Feb 14, 2026",
      time: "11:00 AM",
      location: "REC",
      price: "₹90.00",
      about:
        "Technical trivia and debugging competition. Test your knowledge and problem-solving abilities in this fast-paced technical event.",
      prize: [
        { place: "1st Place", amount: "₹4000 + Certificate" },
        { place: "2nd Place", amount: "₹2500 + Certificate" },
        { place: "3rd Place", amount: "₹1500 + Certificate" },
      ],
    },
    codearena: {
      title: "CODE ARENA",
      date: "Feb 14, 2026",
      time: "03:00 PM",
      location: "REC",
      price: "₹100.00",
      about:
        "Competitive programming event. Solve complex algorithmic problems in a time-bound competition to prove your coding excellence.",
      prize: [
        { place: "1st Place", amount: "₹5000 + Certificate" },
        { place: "2nd Place", amount: "₹3000 + Certificate" },
        { place: "3rd Place", amount: "₹1000 + Certificate" },
      ],
    },
    mysterymanor: {
      title: "MYSTERY MANOR",
      date: "Feb 15, 2026",
      time: "04:00 PM",
      location: "AUD",
      price: "₹60.00",
      about:
        "A mystery-solving game where teams work together to solve puzzles and uncover secrets in an engaging event.",
      prize: [
        { place: "1st Place", amount: "₹3000 + Certificate" },
        { place: "2nd Place", amount: "₹1500 + Certificate" },
        { place: "3rd Place", amount: "₹500 + Certificate" },
      ],
    },
    theboardroom: {
      title: "THE BOARDROOM",
      date: "Feb 16, 2026",
      time: "05:00 PM",
      location: "GND",
      price: "₹70.00",
      about:
        "Business simulation event. Test your entrepreneurial and strategic thinking skills in a realistic business scenario.",
      prize: [
        { place: "1st Place", amount: "₹3500 + Certificate" },
        { place: "2nd Place", amount: "₹2000 + Certificate" },
        { place: "3rd Place", amount: "₹1000 + Certificate" },
      ],
    },
    blabberbox: {
      title: "BLABBER BOX",
      date: "Feb 17, 2026",
      time: "06:00 PM",
      location: "OUT",
      price: "₹50.00",
      about:
        "Public speaking and communication event. Showcase your presentation and speaking skills on the big stage.",
      prize: [
        { place: "1st Place", amount: "₹2500 + Certificate" },
        { place: "2nd Place", amount: "₹1500 + Certificate" },
        { place: "3rd Place", amount: "₹500 + Certificate" },
      ],
    },
    debate: {
      title: "TUNE TREK / DEBATE",
      date: "Feb 15, 2026",
      time: "07:00 PM",
      location: "AUD",
      price: "₹40.00",
      about:
        "A mix of music and debate events. Express yourself through music performances or engage in heated competitive debates.",
      prize: [
        { place: "1st Place", amount: "₹2000 + Certificate" },
        { place: "2nd Place", amount: "₹1200 + Certificate" },
        { place: "3rd Place", amount: "₹500 + Certificate" },
      ],
    },
    franchisetable: {
      title: "THE FRANCHISE TABLE",
      date: "Feb 15, 2026",
      time: "08:00 PM",
      location: "AUD",
      price: "₹65.00",
      about:
        "Entrepreneurship case study event. Analyze and solve real-world business problems and franchising scenarios.",
      prize: [
        { place: "1st Place", amount: "₹3000 + Certificate" },
        { place: "2nd Place", amount: "₹1800 + Certificate" },
        { place: "3rd Place", amount: "₹800 + Certificate" },
      ],
    },
  };

  const details = eventDetails[eventId] || eventDetails["codeconquer"];

  const handleRegister = () => {
    setShowRegistrationForm(true);
  };

  return (
    <div className="event-details-page">
      <div className="details-container">
        <button className="back-link" onClick={() => navigate("/events")}>
          ← Back to events
        </button>

        <div className="details-header-wrapper">
          <div className="details-header">
            <h1 className="details-title">{details.title}</h1>
            <div className="details-meta">
              <div className="meta-item">
                <span className="meta-label">Date:</span>
                <span>{details.date}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Time:</span>
                <span>{details.time}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Location:</span>
                <span>{details.location}</span>
              </div>
            </div>
          </div>
          <button className="register-btn-top" onClick={handleRegister}>
            Register Now
          </button>
        </div>

        <div className="event-poster-area">
          <div className="poster-placeholder">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="300" fill="rgba(0, 217, 255, 0.1)"/>
              <text x="200" y="150" textAnchor="middle" fontSize="24" fill="rgba(0, 217, 255, 0.5)">
                {details.title}
              </text>
            </svg>
          </div>
        </div>

        <div className="section">
          <div className="section-title">
            <span className="section-icon">ℹ️</span>
            About the Event
          </div>
          <div className="section-content">{details.about}</div>
        </div>

        <div className="section">
          <div className="section-title">
            <span className="section-icon">👥</span>
            Who Can Participate
          </div>
          <div className="section-content">
            <ul>
              <li>Open to all college students</li>
              <li>Students from any year of study can participate</li>
              <li>Students from any department are eligible</li>
              <li>No restrictions on academic background</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="section-title">
            <span className="section-icon">🎁</span>
            Prize Pool
          </div>
          <div className="section-content">
            <ul>
              {details.prize.map((item, index) => (
                <li key={index}>
                  <strong>{item.place}:</strong> {item.amount}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="section-title">
            <span className="section-icon">📋</span>
            Rules & Regulations
          </div>
          <div className="section-content">
            <ul>
              <li>
                <strong>Timing:</strong> Event duration will be decided before the event
              </li>
              <li>
                <strong>Eligibility:</strong> Only currently enrolled students are eligible
              </li>
              <li>
                <strong>Device Requirements:</strong> Participants must arrange their own devices
              </li>
              <li>
                <strong>Code of Conduct:</strong> Professional conduct is mandatory
              </li>
              <li>
                <strong>Judging Criteria:</strong> Code quality, innovation, and efficiency
              </li>
              <li>
                <strong>Disqualification:</strong> Any form of plagiarism or misconduct will
                result in disqualification
              </li>
              <li>
                <strong>Winners Announcement:</strong> Winners will be announced post-event
              </li>
              <li>
                <strong>Decision Final:</strong> Judge's decision will be final and binding
              </li>
            </ul>
          </div>
        </div>
      </div>

      <RegistrationForm
        isOpen={showRegistrationForm}
        onClose={() => setShowRegistrationForm(false)}
        eventId={eventId}
      />
    </div>
  );
}

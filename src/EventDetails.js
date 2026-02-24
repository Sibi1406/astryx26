import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./event.css";
import RegistrationForm from "./RegistrationForm";

export default function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const eventDetails = {
    paperpresentation: {
      title: "PAPER PARADE",
      date: "March 14, 2026",
      time: "Morning Session",
      location: "C2L01",
      about:
        "TECHPRESENTX is a Paper Presentation event. It is a technical event where participants showcase their ideas, research insights, and innovative solutions on emerging technologies. This platform encourages students to explore real-world problems, think critically, and present their concepts with clarity and confidence. It’s an opportunity to demonstrate knowledge, creativity, and presentation skills before a panel of judges.",
      prize: [
        { place: "1st Place", amount: "Shield + Certificate" },
        { place: "2nd Place", amount: "Shield + Certificate" },
        { place: "3rd Place", amount: "Shield + Certificate" },
      ],
      team: { size: "2-3 members" },
      coordinator: {
        faculty: "Mr.S.Sakkaravarthi",
        student: "Poorinma A, Vignesh S, Varuna, Lokesh",
      },
    },
    posterpresentation: {
      title: "THINK & INK",
      date: "March 14, 2026",
      time: "10:00 AM -11:00 AM",
      location: "Data Science Laboratory",
      about:
        "Poster Designing & Presentation is a dynamic event that blends creativity, innovation, and communication skills. Participants will design an engaging and impactful poster based on the given themes and present their ideas before the judges within the allotted time.The event is divided into Technical and Non-Technical categories, encouraging students to express their thoughts on social responsibility, creativity, emerging technologies, and future innovations.Through visual storytelling and confident presentation, participants must clearly convey their concept, originality, and relevance of the theme. The event duration is 1 hour 30 minutes.This competition evaluates creativity, clarity of thought, design aesthetics, innovation, and presentation skills.",
        team: { size:"Individual or participation"},
        coordinator: {
        faculty: "Mrs.G.Sivasathiya",
        student: "Gayathri K,Naveen Kumar R S, Hari Eshwar , Harini K",
      },
      prize: [
        { place: "1st Place", amount: "Cash Prize + Certificate" },
        { place: "2nd Place", amount: "Cash Prize + Certificate" },
        { place: "3rd Place", amount: "Cash Prize + Certificate" },
      ],
    },
    projectexpo: {
  title: "PROTOSHOW",
  date: "March 14, 2026",
  time: "11:15 AM - 12:15 PM",
  location: "Mechanical seminar hall",
  about:
    "PROTOSHOW is a project expo organized by the Department of Information Technology, providing a platform for students to present innovative ideas, working models, and technical solutions. The event encourages creativity, practical learning, and problem-solving through real-world applications.",
  topics: [
    "AR / VR",
    "Internet of Things (IoT)",
    "Cyber Security",
    "Cloud Computing",
    "Design & Innovation (Environment-related Projects)",
    
  ],
  team: { size:"max 4 members"},
  coordinator: {
        faculty: "Mrs.M.Rethinakumari",
        student: "Jeyadevi S,Vimal S,Saranya,Sabari",
      },
  prize: [
    { place: "1st Place", amount: "Cash Prize + Certificate" },
    { place: "2nd Place", amount: "Cash Prize + Certificate" },
    { place: "3rd Place", amount: "Cash Prize + Certificate" },
  ],
},
    techtraid: {
  title: "TECH-TRAID",
  date: "March 14, 2026",
  time: "Afternoon Session",
  location: "C2L02",
  about:
    "TECH-TRAID is a team-based technical event designed to test participants’ knowledge, logic, creativity, and teamwork through multiple engaging rounds.\n\n" +
    "• Round 1 – Tech Toss (Connections): Teams identify and link related technical concepts.\n" +
    "• Round 2 – Pass the Byte (Riddles): Solve technical and logical riddles.\n" +
    "• Round 3 – Pixel Pictionary: One member draws a technical term while the other guesses it.\n\n" ,
  team: {
    size: "2 members per team"
  },
  coordinator: {
        faculty: "Dr.K.Palraj",
        student: "Jeeva Sri M,Muniraj M,Abhinaya,Siva",
      },
  prize: [
    { place: "1st Place", amount: "Shield + Certificate" },
    { place: "2nd Place", amount: "Shield + Certificate" },
    { place: "3rd Place", amount: "Shield + Certificate" }
  ],
},
    codearena: {
      title: "CODE ARENA",
      date: "March 14, 2026",
      time: "Afternoon Session",
      location: "Data Science Laboratory",
      about:
        "CODE ARENA is a technical competition designed to test participants’ technical knowledge, logical thinking, and coding skills through multiple challenging rounds.\n\n" +
    "Round 1 – MCQ:\n" +
    "• Emerging Technologies\n" +
    "• Engineering Fundamentals\n" +
    "• Technology in Daily Life\n" +
    "• Logo to Invention\n\n" +
    "Round 2 – Code Debugging:\n" +
    "• Debugging programs in Python / C / Java (participant’s choice)",
      team: { size:"2 members per team"},
      coordinator: {
        faculty: "Dr.G.Mareeswari",
        student: "Poongathai,Varun V,Thiraviyakumar,Santhiya",
      },
        prize: [
        { place: "1st Place", amount: "Cash Prize + Certificate" },
        { place: "2nd Place", amount: "Cash Prize + Certificate" },
        { place: "3rd Place", amount: "Cash Prize + Certificate" },
      ],
    },
    mysterymanor: {
      title: "MYSTERY MANOR",
      date: "March 14, 2026",
      time: "Morning Session",
      location: "Data Science Laboratory",
      about:
  "MYSTERY MANOR is a non-technical detective game inspired by Sherlock Holmes that challenges participants’ observation, logical reasoning, and problem-solving skills through an immersive mystery-solving experience.\n\n" +
  "• Round 1 – Crime Scene Chronicles\n" +
  "• Round 2 – The Puzzle of Proofs.\n" +
  "• Round 3 – The Final Verdict\n",
  coordinator: {
        faculty: "Mrs.P.Ramya",
        student: "Valli M,Sridhar N,Ram Selvalakshmi,Arun",
      },
      team: { size: "2-3 members" },
        prize: [
        { place: "1st Place", amount: "Shield + Certificate" },
        { place: "2nd Place", amount: "Shield + Certificate" },
        { place: "3rd Place", amount: "Shield + Certificate" },
      ],
    },
    themaestro: {
      title: "THE MAESTRO",
      date: "March 14, 2026",
      time: "Afternoon Session",
      location: "Mechanical seminar hall",
      about:
        "Business simulation event. Test your entrepreneurial and strategic thinking skills in a realistic business scenario.",
      coordinator: {
        faculty: "Mrs.M.Thulasi Devi",
        student: "Vijayakumar R, Harini M, Suresh,Dhanya",
      },
        prize: [
        { place: "1st Place", amount: "Cash Prize + Certificate" },
        { place: "2nd Place", amount: "Cash Prize + Certificate" },
        { place: "3rd Place", amount: "Cash Prize + Certificate" },
      ],
    },
    blabberbox: {
      title: "BLABBER BOX",
      date: "March 14, 2026",
      time: "Afternoon Session",
      location: "C2L02",
      about:
        "Public speaking and communication event. Showcase your presentation and speaking skills on the big stage.",
      coordinator: {
        faculty: "Mrs.M.Thulasi Devi",
        student: "Rashith Meeran A, Selvagayathri P, Vishal Nanda, Pooja",
      },
        prize: [
        { place: "1st Place", amount: "Shield + Certificate" },
        { place: "2nd Place", amount: "Shield + Certificate" },
        { place: "3rd Place", amount: "Shield + Certificate" },
      ],
    },
    lyricalhunt: {
      title: "LYRIX ARENA",
      date: "March 14, 2026",
      time: "Morning Session",
      location: "C2L01",
      about:
        "A mix of music and debate events. Express yourself through music performances or engage in heated competitive debates.",
      coordinator: {
        faculty: "Mrs.B.Thevahi",
        student: "Jeyalaakshmi A, Saravanankumar V, Shri Vedhisha, Maharaja",
      },
        prize: [
        { place: "1st Place", amount: "Shield + Certificate" },
        { place: "2nd Place", amount: "Shield + Certificate" },
        { place: "3rd Place", amount: "Shield + Certificate" },
      ],
    },
    franchisetable: {
      title: "THE FRANCHISE TABLE",
      date: "March 14, 2026",
      time: "Morning Session",
      location: "Civil seminar hall",
      about:
        "Entrepreneurship case study event. Analyze and solve real-world business problems and franchising scenarios.",
      coordinator: {
        faculty: "Mrs.A.Alagulaksmi",
        student: "Saraswathi, Vishal Kumar, Karthik M, Karthiga",
      },
        prize: [
        { place: "1st Place", amount: "Shield + Certificate" },
        { place: "2nd Place", amount: "Shield + Certificate" },
        { place: "3rd Place", amount: "Shield + Certificate" },
      ],
    },
    humour404: {
      title: "404 HUMOUR NOT FOUND",
      date: "March 14, 2026",
      time: "Afternoon Session",
      location: "Data Structure Laboratory",
      about:
        "The Meme Creation Event is a fun and creative competition where you can express your ideas through humor. It’s your chance to show your creativity, imagination, and smart thinking in a simple and entertaining way.Create original memes, spread smiles, and enjoy the fun atmosphere. This event is all about creativity, positivity, and having a great time together.\n\n" +
        "• Time Limit: Participants will be given 20–30 minutes to create a meme.\n" +
  "• Theme Announcement: Meme themes will be given on the spot during the event.\n" +
  "• Design Tool: Memes must be created using Canva only.\n" +
  "• Rounds: A total of two rounds will be conducted.\n" +
  "• Content Restrictions: AI tools such as ChatGPT, Gemini, Meta AI, etc., must not be used for content creation. Online sources are allowed only for image collection and not for content or ideas.\n" +
  "• Judging Criteria: Memes should be funny, attractive, creative, and unique.\n\n",
      
      team: { size: "Individual or 2 members per team" },
        coordinator: {
        faculty: "Mrs.M.Rethinakumari",
        student: "Pramila Devi, Parasuram C A, Iptika, Vishal",
      },
        prize: [
        { place: "1st Place", amount: "Shield + Certificate" },
        { place: "2nd Place", amount: "Shield + Certificate" },
        { place: "3rd Place", amount: "Shield + Certificate" },
      ],
    },
  };

  const details = eventDetails[eventId] || eventDetails["codeconquer"];

  const handleRegister = () => {
    setShowRegistrationForm(true);
  };

  useEffect(() => {
    // Ensure the page is at the top when opening an event detail
    window.scrollTo({ top: 0, left: 0 });
  }, [eventId]);

  // Prepare coordinators data for display
  const studentCoordinators = details.coordinator?.student
    ? Array.isArray(details.coordinator.student)
      ? details.coordinator.student
      : details.coordinator.student.split(",").map((s) => s.trim())
    : [];

  const facultyCoordinator = details.coordinator?.faculty || "TBA";

  return (
    <div className="event-details-page">
      <div className="details-container">

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
          <div className="section-content" style={{ whiteSpace: "pre-line" }}>{details.about}</div>
          {details.topics && (
      <>
        <p><strong>Topics include:</strong></p>
        <ul>
          {details.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </>
    )}
        </div>

        <div className="section">
  <div className="section-title">
    <span className="section-icon">👥</span>
    Team Details
  </div>

  <div className="section-content">
    <ul>
      <li>
        <strong>Team Size:</strong> {details.team?.size}
      </li>
    </ul>
  </div>
</div>

        <div className="section">
          <div className="section-title">
            <span className="section-icon">📞</span>
            Coordinators
          </div>
          <div className="section-content">
            <ul>
              <li>
                <strong>Student Coordinator:</strong>
                {studentCoordinators.length > 0 ? (
                  <ul>
                    {studentCoordinators.map((name, idx) => (
                      <li key={idx}>{name}</li>
                    ))}
                  </ul>
                ) : (
                  " TBA"
                )}
              </li>
              <li>
                <strong>Faculty Coordinator:</strong> {facultyCoordinator}
              </li>
            </ul>
          </div>
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

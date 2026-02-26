import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./event.css";
import Footer from "./Footer";
import RegistrationForm from "./RegistrationForm";
import { motion } from "framer-motion";
import paperparadeImage from './assets/paperparade.jpeg';
import memecreationImage from './assets/memecreation.jpeg';
import thinkink from './assets/think&ink.jpeg';
import techtraidImage from './assets/techtraid.jpeg';
import promptwarsImage from './assets/promptwar.jpeg';
import codearenaImage from './assets/codearena.jpeg';
import themastroImage from './assets/themastero.jpeg';
import mysterymanorImage from './assets/mysterymanor.jpeg';
import lyrixarenaImage from './assets/lyrixarena.jpeg';
import blabberboxImage from './assets/blabberbox.jpeg';
import franchisetableImage from './assets/iplauction.jpeg';
import { image } from "framer-motion/client";

export default function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const eventDetails = {
    paperpresentation: {
  title: "PAPER PARADE",
  date: "March 14, 2026",
  time: "Morning Session",
  location: "Seminar Hall",
  image: paperparadeImage,
  about: "Paper Parade is a technical paper presentation event where participants showcase their ideas, research insights, and innovative solutions on emerging technologies. This event provides a platform for students to analyze real-world problems, explore futuristic concepts, and propose meaningful solutions through structured research and clear presentation. Participants are expected to demonstrate technical knowledge, originality, and effective communication while presenting before a panel of judges.\n\nTopics for Presentation: Open topics.",
  prize: [
    { place: "1st Place", amount: "₹ 1000 Cash Prize + Certificate" },
    { place: "2nd Place", amount: "₹ 500 Cash Prize + Certificate" }
    
  ],
  team: { size: "2 members" },
  coordinator: {
    faculty: "Mr.S.Sakkaravarthi",
    student: "Poornima A, Vignesh S, Varuna Shree A, Lokesh R"
  }
},
    posterpresentation: {
  title: "THINK & INK",
  date: "March 14, 2026",
  time: "10:00 AM - 11:00 AM",
  location: "Data Science Lab",
  image: thinkink,
  about: "Think & Ink is a Poster Designing and Presentation event that encourages participants to express powerful ideas through visual creativity and effective communication. The event provides a platform to showcase social awareness, technological understanding, innovation, and artistic skills through impactful poster designs. Participants are required to design a poster based on the given themes and present the concept clearly before the judges.\n\nNon-Technical Themes:\n1. From Youth to Vote: My Voice, My Responsibility\n\n2. Invent the Game. Inspire the World\n\nTechnical Themes:\n1. Chatbots & Virtual Assistants: The Smart Voices of Tomorrow\n\n2. 5G Today, 6G Tomorrow: Connecting the Future\n\n",
  team: { size: "Individual participation" },
  coordinator: {
    faculty: "Mrs.G.Sivasathiya",
    student: "Gayathri K, Naveenkumar R S, Hari Eswar M, Harini K"
  },
  prize: [
    { place: "1st Place", amount: "Shield + Certificate" },
    { place: "2nd Place", amount: "Shield + Certificate" },
    { place: "3rd Place", amount: "Shield + Certificate" }
  ]
},
    vibecoding: {
  title: "PROMPT WARS",
  date: "March 14, 2026",
  time: "9:30 AM - 12:30 PM",
  location: "Data Structure Lab",
  image: promptwarsImage,
  about: "Prompt Wars is an AI-powered competitive event where participants battle using creative and strategic prompts to generate impactful AI outputs. The event emphasizes prompt engineering, creativity, and real-world AI applications in a fast-paced challenge format.\n\nRound I – Prompt to Logo:\nParticipants generate a professional and creative logo using AI tools based on a given theme or brand description. This round tests creativity, clarity of prompts, and visual branding skills.\n\nRound II – Prompt to Image:\nParticipants create an AI-generated image from a provided theme or concept such as Future Technology or AI in Daily Life. The focus is on crafting effective prompts to produce visually appealing and meaningful images.\n\nRound III – Build an AI Chatbot:\nParticipants design a basic AI chatbot capable of interacting with users. Suggested ideas include a college assistant bot, FAQ bot, product support bot, or a fun conversational assistant, highlighting practical AI usage.",
  team: { size: "2 members" },
  coordinator: {
    faculty: "Mrs. M. Rethinakumari",
    student: "Jeyadevi S, Vimal S, Saranya S, Shiri Shabari Sudhan P"
  },
  prize: [
    { place: "1st Place", amount: "₹ 1000 Cash Prize + Certificate" },
    { place: "2nd Place", amount: "₹ 500 Cash Prize + Certificate" }
  ]
},
    techtraid: {
  title: "TECH-TRAID",
  date: "March 14, 2026",
  time: "Afternoon Session",
  location: "C2L02",
  image: techtraidImage,
  about: "Tech-Traid is a team-based technical event designed to test participants’ technical knowledge, logical thinking, and creativity through engaging and interactive rounds. The event encourages teamwork, quick thinking, and effective communication while solving technical challenges.\n\nRound 1 – Tech Toss (Connections):\nParticipants identify logical connections between technical terms, concepts, or visuals. This round evaluates analytical thinking and the ability to recognize relationships between technologies.\n\nRound 2 – Pass the Byte (Riddles):\nTeams solve technical and logical riddles that challenge problem-solving skills, reasoning ability, and technical understanding.\n\nRound 3 – Pixel Pictionary:\nOne team member is given a technical term to draw, while the other team member must identify the term within the given time. This round tests creativity, technical vocabulary, and team coordination.",
  team: { size: "2 members" },
  coordinator: {
    faculty: "Dr.K.Palraj",
    student: "Jeeva Sri M, Muniraj M, Abinaya N, SivaKumar M"
  },
  prize: [
    { place: "1st Place", amount: "Shield + Certificate" },
    { place: "2nd Place", amount: "Shield + Certificate" },
    { place: "3rd Place", amount: "Shield + Certificate" }
  ]
},
    codearena: {
  title: "CODE ARENA",
  date: "March 14, 2026",
  time: "Afternoon Session",
  location: "Data Science Lab",
  image: codearenaImage,
  about: "Code Arena is a technical competition designed to evaluate participants’ conceptual understanding and practical programming skills through two structured rounds. The event focuses on problem-solving ability, logical reasoning, and hands-on coding knowledge.\n\nRound 1 – MCQ Assessment:\nThis round tests participants on core technical and general engineering concepts including Emerging Technologies, Engineering Fundamentals, Technology in Daily Life, and Logo to Invention. The objective is to assess awareness, reasoning skills, and application-based understanding.\n\nRound 2 – Code Debugging:\nShortlisted teams advance to the debugging round where participants are required to identify and correct errors in given programs. Programs will be provided in Python, C, or Java, and teams may choose the language of their preference. This round emphasizes analytical thinking, debugging skills, and logical accuracy.",
  team: { size: "2 members" },
  coordinator: {
    faculty: "Dr.G.Mareeswari",
    student: "Poongothai S, Varun V, Thiraviyakumar J M, Santhiya S"
  },
  prize: [
    { place: "1st Place", amount: "Shield + Certificate" },
    { place: "2nd Place", amount: "Shield + Certificate" },
    { place: "3rd Place", amount: "Shield + Certificate" }
  ]
},
    mysterymanor: {
  title: "MYSTERY MANOR",
  date: "March 14, 2026",
  time: "Morning Session",
  location: "C2L01 & C2L02",
  image: mysterymanorImage,
  about: "Mystery Manor is a non-technical detective game inspired by the legendary character Sherlock Holmes. The event challenges participants’ observation skills, logical reasoning, and problem-solving abilities in an engaging and mystery-filled environment.\n\nRound 1 – Crime Scene Chronicles:\nParticipants investigate a simulated crime scene by carefully observing clues, identifying key details, and gathering initial evidence.\n\nRound 2 – The Puzzle of Proofs:\nTeams analyze collected evidence, solve logical puzzles, and connect facts to strengthen their investigation and narrow down possibilities.\n\nRound 3 – The Final Verdict:\nFinalist teams present their conclusions, identify the culprit, and justify their reasoning based on evidence and logical deduction.",
  team: { size: "2–3 members" },
  coordinator: {
    faculty: "Mrs.P.Ramya",
    student: "Valli M, Sridhar N, Ram Selvalakshmi M, Arudayar Arun D"
  },
  prize: [
    { place: "1st Place", amount: "Shield + Certificate" },
    { place: "2nd Place", amount: "Shield + Certificate" },
    { place: "3rd Place", amount: "Shield + Certificate" }
  ]
},
    themaestro: {
      title: "THE MAESTRO",
      date: "March 14, 2026",
      time: "Afternoon Session",
      location: "Seminar Hall",
      image: themastroImage,
      about: `
The Maestro is a multi-round business and leadership simulation event designed to test participants' managerial aptitude, creativity, and decision-making skills.

ROUND 1: MINDSPRINT  
Participants take part in a fast-paced online quiz that evaluates logical thinking, aptitude, managerial awareness, and quick decision-making. Questions focus on reasoning ability, leadership situations, and general awareness. Top-performing participants qualify for the next round.

ROUND 2: MYSTERY BOX CHALLENGE  
Participants receive a box containing random everyday items and are challenged to create a unique business idea or product using them. After a short thinking time, participants present their idea to the judges. This round assesses creativity, innovation, and presentation skills.

ROUND 3: CEO BOARDROOM  
Finalists face real-time managerial scenarios and must respond like a leader under pressure. Judges will ask questions related to decision-making, crisis management, and leadership situations. Participants are evaluated on confidence, presence of mind, and managerial thinking.
  `,
  team: { size: "Individual participation" },    
  coordinator: { faculty: "Mrs.M.Thulasi Devi", student: "Vijayakumar R, Harini M, Suresh R, Dhanya Sankari M" },
      prize: [{ place: "1st Place", amount: "₹ 1000 Cash Prize + Certificate" }, { place: "2nd Place", amount: "₹ 500 Cash Prize + Certificate" }]
    },
    blabberbox: {
  title: "BLABBER BOX",
  date: "March 14, 2026",
  time: "Afternoon Session",
  location: "C2L02",
  image: blabberboxImage,
  about: "Blabber Box is an exciting public speaking event that tests participants' confidence, spontaneity, and communication skills.The event consists of two rounds. \nIn Round 1, participants will choose a photo displayed on the screen, behind which a topic is hidden. Topics will be shared one day prior to the event to help participants prepare.\n\nAfter Round 1, an ice-breaking session with fun activities and refreshments will be conducted.Only five participants will qualify for Round 2.\n\n The Round 2 topics will be displayed on the website in advance. Qualified participants must select their topic based on luck through slot selection or balloon picking and speak on the chosen topic instantly.",
  team: { size: "Individual participation" },
  coordinator: {
    faculty: "Mrs. M. Thulasi Devi",
    student: "Rasith Meeran A, Selvagayathri P, D Vishal Nanda, Pooja Shree S"
  },
  prize: [
    { place: "1st Place", amount: "Shield + Certificate" },
    { place: "2nd Place", amount: "Shield + Certificate" },
    { place: "3rd Place", amount: "Shield + Certificate" }
  ]
},
    lyricalhunt: {
  title: "LYRIX ARENA",
  date: "March 14, 2026",
  time: "Morning Session",
  location: "C2L03",
  image: lyrixarenaImage,
  about: "Lyrix Arena is an exciting music-based competition that tests participants’ song knowledge, listening skills, speed, confidence, and strategic thinking. The event consists of multiple engaging rounds designed to challenge participants through lyric recognition, audio identification, and competitive bidding.\n\nRound 1 – Reverse Lyrics:\nA song lyric will be played or displayed in reverse order. Participants must correctly identify the Song Name, Movie Name, and either the Singer or Music Director. Each question has a time limit of 20 seconds, testing quick recall and musical awareness.\n\nRound 2 – Audio Hunt Challenge:\nA short 5–8 second audio clip, which may be an intro, instrumental, or lyric, will be played. Participants must identify the song as quickly as possible. This is conducted in a buzzer-round format, and participants may continue the next line of the song for bonus points.\n\nRound 3 – Lyric Auction Battle:\nFinalist teams begin with 100 points. Lyric-based clues are auctioned, and teams bid their points to earn the chance to answer. Correct answers add points, while incorrect answers result in point deduction. The team with the highest total score wins the battle.\n\nBonus Round – Single Drop:\nA brief clue about a song is given. Participants may choose to answer at different clue levels, with marks awarded based on the clue taken. This round tests confidence and risk-taking ability.",
  team: { size: "2–3 members" },
  coordinator: {
    faculty: "Mrs.B.Thevahi",
    student: "Jeyalakshmi A, Saravana Kumar V, Shri Vethisha S, Maharaja T"
  },
  prize: [
    { place: "1st Place", amount: "Shield + Certificate" },
    { place: "2nd Place", amount: "Shield + Certificate" },
    { place: "3rd Place", amount: "Shield + Certificate" }
  ]
},
  franchisetable: {
  title: "THE FRANCHISE TABLE",
  date: "March 14, 2026",
  time: "Morning Session",
  location: "Seminar Hall",
  image: franchisetableImage,
  about: "The Franchise Table is an IPL-style franchise and player auction simulation event that recreates the excitement and strategy of a professional cricket auction. Participants experience real-time decision-making, budgeting, and team-building while managing an IPL franchise owner group. The event is conducted in two rounds on the same day, combining cricket knowledge with auction strategy and financial planning.\n\nRound 1 – Online Quiz (Qualifier):\nThe first round is an online quiz conducted on the same day as the main auction. The quiz tests participants’ knowledge of cricket, IPL history, player statistics, and auction strategies. Based on quiz performance, teams are shortlisted, and only the top 8 teams qualify for the main auction round.\n\nRound 2 – Main Auction Event:\nThe qualified top 8 teams participate in a live IPL-style auction. Each team represents an IPL franchise owner group and competes to build a complete squad within the given budget by bidding on players.\n\nTeam Formation:\n• Qualified Teams for Auction: 8\n• Members per Team: 4 participants\n• Each team represents one IPL franchise owner group\n\nFranchise Allocation:\nFranchises are allotted using a spinning wheel selection method. Each qualified team spins the wheel once, and the displayed franchise is assigned to the team. Franchise allocation is final, and no franchise auction will be conducted.\n\nBudget Allocation:\nEach team is provided with a total auction budget of 100 Crores.\n\nSquad Composition:\nEach team must select a total of 15 players with the following minimum requirements:\n• Batsmen: 5 (including 1 uncapped batsman – mandatory)\n• Bowlers: 4 (including 1 uncapped bowler – mandatory)\n• All-rounders: 4 (including 1 uncapped all-rounder – mandatory)\n• Wicket Keepers: 2 (mandatory)\n\nNationality Rules:\n• Minimum Indian players: 10\n• Maximum overseas players: 5\n\nTier-Based Player System:\n• Tier 1 – Base Price: 2 Crores\n• Tier 2 – Base Price: 1 Crore\n• Tier 3 – Base Price: 50 Lakhs (Uncapped)\n\nAuction Procedure:\nThe auctioneer announces player details along with the base price. Bidding starts from the base price, and teams increase bids according to tier-based increments. The highest bidder wins the player, and the winning bid amount is deducted from the team’s 100 Crore budget. If no team places a bid, the player is declared unsold.\n\nFinal Validation & Results:\nTeams are validated based on squad completion, budget management, and rule compliance. Each team must have exactly 15 players, include the required uncapped players, select a playing 11, and stay within the 100 Crore budget. Only the Winner and Runner-Up will be declared based on final validation scores.",
  team: { size: "4 members" },
  coordinator: {
    faculty: "Mrs.A.Alagulakshmi",
    student: "Saraswathi M, Vishal Kumar S, Karthik M, Karthiga R"
  },
  prize: [
    { place: "1st Place", amount: "Shield + Certificate" },
    { place: "2nd Place", amount: "Shield + Certificate" }
  ]
},
    humour404: {
  title: "404 HUMOUR NOT FOUND",
  date: "March 14, 2026",
  time: "Afternoon Session",
  location: "Data Structure Lab",
  image: memecreationImage,
  about: "Get ready to unleash your creativity and sense of humor! 404 Humour Not Found is a fun and creative meme creation event where participants express their ideas through humor. This event provides an opportunity to showcase imagination, originality, and smart thinking in a simple and entertaining way. Participants are encouraged to create original memes that spread smiles and positive vibes in a lively and enjoyable atmosphere.\n\nEvent Format:\nThe event consists of two rounds where participants design memes based on themes provided on the spot.\n\nRules & Guidelines:\n• Time allotted for creating a meme is 20–30 minutes per round\n• Themes for meme creation will be given on the spot\n• Participation can be individual or in a team of two members\n• Canva must be used for creating memes\n• A total of two rounds will be conducted\n• Use of AI tools such as ChatGPT, Gemini, or Meta AI for content generation is strictly prohibited\n• Online resources should not be referred for content creation; they may be used only for image collection\n• Memes should be original, humorous, visually attractive, and unique\n\nThis event celebrates creativity, positivity, and fun, and challenges participants to impress the judges with their originality and comic sense.",
  team: { size: "Individual or 2 members" },
  coordinator: {
    faculty: "Mrs.M.Rethina Kumari",
    student: "Pramila Devi D, Parasuram C A, Iptika D, Vishal P"
  },
  prize: [
    { place: "1st Place", amount: "Shield + Certificate" },
    { place: "2nd Place", amount: "Shield + Certificate" },
    { place: "3rd Place", amount: "Shield + Certificate" }
  ]
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
        </motion.div>

        <motion.div
          className="event-poster-area"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {details.image ? (
            <img src={details.image} alt={details.title} className="event-poster-image" style={{ width: '90%', maxWidth: '600px', borderRadius: '8px', objectFit: 'contain', margin: '0 auto', display: 'block', height: 'auto' }} />
          ) : (
            <div className="poster-placeholder">
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="300" fill="rgba(0, 217, 255, 0.05)" />
                <text x="200" y="150" textAnchor="middle" fontSize="24" fill="#00d9ff" style={{ fontFamily: 'Orbitron' }}>
                  {details.title}
                </text>
              </svg>
            </div>
          )}
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
      <Footer />
    </motion.div>
  );
}

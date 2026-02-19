import './event.css';
import { useNavigate } from 'react-router-dom';

// ✅ Import ALL images from assets folder
import Paper from './assets/Paper.png';
import Poster from './assets/Poster.png';
import ProjectExpo from './assets/project_expo.png';

export default function Events() {
  const navigate = useNavigate();

  const openEvent = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  /* ================= TECHNICAL EVENTS ================= */

  const technicalEvents = [
    {
      name: "TechPresentX",
      eventId: "codeconquer",
      date: "March 14, 2026",
      location: "Department of Information Technology",
      image: "https://d7c2r9g9.delivery.rocketcdn.me/wp-content/uploads/poster-presentation-example-powerpoint-1024x585.png"
    },
    {
      name: "Think & Ink",
      eventId: "terrain",
      date: "March 14, 2026",
      location: "Department of Information Technology",
      image: "https://images.template.net/wp-content/uploads/2014/12/181.jpg"
    },
    {
      name: "ProtoShow",
      eventId: "sustaino",
      date: "March 14, 2026",
      location: "Department of Information Technology",
      image: "https://viet.edu.in/viet-admin/assets/img/gallery/project-expo.webp"
    },
    {
      name: "Tech-Traid",
      eventId: "techtraid",
      date: "March 14, 2026",
      location: "Department of Information Technology",
      image: "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg"
    },
    {
      name: "Code Arena",
      eventId: "codearena",
      date: "March 14, 2026",
      location: "Department of Information Technology",
      image: "https://sjinnovation.com/sites/default/files/pictures/blog-post/debug-1024x646.jpg"
    }
  ];

  /* ================= NON-TECHNICAL EVENTS ================= */

  const nonTechnicalEvents = [
    {
      name: "Mystery Manor",
      eventId: "mysterymanor",
      date: "March 14, 2026",
      location: "Department of Information Technology",
      image: Poster
    },
    {
      name: "The Boardroom",
      eventId: "theboardroom",
      date: "March 14, 2026",
      location: "Department of Information Technology",
      image: Poster
    },
    {
      name: "Blabber Box",
      eventId: "blabberbox",
      date: "March 14, 2026",
      location: "Department of Information Technology",
      image: Poster
    },
    {
      name: "Tune Trek",
      eventId: "debate",
      date: "March 14, 2026",
      location: "Department of Information Technology",
      image: Poster
    },
    {
      name: "The Franchise Table",
      eventId: "franchisetable",
      date: "March 14, 2026",
      location: "Department of Information Technology",
      image: Poster
    },
    {
      name: "404 Human not Found",
      eventId: "human404",
      date: "March 14, 2026",
      location: "Department of Information Technology",
      image: Poster
    }
  ];

  /* ================= UI ================= */

  return (
    <div className="event-details-page">

      {/* Header */}
      <div className="top-controls">
        <div className="symposium-title">ASTRYX'26</div>
      </div>

      {/* TECHNICAL EVENTS */}
      <h1 className="page-title">TECHNICAL EVENTS</h1>

      <div className="card-container">
        {technicalEvents.map((event, index) => (
          <div className="event-card" key={index}>

            <h2>{event.name}</h2>

            <div className="event-image">
              <img
                src={event.image}
                alt={event.name}
                className="event-poster"
              />
            </div>

            <p className="details-text">DETAILS</p>

            <p className="info">
              {event.date} • {event.location}
            </p>

            <button
              className="register"
              onClick={() => openEvent(event.eventId)}
            >
              Register Now
            </button>

          </div>
        ))}
      </div>

      {/* NON TECHNICAL EVENTS */}
      <h1 className="page-title">NON-TECHNICAL EVENTS</h1>

      <div className="card-container">
        {nonTechnicalEvents.map((event, index) => (
          <div className="event-card" key={index}>

            <h2>{event.name}</h2>

            <div className="event-image">
              <img
                src={event.image}
                alt={event.name}
                className="event-poster"
              />
            </div>

            <p className="details-text">DETAILS</p>

            <p className="info">
              {event.date} • {event.location}
            </p>

            <button
              className="register"
              onClick={() => openEvent(event.eventId)}
            >
              Register Now
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}

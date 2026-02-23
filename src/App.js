
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Events from "./Events";
import EventDetails from "./EventDetails";
import Workshops from "./Workshops";
import Header from "./Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/workshops" element={<Workshops />} />
      </Routes>
    </Router>
  );
}

export default App;

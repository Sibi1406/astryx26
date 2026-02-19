
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Events from "./Events";
import EventDetails from "./EventDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

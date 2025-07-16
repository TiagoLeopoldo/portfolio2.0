import "@/App.css";
import HomePage from "@/components/organisms/home/HomePage.jsx";
import AboutMePage from "@/components/organisms/mobile/AboutMe/AboutMePage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMePage />} />
      </Routes>
    </Router>
  );
}

export default App;

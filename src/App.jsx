import "@/App.css";
import HomePage from "@/components/organisms/home/HomePage.jsx";
import AboutMePage from "@/components/organisms/mobile/AboutMe/AboutMePage.jsx";
import Projects from "@/components/organisms/home/ProjectsPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMePage />} />
        <Route path="/projects&experiences" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;

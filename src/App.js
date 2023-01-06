import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/aboutMe'
import Gallery from './pages/gallery'
import Gallery1 from "./pages/Gallery1";
import Pricing from "./pages/pricing";
import Contact from './pages/contactMe'
import './App.css'

function App() {
  return (
    <div className="routesContainer">
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/gallery" element={< Gallery />} />
          <Route path="/gallery1" element={< Gallery1 />} />
          <Route path="/pricing" element={< Pricing />} />
          <Route path="/contact" element={< Contact />} />
        </Routes>
    </div>
  );
}

export default App;

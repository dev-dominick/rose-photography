import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/aboutMe'
import Gallery from './pages/gallery'
import Pricing from "./pages/pricing";
import Contact from './pages/contactMe'
import Navbar from './components/navbar';
import Footer from './components/footer'
import './App.css'

import KidsGallery from "./GalleryPages/KidsGallery";

function App() {
  return (
    <div className="app main">
      < Navbar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/gallery" element={< Gallery />} />        
        <Route path="/gallery/businessgallery" element={< KidsGallery />} />
        <Route path="/personalgallery" element={< KidsGallery />} />
        <Route path="/showersgallery" element={< KidsGallery />} />
        <Route path="/partiesgallery" element={< KidsGallery />} />
        <Route path="/animalsgallery" element={< KidsGallery />} />
        <Route path="/kidsgallery" element={< KidsGallery />} />
        <Route path="/familiesgallery" element={< KidsGallery />} />
        <Route path="/pricing" element={< Pricing />} />
        <Route path="/contact" element={< Contact />} />
      </Routes>
      < Footer />

    </div>
  );
}

export default App;

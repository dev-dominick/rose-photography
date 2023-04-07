import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/aboutMe'
// import Gallery from './pages/gallery'
import Pricing from "./pages/pricing";
import Contact from './pages/contactMe'
import Header from './components/Header'
import Footer from './components/footer'
import './App.css'

import SelectedAlbumDisplay from "./GalleryPages/SelectedAlbumDisplay";

const App = () => {
  return (
    <div className="app main">
      {/* < Navbar /> */}
      <Header/>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
        {/* <Route path="/gallery" element={< Gallery />} />         */}
        <Route path="/gallery/businessgallery" element={< SelectedAlbumDisplay  />} />
        <Route path="/gallery/personalgallery" element={< SelectedAlbumDisplay />} />
        <Route path="/gallery/showersgallery" element={< SelectedAlbumDisplay />} />
        <Route path="/gallery/partiesgallery" element={< SelectedAlbumDisplay />} />
        <Route path="/gallery/animalsgallery" element={< SelectedAlbumDisplay />} />
        <Route path="/gallery/kidsgallery" element={< SelectedAlbumDisplay />} />
        <Route path="/gallery/familiesgallery" element={< SelectedAlbumDisplay />} />
        <Route path="/pricing" element={< Pricing />} />
        <Route path="/contact" element={< Contact />} />
      </Routes>
      < Footer />

    </div>
  );
}

export default App;

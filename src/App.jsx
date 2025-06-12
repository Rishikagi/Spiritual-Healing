import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Resources from './Resources';
import Experience from './Experience';
import Innerpeace from './Innerpeace';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar"
import HeroSlider from "./HeroSlider"
import AboutUs from "./AboutUs"
function App() {
  return ( 
  
     

 <Router basename="/Spiritual-Healing">
      <Navbar />
      <div className="pt-20"> {/* Navbar height offset */}
        <Routes>
          <Route path="/Heroslider" element={<HeroSlider />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Innerpeace" element={<Innerpeace />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
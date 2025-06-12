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
  
     

 <Router>
      <Navbar />
      <div className="pt-20"> {/* Navbar height offset */}
        <Routes>
          <Route path="/" element={<HeroSlider />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/innerpeace" element={<Innerpeace />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
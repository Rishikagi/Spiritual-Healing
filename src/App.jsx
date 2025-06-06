import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Heading from './Heading';
import About from './About';
import Resources from './Resources';
import Blogs from './Blogs';
import Services from './Services';
import UpcomingEvents from './UpcomingEvents';


function App() {


  return (
    <>
    <div>
      <Nav/>
    </div>
    <div className="spiritual-bg">
      <Heading />
    </div>
    <div className="about-section">
      <About/>
    </div>
    <div className="services-section">
      <Services/>
    </div>
    <div className="events-section">
      <UpcomingEvents/>
    </div>
    <div className="resources-section">
      <Resources/>
    </div>
     <div className="blogs-section">
      <Blogs/>
    </div>
    
    </>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Heading from './Heading';
import About from './About';
import Resources from './Resources';
import Blogs from './Blogs';
import Services from './Services';
import UpcomingEvents from './UpcomingEvents';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <div className="App">
        <div className="spiritual-bg">
          <Heading />
        </div>
        <div className="about-section" id="about">
          <About />
        </div>
        <div className="services-section" id="services">
          <Services />
        </div>
        <div className="events-section" id="events">
          <UpcomingEvents />
        </div>
        <div className="resources-section" id="resources">
          <Resources />
        </div>
        <div className="blogs-section" id="blogs">
          <Blogs />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

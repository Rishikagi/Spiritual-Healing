// Nav.jsx
import subodh from './assets/subodh.svg';
import './App.css';
import { Link } from 'react-router-dom'; // keep for page routing
import { Link as ScrollLink } from 'react-scroll'; // renamed to avoid conflict
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <div className="navbar-brand"><span className='subodh'> <img src={subodh} alt="" />Subodh</span></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/SpiritualHealing" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
               <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
               About
              </ScrollLink>
            </li>
            <li className="nav-item">
               <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
               Services
              </ScrollLink>
            </li>
            <li className="nav-item">
               <ScrollLink
                to="events"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
               Events
              </ScrollLink>
            </li>
            <li className="nav-item">
               <ScrollLink
                to="resources"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
               Resources
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="blogs"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Blogs
              </ScrollLink>
            </li>
            <li className="nav-item">
               <ScrollLink
                to="heading"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
               Content
              </ScrollLink>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

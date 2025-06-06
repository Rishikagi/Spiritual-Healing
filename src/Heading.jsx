import React from 'react';
import main from './assets/main.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Heading = () => {
  return (
   <div className="container my-5">
  <div className="row align-items-center">
    {/* Left Column */}
    <div className="col-md-6">
      <div className="sanctuary-heading text-start">
        <h2 className="display-4 mb-4">Welcome to Your Spiritual Sanctuary</h2>
      </div>
      <div className="head-content">
        <p>
          A sacred space for healing, self-discovery, and inner awakening. Explore resources to nurture your body, mind, and soul.
        </p>
      </div>
      <div className="button-sec mt-3">
        <button className="btn btn-explore me-2">Explore Services</button>
        <button className="btn btn-outline-dark">Book a Session</button>
      </div>
    </div>

    {/* Right Column */}
    <div className="col-md-6 text-center">
      {/* Replace with actual image tag */}
      <img src={main} alt="Sanctuary" className="img-fluid" />
    </div>
  </div>
</div>

  );
};

export default Heading;
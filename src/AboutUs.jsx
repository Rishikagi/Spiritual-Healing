import React from "react";
import bgPattern from "./images/background.png";
import bigOne from "./images/big_one.jpg";
import smallOne from "./images/small_one.jpg";
import NumerologyIcon from "./images/Numerology.png";
import SelfHealingIcon from "./images/Self_Healing.png";
import YogaIcon from "./images/Yoga.png";
import InnerAwakeningIcon from "./images/Inner_awakening.png";
import InnerAwakening2Icon from "./images/Inner_awakenin_2.png";
import './App.css';


const icons = [
  { src: NumerologyIcon, label: "Numerology" },
  { src: SelfHealingIcon, label: "Self Healing" },
  { src: YogaIcon, label: "Yoga" },
  { src: InnerAwakeningIcon, label: "Inner Awakening" },
  { src: InnerAwakening2Icon, label: "Inner Awakening" },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="position-relative w-100 min-vh-100 d-flex align-items-center py-5 px-3 px-md-5 px-lg-5 bg-light overflow-hidden mt-n5 font-heading animate-fade-in-up"
    >
      <img
        src={bgPattern}
        alt="Background pattern"
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover opacity-25 z-n1"
      />

      <div className="container position-relative z-1 d-flex flex-column align-items-center">
        {/* Title */}
        <div className="text-center mb-5 animate-fade-in-up">
          <h2 className="head display-4 fw-bold fst-italic text-primary">
            About <span className="ms-2">Us</span>
          </h2>
          <div className="mx-auto my-2" style={{ height: '4px', width: '100px', backgroundColor: '#6c757d', borderRadius: '5px' }}></div>
        </div>

        <div className="row g-5 align-items-center w-100">
          {/* Images */}
          <div className="col-md-5 text-center text-md-start animate-fade-in-up-delay position-relative">
  {/* Big Image */}
  <div
    className="mb-4 rounded-top rounded-end overflow-hidden shadow mx-auto mx-md-0"
    style={{ width: '16rem', height: '16rem'}}
  >
    <img src={bigOne} alt="About big" className="w-100 h-100 object-fit-cover bigimg" />
  </div>

  {/* Small Overlapping Image */}
  <div
    className="position-absolute start-50 translate-middle-x translate-middle-y rounded-top rounded-end overflow-hidden shadow"
    style={{
      bottom: '-3rem',  // adjust the overlap depth
      left: '100%',      // tweak for exact positioning
      width: '10rem',
      height: '10rem',
      
    }}
  >
    <img src={smallOne} alt="About small" className="w-100 h-100 object-fit-cover" />
  </div>
</div>

          {/* Text & Icons */}
          <div className="col-md-7 animate-fade-in-up-delay2">
            <p className="fs-5 fw-semibold text-center text-md-start">
              A sacred space for healing, self-discovery, and inner awakening.
            </p>
            <p className="fs-6  mb-4 text-center text-md-start animate-fade-in-up-delay3">
              My approach blends the ancient wisdom of yoga therapy with spiritual tools such as Tarot reading, Numerology, and intuitive guidance to support transformation on all levels—body, mind, and soul.
            </p>

            <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-md-start mb-4 animate-fade-in-up-delay4">
              {icons.map((icon, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow mb-2" style={{ width: '80px', height: '80px' }}>
                    <img src={icon.src} alt={icon.label} className="img-fluid" style={{ width: '60px', height: '60px' }} />
                  </div>
                  <span className="fw-semibold small ic-label d-block">{icon.label}</span>
                </div>
              ))}
            </div>

            <div className=" text-md-start animate-fade-in-up-delay5">
              <button className="btn btn-primary px-4 py-2 shadow btn all-articles btn-secondary mt-3">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

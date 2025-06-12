import React, { useEffect, useState, useRef } from "react";
import firstImg from "./images/first.jpg";
import secondImg from "./images/second.jpg";
import thirdImg from "./images/third.jpg";
import "./App.css";
import "./HeroSlider.css";

const images = [firstImg, secondImg, thirdImg];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="position-relative w-100 overflow-hidden m-0 p-0 font-heading" style={{ height: "100vh" }}>
      {/* Slider Track */}
      <div
        className="d-flex transition-transform"
        style={{
          width: `${images.length * 100}vw`,
          transform: `translateX(-${current * 100}vw)`,
          transition: "transform 1s ease-in-out",
          height: "100vh",
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="position-relative d-flex align-items-center w-100 h-100"
            style={{ flex: "0 0 100vw" }}
          >
            <img
              src={img}
              alt={`slider-${idx}`}
              className="w-100 h-100 position-absolute top-0 start-0"
              style={{ objectFit: "cover", zIndex: 0 }}
              draggable="false"
            />

            {/* Overlay Content */}
            <div className="container position-relative text-start px-4 px-md-5 z-2">
              <h1 className="display-4 fw-bold text-white mb-4 mt-5 mt-md-0 animate-fade-in-up">
                Welcome to Your Spiritual <br />
                <span className="text-light animate-fade-in-up-delay">Sanctuary</span>
              </h1>
              <p className="fs-5 text-light mb-4 animate-fade-in-up-delay2">
                A sacred space for healing, self-discovery, and inner awakening. <br />
                Explore resources to nurture your body, mind, and soul.
              </p>
              <div className="d-flex flex-wrap gap-3 animate-fade-in-up-delay3">
                <a href="#services" className="btn all-articles btn-secondary mt-3 shadow-sm px-4 py-2 font-heading">
                  Explore Services
                </a>
                <a href="#book" className="btn btn-outline-light all-articles session shadow-sm px-1 py-1 font-heading">
  Book A Session
</a>

              </div>
            </div>

            {/* Optional Dark Overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: "rgba(0,0,0,0.4)", zIndex: 1 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

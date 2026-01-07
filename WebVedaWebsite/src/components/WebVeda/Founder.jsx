import React, { useEffect, useState } from "react";
import "./Founder.css"

import {
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaSpotify,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { BsJournalText } from "react-icons/bs";

const FounderSection = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 16.8;
    const duration = 1500; // ms
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-5 mt-5 founder-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0 text-start">
            <h2 className="fw-bold mb-3 text-dark">
              Meet <span className="text-primary">Our Founder</span>
            </h2>

            <p className="text-muted fs-6 mb-4">
              Ankur Warikoo is a dynamic individual who wears many hats — he’s a
              content creator, entrepreneur, and teacher. As a content creator,
              he has built a massive online presence, with over 16.5 million
              followers across social platforms.
            </p>

            <p className="fw-semibold fs-5 text-dark mb-4">
              He has been a founder since 2009 and co-founded nearby.com,
              leading it as CEO from 2015 to 2019, and previously spearheaded
              Groupon’s India operations. His passion for teaching led him to
              found WebVeda, where he teaches courses on topics like
              entrepreneurship, careers, and self-improvement.
            </p>

            {/* Followers Card */}
            <div className="card shadow-sm border-0 mt-4 founder-card">
              <div className="card-body text-center">
                <h4 className="text-primary fw-bold mb-3">
                  {count} Million Followers
                </h4>
                <div className="d-flex justify-content-center gap-3 fs-4 social-icons">
                  <FaYoutube />
                  <FaInstagram />
                  <FaLinkedinIn />
                  <FaSpotify />
                  <FaXTwitter />
                  <BsJournalText />
                  <FaWhatsapp />
                </div>
              </div>
            </div>
          </div>

          {/* Right Video */}
          <div className="col-lg-7 col-md-12 text-center mt-4 mt-lg-0">
            <div className="position-relative d-inline-block w-100">
              <video
                className="founder-video w-100 rounded-4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source
                  src="https://framerusercontent.com/assets/Ckf5CphL1BRxRBCgaxUrwBQmvk.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

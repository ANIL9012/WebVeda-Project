import React, { useEffect, useState } from "react";
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
    const duration = 1500;
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
        <div className="row align-items-start">
          
          {/* LEFT CONTENT (Scrollable) */}
          <div className="col-lg-5 col-md-12 mb-4 text-start">
            <h2 className="fw-bold mb-3 text-dark">
              Meet <span style={{ color: "#4169e1" }}>Our Founder</span>
            </h2>

            <p className="text-muted fs-6 mb-5">
              Ankur Warikoo is a dynamic individual who wears many hats — he’s a
              content creator, entrepreneur, and teacher. As a content creator,
              he has built a massive online presence.
            </p>

            <p className="fw-semibold fs-5 text-dark mb-5">
              He has been a founder since 2009 and co-founded nearby.com,
              leading it as CEO from 2015 to 2019. His passion for teaching led
              him to found WebVeda.
            </p>

            {/* Extra height to show scroll effect */}
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, voluptatum. Lorem ipsum dolor sit amet.
            </p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            {/* Followers Card */}
            <div
              className="card shadow-sm border-0 mt-4"
              style={{ maxWidth: "420px" }}
            >
              <div className="card-body text-center">
                <h4 className="text-primary fw-bold mb-3">
                  {count} Million Followers
                </h4>
                <div
                  className="d-flex justify-content-center gap-3 fs-4"
                  style={{ color: "#4169e1" }}
                >
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

          {/* RIGHT VIDEO (STICKY) */}
          <div className="col-lg-7 col-md-12">
            <div className="video-sticky">
              <video
                className="w-100 rounded-4 founder-video"
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

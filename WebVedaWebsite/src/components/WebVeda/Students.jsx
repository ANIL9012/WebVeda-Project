import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Student.css";

const testimonials = [
  {
    id: 1,
    views: "275K",
    subviews: "Views in three months",
    text: "This course taught me the science of making content.",
    name: "Ansh Mehra",
    course: "Enrolled in How To YouTube",
    image: "/Slider-2-img/slider-1.png",
  },
  {
    id: 2,
    views: "1M",
    subviews: "Monthly Impressions",
    text: "The course was a growth machine and a complete eye-opener.",
    name: "Jash & Devarsh",
    course: "Enrolled in Content Growth",
    image: "/Slider-2-img/slider-2.png",
  },
  {
    id: 3,
    views: "250K",
    subviews: "Views in a Month",
    text: "The only course that covers art, science & philosophy.",
    name: "Anand",
    course: "Enrolled in How To YouTube",
    image: "/Slider-2-img/slider-7.png",
  },
];

const allProfiles = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  image: `/students/student-${i + 1}.avif`,
}));

const fixedPositions = [
  { top: 15, left: 10 },
  { top: 10, left: 35 },
  { top: 12, left: 60 },
  { top: 20, left: 85 },
  { top: 55, left: 8 },
  { top: 65, left: 30 },
  { top: 70, left: 55 },
  { top: 60, left: 85 },
];

export default function TestimonialSlider() {
  const sliderRef = useRef(null);
  const [count, setCount] = useState(0);
  const [profiles, setProfiles] = useState(
    fixedPositions.map(
      () => allProfiles[Math.floor(Math.random() * allProfiles.length)]
    )
  );

  // Carousel
  useEffect(() => {
    if (sliderRef.current) {
      const carousel = new Carousel(sliderRef.current, {
        interval: 4000,
        ride: "carousel",
        pause: false,
      });
      return () => carousel.dispose();
    }
  }, []);

  // Counter
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => (c < 479323 ? c + 1000 : 479323));
    }, 20);
    return () => clearInterval(timer);
  }, []);

  // Profile shuffle
  useEffect(() => {
    const interval = setInterval(() => {
      setProfiles(
        fixedPositions.map(
          () => allProfiles[Math.floor(Math.random() * allProfiles.length)]
        )
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid mt-5 px-3 px-md-5 py-5 bg-light">
      <h2 className="text-center fw-bold mb-4">
        From Our Students <br />
        <span className="fs-5 text-primary">Across 12 Courses</span>
      </h2>

      <div className="row g-4 align-items-stretch">
        {/* LEFT */}
        <div className="col-12 col-lg-5 d-flex">
          <div
            ref={sliderRef}
            className="carousel slide testimonial-card w-100"
          >
            <div className="carousel-inner">
              {testimonials.map((t, i) => (
                <div
                  key={t.id}
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                >
                  <div className="testimonial-content">
                    <div className="d-flex align-items-end gap-2">
                      <h1 className="views">{t.views}</h1>
                      <span className="subviews">{t.subviews}</span>
                    </div>
                    <p className="testimonial-text">“{t.text}”</p>
                    <h6 className="mt-3">{t.name}</h6>
                    <small>{t.course}</small>
                    <img src={t.image} className="testimonial-img" alt="" />
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" data-bs-slide="prev">
              <span className="carousel-btn">‹</span>
            </button>
            <button className="carousel-control-next" data-bs-slide="next">
              <span className="carousel-btn">›</span>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-12 col-lg-7 d-flex flex-column gap-4">
          {/* Profile */}
          <div className="profile-container">
            <div className="center-content" style={{color:"#4169e1"}}>
              <h2>{count.toLocaleString()}</h2>
              <p>students & counting</p>
            </div>

            {fixedPositions.map((pos, i) => (
              <div
                key={i}
                className="profile-circle"
                style={{ top: `${pos.top}%`, left: `${pos.left}%` }}
              >
                <img src={profiles[i].image} alt="" />
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="quote-card">
                <h3>More than a paisa wasool course!</h3>
                <p>– Shiva Krishnan</p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <video
                className="founder-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://framerusercontent.com/assets/MOjmTf1Irrs87MrNhZBuPseW4.mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useMemo, useRef, useState } from "react";
import "./WebVeda.css";
import { FaInfinity, FaUndo, FaUsers, FaPlay } from "react-icons/fa";
import { FaArrowRight, FaGraduationCap } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";

import WhyWebVeda from "./WhyWebVeda";
import WhoWebVeda from "./WhoWebVeda";
import Students from "./Students";
import Founder from "./Founder";
import TrustedCreators from "./TrustedCreators";
import FaQ from "./FaQ";
import Footer from "../Footer/Footer";

const courses = [
  {
    title: "Grow Professionally Through LinkedIn",
    category: ["All", "Growth", "Launchpad"],
    img: "/allcourse/allcourse-img-9.avif",
    students: "3.7K+ Students",
    price: "₹1799",
    gradient:
      "linear-gradient(270deg, rgb(107, 185, 224) 0%, rgb(0, 102, 153) 100%)",
  },
  {
    title: "Start Your Freelancing Career",
    category: ["All", "Productivity", "Growth", "Launchpad"],
    img: "/allcourse/allcourse-img-1.avif",
    students: "Newly Launched!",
    price: "₹3499",
    gradient:
      "linear-gradient(270deg, var(--token-646cb7b0-3366-432f-bf19-27900c258786, rgb(194, 255, 245)) -35%, var(--token-839472c6-25f7-4ba5-a7e7-a36bd76225ca, rgb(0, 139, 117)) 65%)",
  },
  {
    title: "Master Communication Skills",
    category: ["All", "Productivity", "Growth"],
    img: "/allcourse/allcourse-img-2.avif",
    students: "92K+ Students",
    price: "₹649",
    gradient:
      "linear-gradient(270deg, rgb(167, 136, 227) -15%, rgb(101, 116, 226) 55%)",
  },
  {
    title: "Manage Money The Right Way",
    category: ["All", "Money"],
    img: "/allcourse/allcourse-img-4.avif",
    students: "42K+ Students",
    price: "₹899",
    gradient:
      "linear-gradient(270deg, rgb(1, 207, 122) -53%, rgb(0, 156, 91) 98.4234%)",
  },
  {
    title: "Excel for Beginners",
    category: ["All", "Productivity"],
    img: "/allcourse/allcourse-img-4.avif",
    students: "18K+ Students",
    price: "₹799",
    gradient:
      "linear-gradient(270deg, rgb(1, 207, 122) -53%, rgb(0, 156, 91) 98.4234%)",
  },
  {
    title: "Public Speaking Mastery",
    category: ["All", "Growth"],
    img: "/allcourse/allcourse-img-3.avif",
    students: "11K+ Students",
    price: "₹999",
    gradient:
      "linear-gradient(270deg, var(--token-c12c7ce4-9a91-4b3d-a1e3-de315c8b6c21, rgb(254, 215, 154)) -35%, var(--token-4add3aa4-2bef-4d56-bbfc-7466f85a1c79, rgb(251, 161, 20)) 65%)",
  },
  {
    title: "Personal Finance Basics",
    category: ["All", "Money"],
    img: "/allcourse/allcourse-img-5.avif",
    students: "29K+ Students",
    price: "₹699",
    gradient:
      "linear-gradient(270deg, rgb(255, 95, 95) -15%, rgb(130, 23, 23) 100%)",
  },
  {
    title: "LinkedIn Profile Optimization",
    category: ["All", "Growth"],
    img: "/allcourse/allcourse-img-6.avif",
    students: "9K+ Students",
    price: "₹1299",
    gradient:
      "linear-gradient(270deg, rgb(255, 238, 183) -25%, rgb(250, 200, 33) 75%)",
  },
  {
    title: "Freelancing Tools & Tricks",
    category: ["All", "Productivity"],
    img: "/allcourse/allcourse-img-5.avif",
    students: "New",
    price: "₹1599",
    gradient:
      "linear-gradient(270deg, rgb(255, 95, 95) -15%, rgb(130, 23, 23) 100%)",
  },
  {
    title: "Communication for Managers",
    category: ["All", "Growth"],
    img: "/allcourse/allcourse-img-6.avif",
    students: "21K+ Students",
    price: "₹1199",
    gradient:
      "linear-gradient(270deg, rgb(255, 238, 183) -25%, rgb(250, 200, 33) 75%)",
  },
  {
    title: "Smart Saving Strategies",
    category: ["All", "Money"],
    img: "/allcourse/allcourse-img-7.avif",
    students: "17K+ Students",
    price: "₹499",
    gradient:
      "linear-gradient(270deg, rgb(255, 220, 167) -30%, rgb(251, 176, 59) 51%)",
  },
  {
    title: "Career Growth Blueprint",
    category: ["All", "Launchpad"],
    img: "/allcourse/allcourse-img-8.avif",
    students: "New",
    price: "₹1999",
    gradient:
      "linear-gradient(270deg, rgb(219, 101, 187) -5%, rgb(174, 63, 144) 100%)",
  },
];

const tabs = ["All", "Productivity", "Growth", "Money", "Launchpad"];
const desktopConfig = {
  All: 4,
  Productivity: 2,
  Growth: 4,
  Money: 3,
  Launchpad: 4,
};

const WebVeda = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [cardsPerSlide, setCardsPerSlide] = useState(4);

  // Responsive cards count
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 576) setCardsPerSlide(1);
      else if (window.innerWidth < 992) setCardsPerSlide(2);
      else setCardsPerSlide(desktopConfig[activeTab]);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, [activeTab]);

  const filteredCourses = courses.filter((course) =>
    course.category.includes(activeTab)
  );

  const slides = useMemo(() => {
    const arr = [];
    for (let i = 0; i < filteredCourses.length; i += cardsPerSlide) {
      arr.push(filteredCourses.slice(i, i + cardsPerSlide));
    }
    return arr;
  }, [filteredCourses, cardsPerSlide]);

  useEffect(() => {
    const el = document.getElementById("courseSlider");
    if (el && window.bootstrap) {
      window.bootstrap.Carousel.getOrCreateInstance(el).to(0);
    }
  }, [activeTab, cardsPerSlide]);

  const colClass =
    cardsPerSlide === 1
      ? "col-12"
      : cardsPerSlide === 2
      ? "col-12 col-md-6"
      : cardsPerSlide === 3
      ? "col-12 col-md-4"
      : "col-12 col-sm-6 col-lg-3";

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="webveda-landing text-center text-white p-0 mt-5">
      {/* HERO SECTION */}
      <div
        className="hero-section"
        style={{
          background:
            "radial-gradient(circle at top, rgba(79,124,255,.25), transparent 40%), linear-gradient(180deg,#0b2a5c,#06152f)",
        }}
      >
        <div className="container py-5 text-center">
          <h1 className="fw-bold display-4">
            Skyrocket Your <span className="text-primary">Business</span>
          </h1>
          <p className="text-info-emphasis fs-5 mt-3">
            Years of experience crunched into easy and risk-free courses!
          </p>

          {/* FEATURES */}
          <div className="row justify-content-center gy-3 mt-4">
            <Feature icon={<FaInfinity />} text="Lifetime Access" />
            <Feature icon={<FaUndo />} text="14-Day Refund Policy" />
            <Feature icon={<FaUsers />} text="4.7+ Lakh Enrolled" />
          </div>

          {/* CTA BUTTON */}
          <div className="mt-4">
            <button className="btn btn-primary btn-lg rounded-pill px-5 py-3">
              Explore WebVeda Courses
            </button>
          </div>

          {/* HERO VIDEO */}
          <div className="position-relative mx-auto mt-5 video-wrapper">
            <video
              ref={videoRef}
              className="w-100 rounded-4"
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <button
                onClick={handlePlayPause}
                className="play-btn position-absolute top-50 start-50 translate-middle"
              >
                <FaPlay className="fs-3 text-dark ms-1" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* COURSE CAROUSEL */}
      <div className="container py-5 mt-5">
        <h2 className="text-center text-dark fw-bold mb-4">
          Practical Courses <br />
          <span className="text-primary">For Work & Life</span>
        </h2>

        {/* Tabs */}
        <ul className="nav nav-pills justify-content-center gap-2 mb-4 flex-wrap">
          {tabs.map((tab) => (
            <li key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        {/* Slider */}
        <div id="courseSlider" className="carousel slide">
          <div className="carousel-inner">
            {slides.map((group, idx) => (
              <div
                key={idx}
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
              >
                <div className="row g-4 justify-content-center mt-4">
                  {group.map((course, i) => (
                    <div key={i} className={colClass}>
                      <div className="freelance-card h-100">
                        <div className="freelance-image">
                          <img src={course.img} alt="" className="img-fluid" />
                        </div>
                        <div className="freelance-body text-center">
                          <h6 className="fw-semibold text-dark mb-2">
                            {course.title}
                          </h6>
                          <hr className="divider my-2" />
                          <small className="d-flex justify-content-between small text-muted m-2">
                            <div>
                              <MdKeyboardVoice className="fs-5" /> English
                            </div>{" "}
                            <div>
                              <FaGraduationCap className="fs-5" />{" "}
                              {course.students}
                            </div>
                          </small>
                        </div>
                        <div
                          style={{ background: course.gradient }}
                          className="freelance-footer text-white d-flex justify-content-between align-items-center px-3"
                        >
                          <strong>
                            {course.price} <FaArrowRight />
                          </strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          {slides.length > 1 && (
            <>
              <button
                className="carousel-control-prev"
                data-bs-target="#courseSlider"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </button>
              <button
                className="carousel-control-next"
                data-bs-target="#courseSlider"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Sections */}
      <WhyWebVeda />
      <WhoWebVeda />
      <Students />
      <Founder />
      <TrustedCreators />
      <FaQ />
      <Footer />
    </section>
  );
};

/* Feature Component */
const Feature = ({ icon, text }) => (
  <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
    <div className="d-flex align-items-center gap-2 fs-5 text-white">
      <span className="text-primary fs-4">{icon}</span>
      <span>{text}</span>
    </div>
  </div>
);

export default WebVeda;

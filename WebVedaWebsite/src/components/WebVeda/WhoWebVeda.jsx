import React from "react";
import "./WhoWebVeda.css";

import {
  FaUserGraduate,
  FaBriefcase,
  FaLaptop,
  FaExchangeAlt,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

const audience = [
  {
    icon: <FaUserGraduate />,
    title: "Students",
    desc: "Learn concepts that are not covered in traditional schooling.",
  },
  {
    icon: <FaBriefcase />,
    title: "Working Professionals",
    desc: "Develop essential skills to enhance their career and boost productivity.",
  },
  {
    icon: <FaLaptop />,
    title: "Freelancers",
    desc: "Discover ways to grow, manage, and streamline your freelance business.",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Career Shifters",
    desc: "Get the guidance needed to pivot confidently into a new field.",
  },
  {
    icon: <FaUsers />,
    title: "Parents",
    desc: "Manage time and personal growth while balancing family needs.",
  },
  {
    icon: <FaRocket />,
    title: "Dreamers",
    desc: "Gain insights and strategies to create their own journey.",
  },
];

export default function WhoIsWebVeda() {
  return (
    <section className="who-section py-5 mt-5 px-0">
      <div className="container">
        {/* Heading */}
        <h2 className="text-center text-white fw-bold mb-5">
          <span className="text-primary">Who Is</span> WebVeda For?
        </h2>

        {/* Cards */}
        <div className="row g-4">
          {audience.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div className="who-card h-100 d-flex flex-column align-items-center text-center">
                <div className="icon mb-3">{item.icon}</div>
                <h5 className="fw-semibold text-white">{item.title}</h5>
                <p className="text-light small mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

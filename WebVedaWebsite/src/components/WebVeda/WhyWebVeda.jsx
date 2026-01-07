import React from "react";
import "./WhyWebVeda.css";
import {
  FaPlayCircle,
  FaInfinity,
  FaRocket,
  FaUsers,
  FaComments,
  FaRupeeSign,
} from "react-icons/fa";

const features = [
  {
    icon: <FaPlayCircle />,
    title: "On-Demand",
    subtitle: "Courses",
    desc: "Watch courses, anytime, anywhere and learn at your own pace.",
  },
  {
    icon: <FaInfinity />,
    title: "Lifetime",
    subtitle: "Access",
    desc: "Accessible as long as you need on a one-time payment.",
  },
  {
    icon: <FaRocket />,
    title: "Free",
    subtitle: "Upgrades",
    desc: "Get free unlimited upgrades whenever we update any of our courses.",
  },
  {
    icon: <FaUsers />,
    title: "Live Group",
    subtitle: "Sessions",
    desc: "Attend live group Q&A sessions every month.",
  },
  {
    icon: <FaComments />,
    title: "Community",
    subtitle: "Learning",
    desc: "Connect and engage with fellow students in a chat-based community.",
  },
  {
    icon: <FaRupeeSign />,
    title: "Practical",
    subtitle: "& Affordable",
    desc: "We only make courses that give actionable steps at an affordable price.",
  },
];

export default function WhyWebVeda() {
  return (
    <div className="container py-5 mt-5">
      {/* Heading */}
      <h2 className="text-center fw-bold mb-5">
        <span className="text-primary">Why</span>
        <span className="text-dark ms-3">WebVeda?</span>
      </h2>

      {/* Grid */}
      <div className="row g-4">
        {features.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-4">
            <div className="text-center px-3 h-100">
              <div className="icon-box mx-auto mb-3">{item.icon}</div>
              <div className="fw-bold fs-5">
                <span className="text-primary">{item.title}</span>
                <span className="text-dark ms-2">
                  {item.subtitle}
                </span>
              </div>
              <p className="text-muted small fs-6">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

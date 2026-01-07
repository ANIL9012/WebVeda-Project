import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaFlag, FaPlus, FaYoutube } from "react-icons/fa";
import { IoLayersSharp, IoPeopleSharp } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import { FaMessage, FaUsers } from "react-icons/fa6";

const faqData = [
  {
    question: "What is the refund policy?",
    answer:
      "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked.",
    icon: <FaFlag />,
  },
  {
    question: "Are the courses conducted live?",
    answer:
      "No, all the courses are self-paced and come with lifetime access.",
    icon: <FaYoutube />,
  },
  {
    question: "Do the courses have any live interaction?",
    answer:
      "Premium plans include live group Q&A sessions with mentors.",
    icon: <IoPeopleSharp />,
  },
  {
    question: "Are there any criteria for joining the courses?",
    answer:
      "Not at all! These courses are designed for anyone and everyone.",
    icon: <TiTickOutline />,
  },
  {
    question: "Can I enroll in multiple courses?",
    answer:
      "Yes, there are no limits on the number of courses you can take.",
    icon: <IoLayersSharp />,
  },
  {
    question: "Is there a community that I can join?",
    answer:
      "Premium plans include access to a chat-based student community.",
    icon: <FaUsers />,
  },
  {
    question: "Whom do I contact in case of any issues?",
    answer:
      "You can contact us via WhatsApp for instant support.",
    icon: <FaMessage />,
  },
];

const FaQ = () => {
  // First FAQ open by default
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div 
    className="container py-4 py-md-5"
    >
      <div
        className="row align-items-start"
        style={{
          backgroundImage: 'url("/freequently/freequently.svg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "contain",
        }}
      >
        {/* LEFT SECTION */}
        <div className="col-xl-5 col-lg-5 col-md-12 col-12 mb-4 text-center text-lg-start">
          <h1 className="fw-bold text-dark fs-2 fs-md-1">
            Frequently <br className="d-none d-lg-block" />
            Asked <span className="text-primary">Questions</span>
          </h1>
        </div>

        {/* RIGHT SECTION */}
        <div className="col-xl-7 col-lg-7 col-md-12 col-12">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-primary rounded-4 p-3 p-sm-4 mb-3"
                style={{ cursor: "pointer" }}
                onClick={() => toggleFAQ(index)}
              >
                {/* HEADER */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2 gap-sm-3">
                    <span className="text-primary fs-5 fs-sm-4">
                      {item.icon}
                    </span>

                    <h6 className="mb-0 fw-semibold fs-6 fs-sm-5">
                      {item.question}
                    </h6>
                  </div>

                  <span className="text-primary fs-5 fs-sm-4">
                    {isOpen ? <RxCross1 /> : <FaPlus />}
                  </span>
                </div>

                {/* ANSWER */}
                <div
                  className="ps-0 ps-sm-5"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.4s ease",
                  }}
                >
                  <p className="mt-3 mb-0 text-muted small">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaQ;

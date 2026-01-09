import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaPlus, FaYoutube } from "react-icons/fa";
import { IoPeopleSharp, IoLayersSharp } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import { FaFlag, FaUsers, FaMessage } from "react-icons/fa6";
import "./FaQ.css";

const faqData = [
  {
    question: "What is the refund policy?",
    answer:
      "We offer risk-free purchases across all courses. You can avail a full refund in 14 days of purchase, no questions asked. This is applicable across all courses and all plans.",
    icon: <FaFlag />,
  },
  {
    question: "Are the courses conducted live?",
    answer: "No, all the courses are self-paced and come with lifetime access. You can go through the course at your own pace.",
    icon: <FaYoutube />,
  },
  {
    question: "Do the courses have any live interaction?",
    answer: "The premium plan of all the courses except ‘The Complete Guide To Starting Up’ and 'The Art Of Cold Emailing' come with access to live group Q&A sessions with warikoo. These sessions are designed for students to ask questions and clarify any doubts.",
    icon: <IoPeopleSharp />,
  },
  {
    question: "Are there any criteria for joining the courses?",
    answer: "Not at all! The courses are designed for anyone and everyone who want to learn.",
    icon: <TiTickOutline />,
  },
  {
    question: "Can I enroll in multiple courses?",
    answer: "Yes, go for it! There are no limits on the number of courses that you can take up. We encourage you to join any and all courses that you might find useful.",
    icon: <IoLayersSharp />,
  },
  {
    question: "Is there a community that I can join?",
    answer: "Yes, go for it! There are no limits on the number of courses that you can take up. We encourage you to join any and all courses that you might find useful.",
    icon: <FaUsers />,
  },
  {
    question: "Whom do I contact in case of any issues?",
    answer: "If you need any assistance, please reach out to us via WhatsApp and your concerns will be addressed instantly..",
    icon: <FaMessage />,
  },
];

const FaQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="container py-5 faq-section"
      style={{
        backgroundImage: 'url("/freequently/freequently.svg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "contain",
      }}
    >
      <div className="row align-items-start">
        {/* LEFT */}
        <div className="col-lg-5 col-12 mb-4">
          <h1 className="fw-bold faq-title text-dark">
            Frequently <br />
            Asked <span>Questions</span>
          </h1>
        </div>

        {/* RIGHT */}
        <div className="col-lg-7 col-12">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="faq-card"
                onClick={() => toggleFAQ(index)}
              >
                {/* HEADER */}
                <div className="faq-header">
                  <div className="faq-left">
                    <span className="faq-icon">{item.icon}</span>
                    <h6 className="text-dark">{item.question}</h6>
                  </div>

                  <span className="faq-toggle">
                    {isOpen ? <RxCross1 /> : <FaPlus />}
                  </span>
                </div>

                {/* BODY */}
                <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaQ;

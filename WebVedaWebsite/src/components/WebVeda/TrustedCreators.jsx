import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TrustedCreators.css";

const testimonials = [
  {
    name: "Vaibhav Sisinty",
    handle: "@vaibhavsisinty",
    text: "WebVeda is changing the way people look at their personal lives and careers. It’s incredible to see a platform that prioritizes meaningful learning experiences like WebVeda does.",
    img: "/trustedcreators/vaibhab-sisinty.avif",
  },
  {
    name: "Raj Shamani",
    handle: "@rajshamani",
    text: "Most of what I do is a skill that I developed through practice, not education. So it was wonderful to contribute to a platform like WebVeda that truly values real-world skills.",
    img: "/trustedcreators/Raj-Shamani.avif",
  },
  {
    name: "Viraj Seth",
    handle: "@virajseth",
    text: "It’s rare to find a platform like WebVeda that values quality over quantity. They’re shaping the way skills are developed and practiced.",
    img: "/trustedcreators/Viraj-seth.avif",
  },
  {
    name: "Niharikaa Kaur",
    handle: "@niharikaakaur",
    text: "WebVeda is designed to set you up to win in your personal life and at work. These are all the skills you need to be a top performer and ace life. I can't recommend it enough!",
    img: "/trustedcreators/Niharika-kaur.avif",
  },
  {
    name: "Anabelle Colaco",
    handle: "@anabellecolaco",
    text: "WebVeda will teach you what traditional education won't: how to look beyond the mainstream and build something meaningful for yourself.",
    img: "/trustedcreators/anabell-calaco.avif",
  },
  {
    name: "Manish Panday",
    handle: "@manishpanday",
    text: "I believe content creation is entrepreneurship 3.0 and WebVeda will teach you just how to conquer this arena. With the guidance of WebVeda and some hard work on your part, you can truly transform your life.",
    img: "/trustedcreators/Manish-Panday.avif",
  },
  {
    name: "Shreya Pattar",
    handle: "@shreyapattar",
    text: "As a business owner, I know how important it is to be a master of many skills. WebVeda sets you up for exactly that - excellence across the many facets you need in your professional and personal life.",
    img: "/trustedcreators/Shreya-pattar.avif",
  },
  {
    name: "Chetan Goyal",
    handle: "@manishpanday",
    text: "As a full-time content creator, I know that this job requires smart work and dedication. If you have the dedication, you  can learn all the tips and tricks of the trade on WebVeda.",
    img: "/trustedcreators/Chetan-Goyal.avif",
  },
  {
    name: "Sharan Hegde",
    handle: "@sharanhegde",
    text: "As someone who is dedicated to sharing knowledge in a fun and effective way, I really admire what WebVeda has achieved through its courses.",
    img: "/trustedcreators/Sharan-Headke.avif",
  },
  {
    name: "Radhika worrako",
    handle: "@radhikaworrako",
    text: "I am a dancer, teacher, creator, and supporter of WebVeda! The courses on WebVeda have the potential to transform your life. All you have to do is take the first step.",
    img: "/trustedcreators/Niharika-kaur.avif",
  },
  {
    name: "Niraj Arora",
    handle: "@nirajarora",
    text: "Ankur teaches with clarity, honesty, and transparency. I am sure that their students will learn significantly, grow, and become excellent individuals.",
    img: "/trustedcreators/Raj-Shamani.avif",
  },
];

export default function TrustedByCreators() {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5 text-dark">
        Trusted By <span className="text-primary">Creators</span>
      </h2>

      <div className="scroll-wrapper">
        <div className="row g-4 scroll-row">
          {[0, 1, 2].map((colIndex) => (
            <div
              key={colIndex}
              className={`col-12 col-md-6 col-lg-4 ${
                colIndex === 1 ? "scroll-down" : "scroll-up"
              }`}
            >
              <div className="scroll-inner">
                {[...testimonials, ...testimonials].map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="card shadow-sm border-primary h-100">
                      <div className="card-body d-flex flex-column justify-content-between">
                        <p className="text-muted">{item.text}</p>
                        <div className="d-flex align-items-center mt-3">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="rounded-circle me-3"
                            width="45"
                            height="45"
                          />
                          <div>
                            <h6 className="mb-0 text-primary">{item.name}</h6>
                            <small className="text-muted">{item.handle}</small>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primary" style={{ height: "5px" }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { FaLinkedinIn, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">

        {/* TOP SECTION */}
        <div className="row gy-5 align-items-center">

          {/* LEFT: Logo + Description */}
          <div className="col-lg-6 col-md-12 text-center text-lg-start">
            <h1 className="fw-bold text-white mb-1">
              <span className="text-primary">Web</span>Veda
            </h1>
            <p className="text-secondary mb-3">by Ankur Warikoo</p>
            <p className="text-light fs-6">
              Super practical courses, with a no-nonsense approach, designed to help you make life decisions from a point of awareness.
            </p>
          </div>

          {/* RIGHT: Social + Support */}
          <div className="col-lg-6 col-md-12">
            <div className="d-flex flex-column gap-4 align-items-center align-items-lg-end">

              {/* SOCIAL LINKS */}
              <div className="text-center text-lg-end">
                <h5 className="text-white mb-3">Follow us on</h5>
                <div className="d-flex gap-3 justify-content-center justify-content-lg-end flex-wrap">
                  <SocialIcon><FaLinkedinIn /></SocialIcon>
                  <SocialIcon><FaYoutube /></SocialIcon>
                  <SocialIcon><FaInstagram /></SocialIcon>
                </div>
              </div>

              {/* SUPPORT */}
              <div className="text-center text-lg-end">
                <h5 className="text-white mb-3">For Support</h5>
                <SupportIcon><FaWhatsapp /></SupportIcon>
              </div>

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="border-secondary my-4" />

        {/* BOTTOM SECTION */}
        <div className="row gy-3 align-items-center text-center text-md-start">

          <div className="col-md-6">
            <span className="text-secondary">© Copyright 2025</span>
          </div>

          <div className="col-md-6">
            <div className="d-flex gap-3 justify-content-center justify-content-md-end flex-wrap">
              <FooterLink text="Privacy Policy" />
              <FooterLink text="Terms of Use" />
              <FooterLink text="Contact Us" />
              <FooterLink text="Blogs" />
              <FooterLink text="Refund Policy" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

/* Reusable Components */

const SocialIcon = ({ children }) => (
  <div className="social-icon d-flex align-items-center justify-content-center rounded">
    {children}
  </div>
);

const SupportIcon = ({ children }) => (
  <div className="support-icon d-flex align-items-center justify-content-center rounded-circle">
    {children}
  </div>
);

const FooterLink = ({ text }) => (
  <a href="#" className="text-primary text-decoration-none fw-medium">{text}</a>
);

export default Footer;

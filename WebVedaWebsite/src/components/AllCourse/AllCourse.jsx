import { useState } from "react";
import "./AllCourse.css";
import Footer from "../Footer/Footer";
import { MdKeyboardVoice } from "react-icons/md";
import { FaArrowRight, FaGraduationCap } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Start Your Freelancing Career",
    category: "Launchpad",
    tag: "Newly Launched!",
    image: "/allcourse/allcourse-img-1.avif",
    language: "In English",
    students: "Newly Launched!",
    price: "₹ 3499",
    gradient:
      "linear-gradient(270deg, var(--token-646cb7b0-3366-432f-bf19-27900c258786, rgb(194, 255, 245)) -35%, var(--token-839472c6-25f7-4ba5-a7e7-a36bd76225ca, rgb(0, 139, 117)) 65%)",
  },
  {
    id: 2,
    title: "Master Communication Skills",
    category: "Growth",
    image: "/allcourse/allcourse-img-2.avif",
    language: "In English & Hindi",
    students: "92K+ Students",
    price: "₹ 649",
    gradient:
      "linear-gradient(270deg, rgb(167, 136, 227) -15%, rgb(101, 116, 226) 55%)",
  },
  {
    id: 3,
    title: "Get More Done In Less Time",
    category: "Productivity",
    image: "/allcourse/allcourse-img-3.avif",
    language: "In English & Hindi",
    students: "259K Students",
    price: "₹ 399",
    gradient:
      "linear-gradient(270deg, var(--token-c12c7ce4-9a91-4b3d-a1e3-de315c8b6c21, rgb(254, 215, 154)) -35%, var(--token-4add3aa4-2bef-4d56-bbfc-7466f85a1c79, rgb(251, 161, 20)) 65%)",
  },
  {
    id: 4,
    title: "Time Management Mastery",
    category: "Growth",
    image: "/allcourse/allcourse-img-4.avif",
    language: "In English & Hindi",
    students: "120K Students",
    price: "₹ 499",
    gradient:
      "linear-gradient(270deg, rgb(1, 207, 122) -53%, rgb(0, 156, 91) 98.4234%)",
  },
  {
    id: 5,
    title: "Personal Branding",
    category: "Growth",
    image: "/allcourse/allcourse-img-5.avif",
    language: "In English & Hindi",
    students: "80K Students",
    price: "₹ 599",
    gradient:
      "linear-gradient(270deg, rgb(255, 95, 95) -15%, rgb(130, 23, 23) 100%)",
  },
  {
    id: 6,
    title: "Career Growth Blueprint",
    category: "Growth",
    image: "/allcourse/allcourse-img-6.avif",
    language: "In English & Hindi",
    students: "150K Students",
    price: "₹ 699",
    gradient:
      "linear-gradient(270deg, rgb(255, 238, 183) -25%, rgb(250, 200, 33) 75%)",
  },
  {
    id: 7,
    title: "Money Management Basics",
    category: "Money",
    image: "/allcourse/allcourse-img-7.avif",
    language: "In English & Hindi",
    students: "200K Students",
    price: "₹ 899",
    gradient:
      "linear-gradient(270deg, rgb(255, 220, 167) -30%, rgb(251, 176, 59) 51%)",
  },
  {
    id: 8,
    title: "Stock Market for Beginners",
    category: "Money",
    image: "/allcourse/allcourse-img-8.avif",
    language: "In English & Hindi",
    students: "300K Students",
    price: "₹ 999",
    gradient:
      "linear-gradient(270deg, rgb(219, 101, 187) -5%, rgb(174, 63, 144) 100%)",
  },
  {
    id: 9,
    title: "Passive Income Ideas",
    category: "Money",
    image: "/allcourse/allcourse-img-9.avif",
    language: "In English & Hindi",
    students: "180K Students",
    price: "₹ 799",
    gradient:
      "linear-gradient(270deg, rgb(107, 185, 224) 0%, rgb(0, 102, 153) 100%)",
  },
  {
    id: 10,
    title: "Freelancing Launchpad",
    category: "Launchpad",
    image: "/allcourse/allcourse-img-10.avif",
    language: "In English & Hindi",
    students: "95K Students",
    price: "₹ 899",
    gradient:
      "linear-gradient(270deg, rgb(121, 158, 237) 0%, rgb(66, 105, 225) 100%)",
  },
  {
    id: 11,
    title: "Startup Launch Guide",
    category: "Launchpad",
    image: "/allcourse/allcourse-img-11.avif",
    language: "In English & Hindi",
    students: "60K Students",
    price: "₹ 1799",
    gradient:
      "linear-gradient(90deg, var(--token-972d5485-1c20-46b7-abe5-236928730e63, rgb(0, 90, 148)) 0%, var(--token-298ce003-1307-46f9-b1d1-0acf1ac3ff0b, rgb(0, 150, 152)) 100%)",
  },
  {
    id: 12,
    title: "Build Your First Product",
    category: "Launchpad",
    image: "/allcourse/allcourse-img-12.avif",
    language: "In English & Hindi",
    students: "45K Students",
    price: "₹ 1299",
    gradient:
      "linear-gradient(90deg, var(--token-089b8c10-b6fd-475a-953b-5e0979a315b1, rgb(108, 83, 166)) 45%, var(--token-4f7a3b7f-bbb9-427b-81b1-8e8cf2349983, rgb(239, 232, 255)) 145.00000000000003%)",
  },
];

function AllCourse() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section className="text-center pg-section">
      <div className="container mb-5">
        <h1 className="fw-bold display-5 mt-5 fs-1 fw-normal">
          Practical Courses
        </h1>
        <h2 className="fw-bold mt-2" style={{ color: "#4169e1" }}>
          For Work & Life
        </h2>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          {["All", "Productivity", "Growth", "Money", "Launchpad"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn rounded-pill px-4 ${
                  activeCategory === cat ? "btn-primary" : "btn-outline-primary"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Cards */}
        <div className="container py-4 py-md-5 mb-5">
          <div className="row g-4 justify-content-center">
            {filteredCourses.map((course, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div className="freelance-card h-100">
                  {/* IMAGE */}
                  <div className="freelance-image">
                    <img src={course.image} alt={course.title} />
                  </div>

                  {/* BODY */}
                  <div className="freelance-body">
                    <h6 className="fw-semibold text-white mb-2">
                      {course.title}
                    </h6>

                    <hr className="divider my-2" />

                    <div className="d-flex justify-content-between small text-light m-2">
                      <span>
                        <MdKeyboardVoice /> {course.language}
                      </span>
                      <span>
                        <FaGraduationCap /> {course.students}
                      </span>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div
                    className="freelance-footer"
                    style={{ background: course.gradient }}
                  >
                    Starts at {course.price} <FaArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default AllCourse;

import { useEffect, useState } from "react";
import "./About.css";

/* PEOPLE & LEADERSHIP IMAGES */
import correspondent from "../Assets/About/correspondent1.jpg";
import principal1 from "../Assets/About/principa.jpg";
import teachersGroup from "../Assets/About/staffgroup.jpg";
import monOff1 from "../Assets/About/montoring-1.jpg";
import withoutu from "../Assets/About/withoutu1.jpeg";
import jursnrmeet from "../Assets/About/JrMeet.jpg";

/* AUTO LOAD TEACHER AWARDS (ta1 → ta33) */
const importAll = (context) =>
  context.keys().map(context);

const awardImages = importAll(
  require.context("../Assets/About/staffawards/", false, /^\.\/ta\d+\.jpg$/)
).sort((a, b) =>
  a.localeCompare(b, undefined, { numeric: true })
);

export default function About() {
  const [peopleExpanded, setPeopleExpanded] = useState({});
  const [expandedSections, setExpandedSections] = useState({});

  const togglePeople = (index) => {
    setPeopleExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const peopleSections = [
    {
      title: "Correspondent",
      subtitle: "Guiding Vision",
      desc: "Sr. Roney provides spiritual leadership and guidance that shapes the vision and mission of our institution.",
      images: [correspondent],
    },
    {
      title: "Principal",
      subtitle: "Leadership Icons",
      desc: "Dynamic leadership that nurtures academic excellence, discipline, and holistic development.",
      images: [principal1],
    },
    {
      title: "Moulding Hands",
      subtitle: "Our Teaching Faculty",
      desc: "Dedicated teachers who inspire, guide, and mould young minds with care and commitment.",
      images: [teachersGroup],
    },
    {
      title: "Monitoring Centre",
      subtitle: "Office & Administration",
      desc: "Efficient administrative and office staff ensuring smooth academic and institutional operations.",
      images: [monOff1],
    },
    {
      title: "Without You, Nothing",
      subtitle: "Our Care Takers",
      desc: "Support staff who maintain a safe, clean, and nurturing environment for every child.",
      images: [withoutu],
    },
    {
      title: "Teachers Awards",
      subtitle: "Recognising Excellence",
      desc: "Celebrating the dedication and achievements of our teachers through awards and recognitions.",
      images: awardImages,
    },
    {
      title: "Updation & Ongoing Training",
      subtitle: "Seminars & Workshops",
      desc: "Continuous professional development through seminars for parents, teachers, and students.",
      images: [jursnrmeet],
    },
  ];

  /* INTERSECTION OBSERVER (STATIC CONTENT ONLY) */
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".about .reveal, .about .reveal-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const renderImages = (images, sectionIndex) => {
    const isExpanded = expandedSections[sectionIndex];

    return (
      <>
        <div className="people-grid">
          {/* COLLAPSED VIEW */}
          {!isExpanded &&
            images.slice(0, 3).map((img, i) => (
              <div key={i} className="people-card">
                <img src={img} alt={`people-${i}`} />
              </div>
            ))}

          {/* SEE MORE CARD */}
          {!isExpanded && images.length > 4 && (
            <div
              className="people-card see-more"
              onClick={() =>
                setExpandedSections((prev) => ({
                  ...prev,
                  [sectionIndex]: true,
                }))
              }
            >
              <span>+{images.length - 3}</span>
              <p>See More</p>
            </div>
          )}

          {/* EXPANDED VIEW */}
          {isExpanded &&
            images.map((img, i) => (
              <div key={i} className="people-card">
                <img src={img} alt={`people-expanded-${i}`} />
              </div>
            ))}
        </div> 
        {/* SHOW LESS BUTTON */}
        {isExpanded && (
          <div className="gallery-toggle">
            <button
              onClick={() =>
                setExpandedSections((prev) => ({
                  ...prev,
                  [sectionIndex]: false,
                }))
              }
            >
              Show less
            </button>
          </div>
        )}
      </>
    );
  };


  return (
    <main className="about">

      {/* HERO */}
      <section className="about-hero">
        <div className="container hero-grid">
          <div className="hero-text reveal">
            <span className="hero-badge">About Our School</span>
            <h1>Educating Minds. Shaping Character.</h1>
            <p>
              Lourde Matha Convent Matric Hr. Sec. School is dedicated to nurturing
              academic excellence, strong moral values, and confident leadership.
            </p>
          </div>

          <div className="hero-cards">
            <div className="hero-card reveal-right delay-1">
              <h3>Founded on Faith</h3>
              <p>Education rooted in Christian values and discipline.</p>
            </div>

            <div className="hero-card accent reveal-right delay-2">
              <h3>Academic Excellence</h3>
              <p>Consistent results and holistic development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PEOPLE & LEADERSHIP */}
      <section className="about-people">
        <div className="container">
          <div className="people-header reveal">
            <span>Our Strength</span>
            <h2>People & Leadership</h2>
            <p>
              Behind every successful institution is a dedicated team of leaders,
              educators, and support staff working together with commitment and care.
            </p>
          </div>

          {peopleSections.map((section, index) => (
            <div key={index} className="people-block">
              <div className="people-text reveal">
                <span>{section.subtitle}</span>
                <h3>{section.title}</h3>
                <p>{section.desc}</p>
              </div>

              {renderImages(section.images, index)}
            </div>
          ))}
        </div>
      </section>

      {/* MOTTO */}
      <section className="about-motto reveal">
        <div className="container">
          <h3>Our Guiding Principle</h3>
          <strong>Love • Knowledge • Service</strong>
        </div>
      </section>

    </main>
  );
}

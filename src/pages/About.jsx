import { useEffect } from "react";
import "./About.css";

export default function About() {

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

  return (
    <main className="about">

      {/* HERO – SPLIT LAYOUT */}
      <section className="about-hero">
        <div className="container hero-grid">

          {/* LEFT CONTENT */}
          <div className="hero-text reveal">
            <span className="hero-badge">About Our School</span>
            <h1>Educating Minds. Shaping Character.</h1>
            <p>
              Lourde Matha Convent Matric Hr. Sec. School is dedicated to nurturing
              academic excellence, strong moral values, and confident leadership.
            </p>
          </div>

          {/* RIGHT FLOATING CARDS */}
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

      {/* STORY */}
      <section className="about-story reveal">
        <div className="container">
          <p>
            At Lourde Matha Convent Matric Hr. Sec. School, we believe education is not
            merely about academic achievement, but about shaping responsible,
            compassionate, and capable individuals who contribute positively
            to society.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="about-values">
        <div className="container values-grid">

          <div className="value-glass reveal delay-1">
            <span>Our Vision</span>
            <h2>Empowering Future Leaders</h2>
            <p>
              We strive to empower women and children through Christian formation.
              
            </p>
          </div>

          <div className="value-glass reveal delay-2">
            <span>Our Mission</span>
            <h2>Educating with Purpose</h2>
            <p>
              To educate children to become active and responsible citizens
            </p>
            <p>
              To impact knowledge and wisdom with love and dedication
            </p>
            <p>
              To mould christ like leaders who will transform the society
            </p>
          </div>

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

import { useEffect } from "react";
import "./StudentLife.css";

export default function StudentLife() {

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".studentlife-page .reveal, .studentlife-page .reveal-right"
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

  const activities = [
    {
      tag: "Spiritual",
      title: "Spiritual Formation",
      desc: "Daily prayer, moral instruction, and Christian values that nurture character and faith."
    },
    {
      tag: "Sports",
      title: "Sports & Physical Training",
      desc: "Encouraging fitness, teamwork, discipline, and sportsmanship through structured activities."
    },
    {
      tag: "Culture",
      title: "Cultural Activities",
      desc: "Music, dance, drama, and literary competitions that encourage creativity and expression."
    },
    {
      tag: "Leadership",
      title: "Leadership & Discipline",
      desc: "Student councils and responsibility-based learning to develop confident leaders."
    }
  ];

  return (
    <main className="studentlife-page">

      {/* HERO */}
      <section className="studentlife-hero">
        <div className="container hero-grid">

          <div className="hero-text reveal">
            <span className="hero-badge">Student Life</span>
            <h1>
              Holistic Growth <br />
              Beyond Academics
            </h1>
            <p>
              Student life at Lourde Matha Convent Hr. Sec. School
              nurtures discipline, creativity, leadership, and faith.
            </p>
          </div>

          <div className="hero-cards">
            <div className="hero-card reveal-right delay-1">
              <strong>Balanced</strong>
              <span>Mind & Body</span>
            </div>

            <div className="hero-card reveal-right delay-2">
              <strong>Values</strong>
              <span>Faith & Discipline</span>
            </div>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="studentlife-intro reveal">
        <div className="container">
          <p>
            Our approach to student life ensures that every child
            grows intellectually, morally, physically, and socially
            in a caring and disciplined environment.
          </p>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="studentlife-content">
        <div className="container content-grid">
          {activities.map((item, i) => (
            <div key={i} className={`info-card reveal delay-${i + 1}`}>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="studentlife-commitment reveal">
        <div className="container">
          <h2>Shaping Well-Rounded Individuals</h2>
          <p>Faith • Discipline • Leadership</p>
        </div>
      </section>

    </main>
  );
}

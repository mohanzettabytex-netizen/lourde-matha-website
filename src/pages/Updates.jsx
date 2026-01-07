import { useEffect } from "react";
import "./Updates.css";

export default function Updates() {

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".updates-page .reveal, .updates-page .reveal-right"
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

  const updates = [
    {
      date: "12 June 2025",
      title: "School Reopening",
      desc: "The school will reopen for the new academic year on June 12. Students are requested to report on time."
    },
    {
      date: "15 August 2025",
      title: "Independence Day Celebration",
      desc: "Independence Day will be celebrated with cultural programs and student performances."
    },
    {
      date: "24 December 2025",
      title: "Christmas Program",
      desc: "Annual Christmas celebration for students and parents will be held on campus."
    }
  ];

  return (
    <main className="updates-page">

      {/* HERO */}
      <section className="updates-hero">
        <div className="container hero-grid">

          <div className="hero-text reveal">
            <span className="hero-badge">Updates</span>
            <h1>
              School <br />
              Announcements & <br />
              Notices
            </h1>
            <p>
              Stay informed about important announcements,
              events, and updates from Lourde Matha Convent Matric Hr. Sec. School
            </p>
          </div>

          <div className="hero-cards">
            <div className="hero-card reveal-right delay-1">
              <strong>Latest</strong><br/>
              <span>School News</span>
            </div>

            <div className="hero-card reveal-right delay-2">
              <strong>Events</strong><br/>
              <span>Programs & Notices</span>
            </div>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="updates-intro reveal">
        <div className="container">
          <p>
            This section keeps parents and students informed
            about academic schedules, celebrations, holidays,
            and important announcements.
          </p>
        </div>
      </section>

      {/* UPDATES LIST */}
      <section className="updates-content">
        <div className="container updates-grid">
          {updates.map((item, i) => (
            <div key={i} className={`update-card reveal delay-${i + 1}`}>
              <span className="update-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="updates-commitment reveal">
        <div className="container">
          <h2>Stay Connected With Us</h2>
          <p>Communication • Awareness • Engagement</p>
        </div>
      </section>

    </main>
  );
}

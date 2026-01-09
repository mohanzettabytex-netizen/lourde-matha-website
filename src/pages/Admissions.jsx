import { useEffect } from "react";
import "./Admissions.css";

export default function Admissions() {

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".admissions .reveal, .admissions .reveal-right"
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
    <main className="admissions">

      {/* HERO */}
      <section className="admissions-hero">
        <div className="container hero-grid">

          <div className="hero-text reveal">
            <span className="hero-badge">Admissions</span>
            <h1>Transparent & Structured Admission Process</h1>
            <p>
              Our admission procedure is designed to be simple,
              clear, and fair, ensuring a smooth experience for
              parents and students.
            </p>
          </div>

          <div className="hero-stats">
            <div className="hero-card reveal-right delay-1">
              <strong>Open</strong>
              <span>All Communities</span>
            </div>

            <div className="hero-card reveal-right delay-2">
              <strong>Guided</strong>
              <span>Admission Support</span>
            </div>
          </div>

        </div>
      </section>

      {/* STORY */}
      <section className="admissions-story reveal">
        <div className="container">
          <p>
            At Lourde Matha Convent Matric Hr. Sec. School, admissions are
            conducted with transparency, discipline, and respect
            for every family seeking quality education.
          </p>
        </div>
      </section>

      {/* STRUCTURE */}
      <section className="admissions-structure">
        <div className="container structure-grid">

          <div className="structure-card reveal delay-1">
            <span>Step 01</span>
            <h3>Application Form</h3>
            <p>
              Application forms must be collected directly from
              the school office during working hours.
            </p>
          </div>

          <div className="structure-card reveal delay-2">
            <span>Step 02</span>
            <h3>Document Submission</h3>
            <p>
              Submit the completed application along with
              Transfer Certificate and Birth Certificate.
            </p>
          </div>

          <div className="structure-card reveal delay-3">
            <span>Step 03</span>
            <h3>Parent Interaction</h3>
            <p>
              Parent or guardian must be present at the
              time of admission for verification.
            </p>
          </div>

          <div className="structure-card highlight reveal delay-4">
            <span>Important</span>
            <h3>Admission Policy</h3>
            <p>
              Admissions are primarily intended for Catholic students,
              but are open to students of all communities.
            </p>
          </div>

        </div>
      </section>

      {/* STATEMENT */}
      <section className="admissions-statement reveal">
        <div className="container">
          <h2>Our Admission Commitment</h2>
          <p>Transparency • Fairness • Care</p>
        </div>
      </section>

    </main>
  );
}

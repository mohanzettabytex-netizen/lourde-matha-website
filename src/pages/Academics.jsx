import { useEffect } from "react";
import toper121 from "../Assets/Toppers/12-1.png";
import toper122 from "../Assets/Toppers/12-2.png";
import toper123 from "../Assets/Toppers/12-3.png";
import toper124 from "../Assets/Toppers/12-4.png";
import toper111 from "../Assets/Toppers/11-1.png";
import toper112 from "../Assets/Toppers/11-2.png";
import toper113 from "../Assets/Toppers/11-3.png";
import toper211 from "../Assets/Toppers/10-1.png";
import toper212 from "../Assets/Toppers/10-2.png";
import "./Academics.css";

export default function Academics() {

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".academics .reveal, .academics .reveal-right"
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

  const classXII = [
    { img: toper121, name: "DEEKSHA A", rank: " Rank I" },
    { img: toper122, name: "SHREE AKILA R", rank: "Rank II" },
    { img: toper123, name: "MADHUMITHA K", rank: "Rank III" },
    { img: toper124, name: "ASWIN T", rank: "Rank III" },
  ];

  const classXI = [
    { img: toper111, name: "SHREE VITHGASELVI", rank: "Rank I" },
    { img: toper112, name: "EZHIL S", rank: "Rank II" },
    { img: toper113, name: "DANYA S", rank: "Rank III" },
  ];

  const classX = [
    { img: toper211, name: "PRIYANKA B", rank: "Rank I" },
    { img: toper212, name: "ABISHEK V P", rank: "Rank II" },
  ];



  return (
    <main className="academics">

      {/* HERO */}
      <section className="academics-hero">
        <div className="container hero-grid">

          {/* LEFT TEXT */}
          <div className="hero-text reveal">
            <span className="hero-badge">Academics</span>
            <h1>Learning With Purpose & Discipline</h1>
            <p>
              Our academic program is designed to develop intellectual
              strength, moral integrity, and lifelong curiosity.
            </p>
          </div>

          {/* RIGHT FLOATING CARDS */}
          <div className="hero-cards">
            <div className="hero-card reveal-right delay-1">
              <h3>Structured Curriculum</h3>
              <p>Matriculation syllabus aligned with state standards.</p>
            </div>

            <div className="hero-card accent reveal-right delay-2">
              <h3>Holistic Evaluation</h3>
              <p>Balanced assessments for continuous improvement.</p>
            </div>
          </div>

        </div>
      </section>

      {/* STORY */}
      <section className="academics-story reveal">
        <div className="container">
          <p>
            At Lourde Matha Convent Matric Hr. Sec. School, academics go beyond
            textbooks. Our learning environment promotes discipline,
            conceptual understanding, and values-based education.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="academics-values">
        <div className="container values-grid">

          <div className="value-glass reveal delay-1">
            <span>Curriculum</span>
            <h2>Matriculation System</h2>
            <p>
              The school follows the Matriculation curriculum prescribed
              by the Tamil Nadu Education Board.
            </p>
          </div>

          <div className="value-glass reveal delay-2">
            <span>Instruction</span>
            <h2>Medium of Education</h2>
            <p>
              English is the medium of instruction. Tamil, Hindi, and French are offered as second languages.
            </p>
          </div>

          <div className="value-glass reveal delay-3">
            <span>Assessment</span>
            <h2>Evaluation Process</h2>
            <p>
              Students are assessed through Term I, II, and III
              examinations with continuous evaluation.
            </p>
          </div>

          <div className="value-glass highlight reveal delay-4">
            <span>Schedule</span>
            <h2>School Timings</h2>
            <p>
              9:15 AM – 4:00 PM <br />
              Lunch Break: 12:15 PM – 1:00 PM
            </p>
          </div>

        </div>
      </section>

      {/* ACADEMIC TOPPERS */}
      <section className="academics-toppers">
        <div className="container">

          <div className="toppers-header reveal">
            <span>Academic Commitments</span>
            <h2>School Toppers – 2024–25</h2>
            <p>
              Recognising outstanding academic excellence and
              consistent performance achieved by our students.
            </p>
          </div>

          {/* ===== CLASS XII ===== */}
          <div className="toppers-block">
            <h3 className="toppers-title">Class XII</h3>

            <div className="toppers-grid">
              {classXII.map((student, index) => (
                <div key={index} className="topper-card reveal">

                  {/* RANK BADGE */}

                  <div className="avatar">
                    <img src={student.img} alt={`Class XII Topper ${student.name}`} />
                  </div>

                  <span className="rank-badge">{student.rank}</span>
                  <h3>{student.name}</h3>
                  <p className="class">Class XII</p>
                </div>
              ))}
            </div>
          </div>

          {/* ===== CLASS XI ===== */}
          <div className="toppers-block">
            <h3 className="toppers-title">Class XI</h3>

            <div className="toppers-grid">
              {classXI.map((student, index) => (
                <div key={index} className="topper-card reveal">


                  <div className="avatar">
                    <img src={student.img} alt={`Class XI Topper ${student.name}`} />
                  </div>
                  <span className="rank-badge">{student.rank}</span>

                  <h3>{student.name}</h3>
                  <p className="class">Class XI</p>
                </div>
              ))}
            </div>
          </div>



          {/* ===== CLASS X ===== */}
          <div className="toppers-block">
            <h3 className="toppers-title">Class X</h3>

            <div className="toppers-grid">
              {classX.map((student, index) => (
                <div key={index} className="topper-card reveal">


                  <div className="avatar">
                    <img src={student.img} alt={`Class X Topper ${student.name}`} />
                  </div>
                  <span className="rank-badge">{student.rank}</span>

                  <h3>{student.name}</h3>
                  <p className="class">Class X</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* STATEMENT */}
      <section className="academics-statement reveal">
        <div className="container">
          <h3>Our Academic Commitment</h3>
          <strong>Excellence • Discipline • Integrity</strong>
        </div>
      </section>

    </main>
  );
}

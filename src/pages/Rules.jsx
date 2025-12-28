import { useState } from "react";
import "./Rules.css";

const rulesData = [
  {
    title: "General Discipline",
    content:
      "Students must maintain discipline inside and outside the school premises. Respect for teachers, elders, and fellow students is mandatory."
  },
  {
    title: "Attendance & Punctuality",
    content:
      "Regular attendance is compulsory. Students arriving late must report to the school office before entering class."
  },
  {
    title: "Uniform Rules",
    content:
      "Students must wear the prescribed school uniform neatly on all working days. Fancy accessories are not permitted."
  },
  {
    title: "Parent Responsibilities",
    content:
      "Parents are requested to cooperate with the school authorities and attend meetings regularly."
  }
];

export default function Rules() {
  const [active, setActive] = useState(null);

  return (
    <section className="rules-page">
      <div className="rules-hero">
        <h1>School Rules & Regulations</h1>
        <p>Guidelines for a disciplined and safe learning environment</p>
      </div>

      <div className="container rules-list">
        {rulesData.map((rule, index) => (
          <div
            key={index}
            className={`rule-item ${active === index ? "open" : ""}`}
            onClick={() => setActive(active === index ? null : index)}
          >
            <div className="rule-title">
              <h3>{rule.title}</h3>
              <span>{active === index ? "−" : "+"}</span>
            </div>

            {active === index && (
              <p className="rule-content">{rule.content}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

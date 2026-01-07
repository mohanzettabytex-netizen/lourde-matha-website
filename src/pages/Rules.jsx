import { useEffect, useState } from "react";
import "./Rules.css";

const rulesData = [
  {
    tag: "Responsibility",
    title: "Personal Belongings",
    content:
      "Pupils are solely responsible for their personal belongings such as books, writing materials, tiffin boxes, etc. The school is not responsible for any goods lost."
  },
  {
    tag: "Language",
    title: "Medium of Communication",
    content:
      "Only English should be spoken within the school premises."
  },
  {
    tag: "Assembly",
    title: "Assembly & Reporting Time",
    content:
      "All pupils are expected to be present before the first bell at 9.10 a.m. for the morning assembly and at 1.00 p.m. for the afternoon session."
  },
  {
    tag: "Attendance",
    title: "Punctuality & Leave",
    content:
      "Pupils must be punctual on every working day. No pupil may absent herself or himself without prior permission. A leave letter signed by the parent or guardian must be sent to the Principal through the class teacher."
  },
  {
    tag: "Discipline",
    title: "Conduct & Behaviour",
    content:
      "Irregular attendance, failure to submit assignments, habitual idleness, neglect of homework, disobedience, or disrespect towards teachers will justify dismissal. Pupils are answerable to school authorities for their conduct both inside and outside the school."
  },
  {
    tag: "Permission",
    title: "Late Coming",
    content:
      "No absentee or latecomer shall enter the class without written permission from the Principal."
  },
  {
    tag: "Classroom",
    title: "Class Discipline",
    content:
      "No pupil should disturb other classes during working hours for reasons such as borrowing pens, pencils, or books."
  },
  {
    tag: "Property",
    title: "School Property",
    content:
      "Pupils must respect school property. Damage to furniture, scribbling on walls, or destruction of property must be compensated. The decision of compensation rests with the Principal."
  },
  {
    tag: "Cleanliness",
    title: "Clean Environment",
    content:
      "Pupils should keep the classrooms and school premises absolutely clean."
  },
  {
    tag: "Safety",
    title: "Prohibited Activities",
    content:
      "Playing inside the classroom is strictly prohibited."
  },
  {
    tag: "Security",
    title: "Leaving School Premises",
    content:
      "No pupil shall leave the school premises during school hours without the permission of the Principal."
  },
  {
    tag: "Prohibition",
    title: "Objectionable Materials",
    content:
      "Pupils are strictly forbidden to bring any objectionable material to the school."
  },
  {
    tag: "Holidays",
    title: "Absence on Important Days",
    content:
      "Absence on opening and closing days of a term or after special holidays such as Christmas, Deepavali, and Pongal is not appreciated. In case of illness, parents must inform the school in advance and submit a medical certificate for absences exceeding three to five days."
  },
  {
    tag: "Attendance",
    title: "Continuous Absence",
    content:
      "A pupil absenting herself or himself continuously for 15 days without permission will have their admission terminated."
  },
  {
    tag: "Parents",
    title: "Parental Cooperation",
    content:
      "Parents are expected to cooperate with the school by enforcing regularity, punctuality, and discipline, and by taking interest in their children’s progress. They should check the diary regularly for remarks and homework."
  },
  {
    tag: "Academics",
    title: "Progress Reports",
    content:
      "Parents are requested to carefully review progress reports and ensure that their children make extra efforts in subjects where they are weak."
  },
  {
    tag: "Examinations",
    title: "Promotion Criteria",
    content:
      "Marks obtained in the I, II, and III Term Examinations will be considered for promotion. Results declared at the end of the year are final and will not be reconsidered."
  },
  {
    tag: "Office",
    title: "Office Timings",
    content:
      "The school office will function on school days from 9.00 a.m. to 4.00 p.m."
  },
  {
    tag: "Communication",
    title: "Meeting Authorities",
    content:
      "Parents are not permitted to meet teachers or students during school hours without the permission of the Principal. All correspondence must be addressed to the Principal."
  },
  {
    tag: "Permission",
    title: "Early Departure",
    content:
      "Parents wishing to take their children home during school hours must send a written explanation and identity card through a responsible person. A gate pass must be obtained from the Principal."
  },
  {
    tag: "Functions",
    title: "Official School Functions",
    content:
      "Attendance at official school functions such as Sports Day, Republic Day, and Independence Day is compulsory."
  },
  {
    tag: "Liability",
    title: "Accidents & Excursions",
    content:
      "The school will not be responsible for any accident to pupils during school hours or during excursions."
  },
  {
    tag: "Uniform",
    title: "Hair & Ornaments",
    content:
      "Pupils with long hair should wear it in two plaits tied with ribbons or hair bands according to uniform colour. Short hair should not fall below the collar or over the forehead. No pupil is allowed to wear gold ornaments to school."
  }
];


export default function Rules() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".rules .reveal, .rules .reveal-right"
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
    <main className="rules">

      {/* HERO */}
      <section className="rules-hero">
        <div className="container hero-grid">

          {/* LEFT */}
          <div className="hero-text reveal">
            <span className="hero-badge">Rules & Regulations</span>
            <h1>Discipline. Responsibility. Respect.</h1>
            <p>
              Our school rules are designed to ensure a safe, disciplined,
              and respectful learning environment for all students.
            </p>
          </div>

          {/* RIGHT */}
          <div className="hero-cards">
            <div className="hero-card reveal-right delay-1">
              <h3>Student Discipline</h3>
              <p>Guidelines that promote respect, order, and responsibility.</p>
            </div>

            <div className="hero-card accent reveal-right delay-2">
              <h3>Parent Partnership</h3>
              <p>Shared responsibility between school and home.</p>
            </div>
          </div>

        </div>
      </section>

      {/* STORY */}
      <section className="rules-story reveal">
        <div className="container">
          <p>
            Discipline is the foundation of excellence. Our rules and regulations
            guide students in developing self-control, responsibility, and
            respect for the school community.
          </p>
        </div>
      </section>

      {/* RULES GRID */}
      <section className="rules-values">
        <div className="container values-grid">
          {rulesData.map((rule, index) => (
            <div
              key={index}
              className="value-glass reveal"
              onClick={() => setActive(active === index ? null : index)}
            >
              <span>{rule.tag}</span>
              <h2>{rule.title}</h2>

              {(active === index || active === null) && (
                <p>{rule.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* STATEMENT */}
      <section className="rules-motto reveal">
        <div className="container">
          <h3>Our Discipline Philosophy</h3>
          <strong>Respect • Responsibility • Integrity</strong>
        </div>
      </section>

    </main>
  );
}

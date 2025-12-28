import "./Achievements.css";

const ACHIEVEMENTS = [
  { value: "100%", label: "Board Results" },
  { value: "25+", label: "Years of Excellence" },
  { value: "50+", label: "Awards & Trophies" },
  { value: "1000+", label: "Successful Alumni" }
];

export default function Achievements() {
  return (
    <section className="achievements-section premium-bg" aria-label="Achievements">
      <div className="achievements-overlay" /> 
      <div className="container achievements-box">
        <ul className="achievements-list">
          {ACHIEVEMENTS.map(({ value, label }) => (
            <li key={label} className="achievement">
              <h2 className="achievement-value">{value}</h2>
              <span className="achievement-label">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

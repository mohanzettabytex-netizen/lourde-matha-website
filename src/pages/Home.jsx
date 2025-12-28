import { useEffect, useRef, useState } from "react";
import "./Home.css";

const heroSlides = [
  {
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    title: "Shaping Future Leaders",
    subtitle: "Faith • Discipline • Excellence"
  },
  {
    img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
    title: "Learning Beyond Classrooms",
    subtitle: "Academic & Moral Growth"
  },
  {
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    title: "A Tradition of Excellence",
    subtitle: "Committed to Quality Education"
  }
];

const stats = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 100, suffix: "%", label: "Board Results" },
  { value: 50, suffix: "+", label: "Awards" },
  { value: 1000, suffix: "+", label: "Alumni" }
];


export default function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((p) => (p + 1) % heroSlides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);


  function Stat({ value, suffix, label }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasRun = useRef(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;

            let start = 0;
            const duration = 2000;
            const increment = Math.ceil(value / (duration / 16));

            const counter = setInterval(() => {
              start += increment;
              if (start >= value) {
                setCount(value);
                clearInterval(counter);
              } else {
                setCount(start);
              }
            }, 16);
          }
        },
        { threshold: 0.4 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [value]);

    return (
      <div ref={ref} className="stat">
        <strong>{count}{suffix}</strong>
        <span>{label}</span>
      </div>
    );
  }


  return (
    <main className="home-page">

      {/* HERO */}
      <section className="home-hero">
        {heroSlides.map((slide, i) => (
          <img
            key={i}
            src={slide.img}
            alt=""
            aria-hidden
            className={`hero-bg ${i === active ? "active" : ""}`}
          />
        ))}

        <div className="hero-overlay" />

        <div className="container hero-grid">
          <div className="hero-text">
            <span className="hero-badge">
              Lourde Matha Convent Hr. Sec. School
            </span>

            <h1>{heroSlides[active].title}</h1>
            <p>{heroSlides[active].subtitle}</p>

            <div className="hero-actions">
              <a href="/about" className="btn-primary">Explore School</a>
              <a href="/admissions" className="btn-outline">Admissions</a>
            </div>
          </div>

          <div className="hero-cards">
            {stats.slice(0, 2).map((s) => (
              <div key={s.label} className="hero-card">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="home-intro">
        <div className="container">
          <p>
            We combine academic excellence, moral discipline,
            and holistic development in a nurturing environment
            that prepares students for life.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="home-content">
        <div className="container content-grid">

          <div className="info-card">
            <span>Faculty</span>
            <h3>Experienced Educators</h3>
            <p>
              Qualified teachers guiding students with care,
              responsibility, and dedication.
            </p>
          </div>

          <div className="info-card">
            <span>Growth</span>
            <h3>Holistic Development</h3>
            <p>
              Sports, arts, leadership and cultural activities
              for well-rounded growth.
            </p>
          </div>

          <div className="info-card">
            <span>Campus</span>
            <h3>Safe & Disciplined</h3>
            <p>
              A secure, disciplined and student-friendly
              learning environment.
            </p>
          </div>

          <div className="info-card">
            <span>Focus</span>
            <h3>Student-Centric</h3>
            <p>
              Individual attention, mentoring and academic
              support for every child.
            </p>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="home-stats">
        <div className="container stats-grid">
          {stats.map((s) => (
            <Stat
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
            />
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="home-commitment">
        <div className="container">
          <h2>Admissions Open</h2>
          <p>Join a school that nurtures excellence and character.</p>
          <a href="/contact" className="btn-primary">Contact Us</a>
        </div>
      </section>

    </main>
  );
}

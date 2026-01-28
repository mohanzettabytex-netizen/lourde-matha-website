import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage1 from "../Assets/Gendral/1.jpeg";
import heroImage2 from "../Assets/Gendral/2.jpeg";
import "./Home.css";

const heroSlides = [
  {
    img: heroImage1,
    title: "Shaping Future Leaders",
    subtitle: "Faith • Discipline • Excellence"
  },
  {
    img: heroImage2,
    title: "Learning Beyond Classrooms",
    subtitle: "Academic & Moral Growth"
  },
  {
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    title: "A Tradition of Excellence",
    subtitle: "Committed to Quality Education"
  }
];

const chavaraQuotes = [
  "Children, you are God’s investment in the hands of your parents.",
  "Those who love God will love and respect their parents.",
  "Trust your mother; God listens to a mother’s prayer like a child’s cry.",
  "Wisdom and purity are the spiritual food for true growth.",
  "Go to school regularly and teach your mind discipline.",
  "Laziness fosters evil habits.",
  "Let your friends be those who love God.",
  "Good friends will make you good.",
  "Bad books are like fire hidden in straw.",
  "Regular reading of good books illumines the mind.",
  "Let there be no day in your life in which you do no good to others."
];

const wordOfGodQuotes = [
  "The Lord is my shepherd; I shall not want. (Psalm 23:1)",
  "I am the way and the truth and the life. (John 14:6)",
  "Be still, and know that I am God. (Psalm 46:10)",
  "Ask and it will be given to you. (Matthew 7:7)",
  "The Lord is with you wherever you go. (Joshua 1:9)",
  "Your word is a lamp for my feet. (Psalm 119:105)",
  "Love one another as I have loved you. (John 13:34)",
];



const stats = [
  {
    value: 20,
    suffix: "+",
    label: "Years of Excellence",
    to: "/about",
  },
  {
    value: 1200,
    suffix: "+",
    label: "Students",
    to: "/student-life",
  },
  {
    value: 15,
    suffix: "+",
    label: "Awards",
    to: "/updates",
  },
  // {
  //   value: 60,
  //   suffix: "+",
  //   label: "Alumini",
  //   to: "/academics",
  // }
];


export default function Home() {
  const [active, setActive] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % chavaraQuotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((p) => (p + 1) % heroSlides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % wordOfGodQuotes.length);
    }, 5000); // slower for Bible verse reading

    return () => clearInterval(interval);
  }, []);


function Stat({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const alreadyRun = sessionStorage.getItem("statsAnimated");

    // 👉 If animation already ran, show final value immediately
    if (alreadyRun) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sessionStorage.setItem("statsAnimated", "true");

          let start = 0;
          const duration = 2000;
          const increment = Math.ceil(value / (duration / 16));

          const counter = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value); // ✅ final value locked
              clearInterval(counter);
            } else {
              setCount(start);
            }
          }, 16);

          observer.disconnect(); // run only once
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
              Lourdes Matha Convent Matric Hr. Sec. School
            </span>

            <h1>{heroSlides[active].title}</h1>
            <p>{heroSlides[active].subtitle}</p>

            {/* INLINE QUOTE SCROLLER */}


            <div className="hero-actions">
              <a href="/about" className="btn-primary">Explore School</a>
              <a href="/admissions" className="btn-primary">Admissions</a>
            </div>
          </div>

          <div className="hero-cards">

            {/* QUOTES GROUP */}
            <div className="hero-quotes">
              <div className="quote-scroller chavara">
                <span className="quote-label">Message of St. Chavara</span>
                <div className="quote-window">
                  <p key={quoteIndex} className="quote-text">
                    “{chavaraQuotes[quoteIndex]}”
                  </p>
                </div>
              </div>

              <div className="quote-scroller word-of-god">
                <span className="quote-label">Word of God</span>
                <div className="quote-window">
                  <p key={wordIndex} className="quote-text">
                    “{wordOfGodQuotes[wordIndex]}”
                  </p>
                </div>
              </div>
            </div>

            {/* STATS GROUP */}
            <div className="hero-stats-inline">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label} className="hero-card">
                  <strong>{s.value}{s.suffix}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

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
            <div
              key={s.label}
              className="stat clickable"
              onClick={() => navigate(s.to)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(s.to)}
            >
              <Stat
                value={s.value}
                suffix={s.suffix}
                label={s.label}
              />
            </div>
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

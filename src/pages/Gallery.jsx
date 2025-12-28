import { useEffect } from "react";
import "./Gallery.css";

export default function Gallery() {

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".gallery-page .reveal, .gallery-page .reveal-right"
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

  const galleryImages = [
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    "https://images.unsplash.com/photo-1606312619070-d48b4c652a52",
    "https://images.unsplash.com/photo-1562774053-701939374585",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    "https://images.unsplash.com/photo-1519452575417-564c1401ecc0"
  ];

  return (
    <main className="gallery-page">

      {/* HERO */}
      <section className="gallery-hero">
        <div className="container hero-grid">

          <div className="hero-text reveal">
            <span className="hero-badge">Gallery</span>
            <h1>
              Moments of <br />
              Learning & Growth
            </h1>
            <p>
              A glimpse into the vibrant life at Lourde Matha Convent
              Hr. Sec. School — learning, celebrations, and memories.
            </p>
          </div>

          <div className="hero-cards">
            <div className="hero-card reveal-right delay-1">
              <strong>Campus</strong>
              <span>Life & Activities</span>
            </div>

            <div className="hero-card reveal-right delay-2">
              <strong>Events</strong>
              <span>Celebrations & Programs</span>
            </div>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="gallery-intro reveal">
        <div className="container">
          <p>
            Our gallery captures meaningful moments from classrooms,
            events, cultural programs, and everyday student life —
            reflecting our commitment to holistic education.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="gallery-content">
        <div className="container gallery-grid">
          {galleryImages.map((img, i) => (
            <div key={i} className={`gallery-card reveal delay-${(i % 6) + 1}`}>
              <img
                src={img}
                alt={`School Gallery ${i + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="gallery-commitment reveal">
        <div className="container">
          <h2>Life at Lourde Matha</h2>
          <p>Learning • Celebration • Growth</p>
        </div>
      </section>

    </main>
  );
}

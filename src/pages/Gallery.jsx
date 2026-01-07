import { useEffect } from "react";
import "./Gallery.css";
import { loadImagesFromFolder } from "../utils/loadImages";

const galleryImages = loadImagesFromFolder([
  "AnnualDay",
  "Gendral",
  "Christmas",
]);

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

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <div className="container hero-grid">

          <div className="hero-text reveal">
            <span className="hero-badge">Gallery</span>
            <h1>
              Moments of <br />
              Learning & Growth
            </h1>
            <p>
              A glimpse into the vibrant life at Lourde Matha Convent Matric Hr. Sec. School — learning, celebrations, and memories.
            </p>
          </div>

          <div className="hero-cards">
            <div className="hero-card reveal-right delay-1">
              <strong>Campus</strong> <br />
              <span>Life & Activities</span>
            </div>

            <div className="hero-card reveal-right delay-2">
              <strong>Events</strong><br />
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
            <div
              key={i}
              className={`gallery-card reveal delay-${(i % 6) + 1}`}
            >
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

import { useEffect, useState } from "react";
import "./Gallery.css";
import { loadImagesFromFolder } from "../utils/loadImages";

const galleryCategories = {
  "Annual Day": loadImagesFromFolder(["AnnualDay"]),
  "Our Campus": loadImagesFromFolder(["Gendral"]),
  "Christmas": loadImagesFromFolder(["Christmas"]),
};


export default function Gallery() {
  const [expanded, setExpanded] = useState({});

  const toggleCategory = (category) => {
    setExpanded((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

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

          {/* <div className="hero-cards">
            <div className="hero-card reveal-right delay-1">
              <strong>Campus</strong> <br />
              <span>Life & Activities</span>
            </div>

            <div className="hero-card reveal-right delay-2">
              <strong>Events</strong><br />
              <span>Celebrations & Programs</span>
            </div>
          </div> */}

          <div className="hero-cards">
            <div className="hero-card reveal-right delay-1">
              <h3>Academic Activities</h3>
              <p>Snapshots of classroom learning and academic programs</p>
            </div>

            <div className="hero-card accent reveal-right delay-2">
              <h3>Cultural Programs</h3>
              <p>Expressions of talent through music, dance, and drama.</p>
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
        <div className="container">

          {Object.entries(galleryCategories).map(
            ([category, images], categoryIndex) => (
              <div key={category} className="gallery-block">

                {/* CATEGORY HEADER */}
                <h3 className="gallery-title reveal">
                  {category}
                </h3>

                {/* IMAGE GRID */}
                <div
                  className={`gallery-grid ${expanded[category] ? "expanded" : "collapsed"
                    }`}
                >
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className={`gallery-card reveal delay-${(i % 6) + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${category} ${i + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {images.length > 6 && (
                  <div className="gallery-toggle">
                    <button onClick={() => toggleCategory(category)}>
                      {expanded[category] ? "Show less" : "See more"}
                    </button>
                  </div>
                )}

              </div>
            )
          )}

        </div>
      </section>


      {/* COMMITMENT */}
      <section className="gallery-commitment reveal">
        <div className="container">
          <h2>Life at Lourde Matha</h2>
          <strong>Learning • Celebration • Growth</strong>
        </div>
      </section>

    </main>
  );
}

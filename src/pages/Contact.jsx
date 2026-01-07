import { useEffect } from "react";
import "./Contact.css";

export default function Contact() {

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".contact-page .reveal, .contact-page .reveal-right"
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
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="container hero-grid">

          <div className="hero-text reveal">
            <span className="hero-badge">Contact</span>

            <h1>
              We’re Here <br />
              To Assist You
            </h1>

            <p>
              Reach out to Lourde Matha Convent Matric Hr. Sec. School for
              admissions, academic queries, or any assistance.
            </p>
          </div>

          <div className="hero-cards">
            <div className="hero-card reveal-right delay-1">
              <strong>9 AM – 4 PM</strong>
              <span>Office Hours</span>
            </div>

            <div className="hero-card reveal-right delay-2">
              <strong>Support</strong>
              <span>Always Available</span>
            </div>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="contact-intro reveal">
        <div className="container">
          <p>
            We believe clear communication builds trust.
            Parents and students are always welcome to
            connect with us for guidance and support.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-content">
        <div className="container content-grid">

          {/* INFO CARD */}
          <div className="info-card reveal delay-1">
            <span>Address</span>
            <h3>School Location</h3>
            <p>Dhali Road, Udumalpet</p>

            <br />

            <span>Office Hours</span>
            <h3>Working Time</h3>
            <p>
              Monday – Friday <br />
              9:00 AM – 4:00 PM
            </p>

            <br />

            <span>Email</span>
            <h3>Contact Email</h3>
            <p>info@lourdematha.edu</p>
          </div>

          {/* FORM CARD */}
          <div className="info-card highlight reveal delay-2">
            <span>Message</span>
            <h3>Send Us a Message</h3>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
              <textarea placeholder="Your Message" />
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </section>

      {/* COMMITMENT */}
      <section className="contact-commitment reveal">
        <div className="container">
          <h2>We Value Communication</h2>
          <p>Care • Clarity • Commitment</p>
        </div>
      </section>

    </main>
  );
}

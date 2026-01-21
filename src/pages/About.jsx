import { useEffect } from "react";

//
/* PEOPLE & LEADERSHIP */
import correspondent from "../Assets/About/prins-1.jpg";

import principal1 from "../Assets/About/prins-2.jpg";
import principal2 from "../Assets/About/prins-1.jpg";

import teachersGroup from "../Assets/About/techgrp-1.jpg";

import office1 from "../Assets/About/prins-1.jpg";
import office2 from "../Assets/About/prins-2.jpg";

import caretaker1 from "../Assets/About/techgrp-1.jpg";
import caretaker2 from "../Assets/About/techgrp-1.jpg";

import award1 from "../Assets/About/prins-1.jpg";
import award2 from "../Assets/About/prins-2.jpg";

import seminar1 from "../Assets/About/techgrp-1.jpg";
import seminar2 from "../Assets/About/techgrp-1.jpg";

//
import "./About.css";

export default function About() {

  const peopleSections = [
    {
      title: "Correspondent",
      subtitle: "Guiding Vision",
      desc: "Sr. Roney provides spiritual leadership and guidance that shapes the vision and mission of our institution.",
      images: [correspondent],
    },
    {
      title: "Principal",
      subtitle: "Leadership Icons",
      desc: "Dynamic leadership that nurtures academic excellence, discipline, and holistic development.",
      images: [principal1, principal2],
    },
    {
      title: "Moulding Hands",
      subtitle: "Our Teaching Faculty",
      desc: "Dedicated teachers who inspire, guide, and mould young minds with care and commitment.",
      images: [teachersGroup],
    },
    {
      title: "Monitoring Centre",
      subtitle: "Office & Administration",
      desc: "Efficient administrative and office staff ensuring smooth academic and institutional operations.",
      images: [office1, office2],
    },
    {
      title: "Without You, Nothing",
      subtitle: "Our Care Takers",
      desc: "Support staff who maintain a safe, clean, and nurturing environment for every child.",
      images: [caretaker1, caretaker2],
    },
    {
      title: "Teachers Awards",
      subtitle: "Recognising Excellence",
      desc: "Celebrating the dedication and achievements of our teachers through awards and recognitions.",
      images: [award1, award2],
    },
    {
      title: "Updation & Ongoing Training",
      subtitle: "Seminars & Workshops",
      desc: "Continuous professional development through seminars for parents, teachers, and students.",
      images: [seminar1, seminar2],
    },
  ];


  useEffect(() => {
    const elements = document.querySelectorAll(
      ".about .reveal, .about .reveal-right"
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
    <main className="about">

      {/* HERO – SPLIT LAYOUT */}
      <section className="about-hero">
        <div className="container hero-grid">

          {/* LEFT CONTENT */}
          <div className="hero-text reveal">
            <span className="hero-badge">About Our School</span>
            <h1>Educating Minds. Shaping Character.</h1>
            <p>
              Lourde Matha Convent Matric Hr. Sec. School is dedicated to nurturing
              academic excellence, strong moral values, and confident leadership.
            </p>
          </div>

          {/* RIGHT FLOATING CARDS */}
          <div className="hero-cards">
            <div className="hero-card reveal-right delay-1">
              <h3>Founded on Faith</h3>
              <p>Education rooted in Christian values and discipline.</p>
            </div>

            <div className="hero-card accent reveal-right delay-2">
              <h3>Academic Excellence</h3>
              <p>Consistent results and holistic development.</p>
            </div>
          </div>

        </div>
      </section>

      {/* PEOPLE & LEADERSHIP */}
      <section className="about-people">
        <div className="container">

          <div className="people-header reveal">
            <span>Our Strength</span>
            <h2>People & Leadership</h2>
            <p>
              Behind every successful institution is a dedicated team of leaders,
              educators, and support staff working together with commitment and care.
            </p>
          </div>

          {peopleSections.map((section, index) => (
            <div key={index} className="people-block">
              <div className="people-text reveal">
                <span>{section.subtitle}</span>
                <h3>{section.title}</h3>
                <p>{section.desc}</p>
              </div>

              <div className="people-grid">
                {section.images.map((img, i) => (
                  <div key={i} className="people-card reveal">
                    <img src={img} alt={section.title} />
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section> 

      {/* STORY */}
      <section className="about-story reveal">
        <div className="container">
          <p>
            At Lourde Matha Convent Matric Hr. Sec. School, we believe education is not
            merely about academic achievement, but about shaping responsible,
            compassionate, and capable individuals who contribute positively
            to society.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="about-values">
        <div className="container values-grid">

          <div className="value-glass reveal delay-1">
            <span>Our Vision</span>
            <h2>Empowering Future Leaders</h2>
            <p>
              We strive to empower women and children through Christian formation.

            </p>
          </div>

          <div className="value-glass reveal delay-2">
            <span>Our Mission</span>
            <h2>Educating with Purpose</h2>
            <p>
              To educate children to become active and responsible citizens
            </p>
            <p>
              To impact knowledge and wisdom with love and dedication
            </p>
            <p>
              To mould christ like leaders who will transform the society
            </p>
          </div>

        </div>
      </section>

      {/* MOTTO */}
      <section className="about-motto reveal">
        <div className="container">
          <h3>Our Guiding Principle</h3>
          <strong>Love • Knowledge • Service</strong>
        </div>
      </section>

    </main>
  );
}

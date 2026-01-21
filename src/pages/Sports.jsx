import { useEffect } from "react";
import "./Sports.css";

import hockey1 from "../Assets/Sports/hockey-1.jpg";
import hockey2 from "../Assets/Sports/hockey-2.jpg";

import football1 from "../Assets/Sports/football-1.jpg";
import football2 from "../Assets/Sports/football-1.jpg";

import basketball1 from "../Assets/Sports/volly-1.jpg";
import basketball2 from "../Assets/Sports/volly-1.jpg";

import athletics1 from "../Assets/Sports/hockey-1.jpg";
import athletics2 from "../Assets/Sports/hockey-2.jpg";

export default function Sports() {

    useEffect(() => {
        const elements = document.querySelectorAll(
            ".sports .reveal, .sports .reveal-right"
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

    const sportsData = [
        {
            title: "Hockey",
            desc: "Structured hockey training that develops teamwork, endurance, discipline, and competitive spirit.",
            images: [hockey1, hockey2],
        },
        {
            title: "Football",
            desc: "Football coaching focused on fitness, coordination, strategy, and sportsmanship.",
            images: [football1, football2],
        },
        {
            title: "Basketball",
            desc: "Basketball activities that improve agility, focus, teamwork, and leadership skills.",
            images: [basketball1, basketball2],
        },
        {
            title: "Athletic Events",
            desc: "Track and field events that promote speed, strength, stamina, and healthy competition.",
            images: [athletics1, athletics2],
        },
    ];

    return (
        <main className="sports">

            {/* HERO */}
            <section className="sports-hero">
                <div className="container hero-grid">

                    <div className="hero-text reveal">
                        <span className="hero-badge">Student Life</span>
                        <h1>Sports & Physical Activities</h1>
                        <p>
                            Sports play a vital role in developing discipline,
                            teamwork, leadership, and physical well-being among students.
                        </p>
                    </div>

                    <div className="hero-cards">
                        <div className="hero-card reveal-right delay-1">
                            <h3>Physical Fitness</h3>
                            <p>Strength, stamina, and endurance through regular sports training.</p>
                        </div>

                        <div className="hero-card accent reveal-right delay-2">
                            <h3>Team Spirit</h3>
                            <p>Encouraging cooperation, leadership, and fair play.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* SPORTS SECTIONS */}
            {sportsData.map((sport, index) => (
                <section key={index} className="sports-block">
                    <div className="container">

                        <div className="sports-header reveal">
                            <h2>{sport.title}</h2>
                            <p>{sport.desc}</p>
                        </div>

                        <div className="sports-grid">
                            {sport.images.map((img, i) => (
                                <div key={i} className="sports-card reveal">
                                    <img src={img} alt={`${sport.title} activity`} />
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            ))}

            {/* STATEMENT */}
            <section className="sports-statement reveal">
                <div className="container">
                    <h3>Our Sports Philosophy</h3>
                    <strong>Fitness • Discipline • Teamwork</strong>
                </div>
            </section>

        </main>
    );
}

import "./Hero.css";

export default function Hero() {
    return (
        <section className="home-hero">
            <div className="home-hero-bg" />

            <div className="home-hero-content">
                <span className="home-badge">
                    Faith-Based Education • Since 1998
                </span>

                <h1>
                    Lourde Matha <br />
                    Convent School
                </h1>

                <p>
                    Nurturing young minds with <strong>Faith</strong>,{" "}
                    <strong>Discipline</strong> and <strong>Excellence</strong>
                </p>

                <div className="home-actions">
                    <a href="/about" className="btn-primary">
                        Explore Our Institution
                    </a>
                    <a href="/admissions" className="btn-outline">
                        Admissions
                    </a>
                </div>
            </div>
        </section>

    );
}

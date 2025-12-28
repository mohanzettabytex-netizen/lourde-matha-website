import "./Highlights.css";

export default function Highlights() {
    const highlights = [
        {
            title: "Academic Excellence",
            desc: "Strong curriculum aligned with Matriculation standards"
        },
        {
            title: "Faith & Values",
            desc: "Christian formation with moral and spiritual growth"
        },
        {
            title: "Co-Curricular Growth",
            desc: "Sports, arts, leadership and cultural activities"
        },
        {
            title: "Safe Learning",
            desc: "Disciplined, caring and secure school environment"
        }
    ];

    return (
        <section className="highlights-section">
            <div className="container">
                <h2 className="section-title">Why Choose Lourde Matha</h2>

                <div className="highlights-grid">
                    {[
                        ["Academic Excellence", "Matriculation-aligned strong curriculum"],
                        ["Faith & Values", "Christian formation and moral growth"],
                        ["Co-Curricular Growth", "Sports, arts and leadership"],
                        ["Safe Learning", "Disciplined and caring environment"]
                    ].map(([title, desc], i) => (
                        <div key={i} className="highlight-card">
                            <h3>{title}</h3>
                            <p>{desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

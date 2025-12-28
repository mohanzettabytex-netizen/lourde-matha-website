import "./Events.css";

export default function Events() {
    const events = [
        { date: "15 Jun", title: "School Reopening" },
        { date: "15 Aug", title: "Independence Day Celebration" },
        { date: "24 Dec", title: "Christmas Program" }
    ];

    return (
        <section className="events-section">
            <div className="container">
                <h2 className="section-title">Upcoming Events</h2>

                <div className="events-list">
                    {events.map((event, i) => (
                        <div className="event-card">
                            <div className="event-date">
                                <strong>15 Jun</strong>
                            </div>
                            <div className="event-title">School Reopening</div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}

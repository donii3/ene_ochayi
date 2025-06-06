const Marquee = () => {
    return (
        <section className="is-fullwidth is-stretched" data-padding="none">
            <div className="bringer-marquee" data-speed="5000" style={{ backgroundColor: "transparent" }}>
                <div className="bringer-marquee-inner">
                    <ul className="bringer-marquee-list">
                        {["Photoshoots", "Exhibition", "Story Telling", "Documentary", "Creative Contents", "Trainings"].map((item, index) => (
                            <li key={index}>
                                <h6>{item}</h6>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Marquee;
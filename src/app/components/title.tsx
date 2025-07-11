import Image from "next/image";

const Title = () => {
    return (
        <section>
            <div className="bringer-bento-grid">
                <div className="is-medium bringer-block stg-vertical-space-between" data-appear="fade-right" data-unload="fade-left">
                    <div className="bringer-title-with-label stg-bottom-gap">
                        <span className="bringer-label">Who am I? I am</span>
                        <h2 data-appear="fade-up" data-delay="100" data-threshold="0">
                            <span style={{ color: "#f27a24" }}>Ene</span> Ochayi.
                        </h2>
                    </div>
                    <p className="bringer-large-text">
                    A passionate photographer and storyteller, I capture and preserve cultural heritage, history, and diverse lifestyles through compelling imagery, challenging misconceptions, and raising awareness.
                    </p>
                </div>
                {/* First Image */}
                <div className="is-small" data-appear="zoom-out" data-delay="100" data-unload="zoom-out">
                    <Image src="/img/home/abt2.png" alt="Portfolio" width={1200} height={1200} />
                </div>

                {/* Second Image with Masked Content */}
                <div className="is-small bringer-masked-block" data-appear="zoom-out" data-delay="200" data-unload="zoom-out">
                    <div className="bringer-bento-hero-media bringer-masked-media">
                        <Image src="/img/home/abtt.png" alt="Portfolio" width={1200} height={1200} />
                    </div>
                    <div className="bringer-masked-content at-bottom-right">
                        <a href="/portfolio-grid" className="bringer-square-button">
                            <span className="bringer-icon bringer-icon-explore"></span>
                        </a>
                    </div>
                </div>

                {/* Third Image */}
                <div className="is-large" data-appear="fade-left" data-delay="200" data-unload="fade-right">
                    <Image src="/img/home/ene03.png" alt="Cookie Dough" width={1200} height={1200} />
                </div>
            </div>
        </section>
    );
};

export default Title;

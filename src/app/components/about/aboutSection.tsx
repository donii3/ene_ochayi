import AboutText from "./aboutText";
import AboutImage from "./aboutImage";

const AboutSection = () => {
    return (
        <section className="backlight-bottom">
            <div className="stg-row stg-large-gap stg-valign-middle stg-bottom-gap-l stg-tp-bottom-gap-xl stg-tp-column-reverse stg-m-bottom-gap-l stg-m-normal-gap">
                <AboutText
                    title="Welcome to my world, where <span style='color: #f27a24;'>creativity </span> touches lives."
                    paragraphs={[
                        "As a Photographer and a visual storyteller, I am drawn to stories of hope and resilience, particularly in rural areas.",
                        "Through my photography, I seek to shine a light on those who often go unseen or whose stories may otherwise be unheard.",
                        "My goal is to tell stories that inspire compassion and understanding, and to use my art to create positive change in the world."
                    ]}
                />
                <AboutImage src="/img/home/abt.png" alt="About Us" />
            </div>

            <div className="stg-row stg-large-gap stg-valign-middle stg-m-normal-gap">
                <AboutImage src="/img/home/abt2.png" alt="We are Bringer" />
                <AboutText
                    title="I'm passionate about what I do."
                    paragraphs={[
                        "I believe strongly in the power of creativity and its engaging impact through exceptional storytelling visuals.",
                        "Photography to me is a super power for capturing moments that can be gone forever and impossible to reproduce, because memories are the life we once lived."
                    ]}
                />
                <div className="align-right">
                    <a href="/about" className="bringer-arrow-link">Learn More About Me</a>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

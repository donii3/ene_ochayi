"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutMe() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);  // Run once on mount
  }, []);

  if (!hydrated) return null;

  return (
    <main id="bringer-main">
      <div className="stg-container">
        {/* Page Title */}
        <section>
          <div className="bringer-bento-grid">
            <div className="is-medium bringer-block stg-vertical-space-between" data-appear="fade-right" data-unload="fade-left">
              <div className="bringer-title-with-label stg-bottom-gap">
                <span className="bringer-label">Who am I? I am</span>
                <h2>Ene Ochayi,</h2>
              </div>
              <p className="bringer-large-text">A documentary photographer and visual storyteller based in Nigeria, capturing the untold stories of rural life and resilient communities</p>
            </div>
            <div className="is-small" data-appear="zoom-out" data-delay="100" data-unload="zoom-out">
              <Image src="/img/portfolio/portfolio03.jpg" alt="Portfolio" width={1200} height={1200} />
            </div>
            <div className="is-small bringer-masked-block" data-appear="zoom-out" data-delay="200" data-unload="zoom-out">
              <div className="bringer-bento-hero-media bringer-masked-media">
                <Image src="/img/portfolio/portfolio06.jpg" alt="Portfolio" width={1200} height={1200} />
              </div>
              <div className="bringer-masked-content at-bottom-right">
                <Link href="/portfolio-grid" className="bringer-square-button">
                  <span className="bringer-icon bringer-icon-explore"></span>
                </Link>
              </div>
            </div>
            <div className="is-large" data-appear="fade-left" data-delay="200" data-unload="fade-right">
              <Image src="/img/inner-pages/contacts02.jpg" alt="Contact" width={1200} height={1200} />
            </div>
          </div>
        </section>

        {/* Counters */}
        <section data-padding="bottom">
          <div className="bringer-grid-4cols bringer-tp-grid-2cols bringer-m-grid-2cols stg-m-small-gap" data-stagger-appear="zoom-in" data-stagger-unload="zoom-out">
            {[
              { num: "8", suffix: "K+", label: "Happy Customers" },
              { num: "420", suffix: "", label: "Completed Projects" },
              { num: "24", suffix: "", label: "Awards Won" },
              { num: "12", suffix: "+", label: "Years of Experience" },
            ].map((item, idx) => (
              <div key={idx} className="bringer-counter bringer-block" data-delay="3000">
                <div className="bringer-counter-number" data-suffix={item.suffix}>{item.num}</div>
                <div className="bringer-counter-label">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About Me */}
        <section className="backlight-top divider-bottom">
          <div className="stg-row stg-large-gap stg-m-normal-gap">
            <div className="stg-col-6 stg-tp-bottom-gap-l stg-m-bottom-gap" data-appear="fade-right" data-unload="fade-left">
              <Image src="/img/inner-pages/contacts02.jpg" alt="Ene Ochayi" width={1200} height={1200} />
            </div>
            <div className="stg-col-6 stg-vertical-space-between" data-appear="fade-left" data-unload="fade-right">
              <h2>Documenting Humanity Through Lens</h2>
              <p>I’m Ene Ochayi, a Nigerian-based documentary photographer and visual storyteller dedicated to capturing the resilience, culture, and everyday life of rural and underrepresented communities.</p>
              <p>Through visual storytelling, I spotlight the dignity of people often left out of mainstream narratives. I’ve worked with non-profits like the Samuel Ioron Foundation and Project Build A School—using my lens to advocate for education, gender equality, and social impact.</p>
              <p>Rooted in compassion and shaped by my experiences across Benue State, my photography strives to inspire empathy, preserve cultural identity, and elevate unheard voices.</p>
              <Link href="/portfolio-slider" className="bringer-icon-link">
                <div className="bringer-icon-wrap"><span className="bringer-icon bringer-icon-explore"></span></div>
                <div className="bringer-icon-link-content">
                  <h6>See life <br /> through my lens</h6>
                  <span className="bringer-label">Explore portfolio</span>
                </div>
              </Link>
            </div>
          </div>
        </section>


        {/* What Do I Offer */}
        <section className="backlight-bottom">
          <div className="stg-row bringer-section-title">
            <h2 data-appear="fade-up" data-unload="fade-up">What do I Offer</h2>
            <p className="bringer-large-text" data-appear="fade-up" data-unload="fade-up" data-delay="100">Unleashing the full spectrum of magic.</p>
          </div>
          <div className="bringer-grid-3cols bringer-tp-grid-2cols" data-stagger-appear="fade-up" data-delay="100" data-stagger-delay="100" data-unload="fade-up">
            {[
              { title: "Branding", desc: "Weave visual stories..." },
              { title: "Marketing", desc: "Design data-driven campaigns..." },
              { title: "Graphic Design", desc: "Craft visual masterpieces..." },
              { title: "Web Design", desc: "Sculpt user-friendly websites..." },
              { title: "Content Creation", desc: "Weave compelling narratives..." },
            ].map((svc, idx) => (
              <div key={idx} className="bringer-block stg-aspect-square stg-vertical-space-between">
                <h5>{svc.title}<span className="bringer-accent">.</span></h5>
                <p>{svc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section data-padding="top">
          <div className="stg-row bringer-section-title">
            <h2 data-appear="fade-up" data-unload="fade-up">What People Say</h2>
            <p className="bringer-large-text" data-appear="fade-up" data-delay="100" data-unload="fade-up">Read what my clients have to say about my work.</p>
          </div>
          <div className="stg-row">
            <div className="stg-col-6 stg-tp-col-8 stg-tp-offset-2 stg-tp-bottom-gap" data-unload="fade-left" data-delay="150">
              <Image src="/img/home/testimonials01.jpg" alt="What Our Clients Say" width={850} height={1200} />
            </div>
            <div className="stg-col-6 bringer-grid-1col stg-normal-gap" data-unload="fade-right" data-delay="150">
              {[
                {
                  text: "Before working with Bringer, our brand felt lost…",
                  name: "Sarah Janson",
                  meta: "CEO of Bloom Eco-Spa",
                  stars: "5"
                },
                {
                  text: "We knew we needed a digital boost…",
                  name: "Michael Kaper",
                  meta: "VP of Marketing, Tech Inc.",
                  stars: "5"
                },
                {
                  text: "Words cannot express how pleased we are…",
                  name: "Anna Larson",
                  meta: "Founder of StoryCraft Books",
                  stars: "4"
                },
              ].map((t, idx) => (
                <div key={idx} className="bringer-block bringer-tetimonials-card" data-appear="fade-left" data-delay={idx * 50}>
                  <div className="bringer-tetimonials-card-descr">{t.text}</div>
                  <div className="bringer-tetimonials-card-footer">
                    <h6>{t.name}</h6>
                    <span className="bringer-meta">{t.meta}</span>
                    <div className={`bringer-tetimonials-stars${t.stars}`}></div>
                  </div>
                </div>
              ))}
              <div className="align-right">
                <Link href="/testimonials" className="bringer-arrow-link">Read all testimonials</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bringer-masked-cta bringer-masked-block" data-unload="fade-down">
            <form
              action="https://demo.shadow-themes.com/html/bringer/mail-short.php"
              method="post"
              data-fill-error="Please, fill out the form."
              className="bringer-contact-form is-short bringer-masked-media"
              data-appear="fade-up"
            >
              <div className="bringer-form-content bringer-cta-form">
                <div className="bringer-cta-form-content" data-appear="fade-up" data-delay="100">
                  <div className="bringer-cta-title">Ready to set your Brand ablaze?</div>
                  <input type="email" name="subscribe_email" placeholder="email@example.com" required />
                </div>
                <div className="bringer-cta-form-button" data-appear="fade-up" data-delay="200">
                  <button type="submit">
                    <span className="bringer-icon bringer-icon-arrow-submit"></span>
                  </button>
                </div>
                <div className="bringer-contact-form__response"></div>
              </div>
              <span className="bringer-form-spinner"></span>
            </form>
            <div className="bringer-masked-cta-content bringer-masked-content at-top-right">
              <p className="bringer-large-text" data-appear="fade-down">
                Let's craft a visual identity that ignites passion and loyalty. ✨
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

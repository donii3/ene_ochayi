"use client";

import Image from 'next/image';
import React from 'react'

const Approach = () => {
    return (
        <div>
            <div className="stg-row stg-bottom-gap-l">
                <div className="stg-col-4 stg-tp-bottom-gap" data-appear="fade-right" data-unload="fade-left">
                    <Image src="/img/portfolio/portfolio09/slider03.jpg" alt="Cookie Dough" width={960} height={960} />
                </div>
                <div className="stg-col-8 bringer-block stg-vertical-space-between" data-appear="fade-left" data-unload="fade-right">
                    <h2>My Approach</h2>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>

            <div className="bringer-bento-grid stg-bottom-gap-l">
                <div className="is-large stg-vertical-space-between bringer-block stg-large-gap" data-bg-src="/img/cta/grid-cta-background.jpg" data-appear="fade-right" data-unload="fade-left">
                    <h2>The Solution</h2>
                    <p className="bringer-large-text">We crafted a campaign that celebrated the joy of cookie dough, but with a modern twist: #DoughpWithoutDoubt, a playful nod to the safety concerns and a powerful message of guilt-free indulgence.</p>
                </div>
                <div className="is-medium bringer-block stg-valign-middle" data-appear="fade-left" data-delay="100" data-unload="fade-right">
                    <ul className="bringer-marked-list">
                        <li>Whimsical video ads: We created stop-motion animation shorts featuring vibrant cookie dough characters.</li>
                        <li>Influencer partnerships: We teamed up with parenting bloggers and health-conscious chefs, showcasing how Doughp fit into their families and healthy lifestyles.</li>
                        <li>Instagrammable pop-up shops: We created interactive pop-up shops brimming with colorful Doughp jars and activities. </li>
                    </ul>
                </div>
                <div className="is-small" data-appear="fade-up" data-delay="100" data-unload="fade-left">
                    <Image src="/img/portfolio/portfolio09/slider03.jpg" alt="Cookie Dough" width={960} height={960} />
                </div>
                <div className="is-small" data-appear="fade-up" data-delay="200" data-unload="fade-right">
                    <Image src="/img/portfolio/portfolio09/slider03.jpg" alt="Cookie Dough" width={960} height={960} />
                </div>
            </div>

            <div className="stg-row" >
                <div className="stg-col-8 bringer-block stg-vertical-space-between stg-tp-bottom-gap" data-appear="fade-right" data-unload="fade-left">
                    <h2>Results & Impact</h2>
                    <div>
                        <ul className="bringer-marked-list">
                            <li><span className="bringer-highlight">Doubling of brand awareness:</span> Doughp became synonymous with safe, delicious edible cookie dough, capturing the attention of both skeptical parents and curious adults.</li>
                            <li><span className="bringer-highlight">Significant sales growth:</span> Sales skyrocketed, propelled by new customers and repeat buys from families and individuals discovering the joy of guilt-free indulgence.</li>
                            <li><span className="bringer-highlight">Shift in market perception:</span> Doughp successfully redefined the edible cookie dough category, moving from a niche product to a mainstream treat embraced by consumers.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Approach
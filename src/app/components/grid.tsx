"use client";

import Image from 'next/image'
import React from 'react'

const Grid = () => {
    return (
        <section className="backlight-top">
            <div className="bringer-bento-grid bringer-grid-cta">
                <div className="is-large bringer-masked-block" data-appear="fade-right" data-unload="fade-left">
                    <div className="bringer-grid-cta-media bringer-masked-media" data-bg-src="img/cta/grid-cta-background.jpg">
                        <div className="bringer-grid-cta-heading">
                            Need to Save your moments ?
                        </div>
                    </div>
                    <div className="bringer-masked-content at-bottom-right">
                        <p className="bringer-large-text" data-appear="fade-right" data-delay="100">
                            Let's chat about your ideas. &rarr;
                        </p>
                    </div>
                </div>
                <div className="is-medium bringer-block" data-appear="fade-down" data-unload="fade-right">
                    <h3>
                        I capture moments that deserves attention.
                    </h3>
                </div>
                <div className="is-small" data-appear="zoom-out" data-delay="100" data-unload="zoom-out">
                    <a href="contacts.html" className="bringer-square-button">
                        <span className="bringer-icon bringer-icon-explore"></span>
                    </a>
                </div>
                <div className="is-small" data-appear="zoom-out" data-delay="200" data-unload="zoom-out">
                    <Image src="/img/home/cta.png" alt="Let's Chat" width={960} height={960} />
                </div>
            </div>
        </section>
    )
}

export default Grid
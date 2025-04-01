"use client";

import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    // Section:Portfolio Card 
    <section>
      {/* Portfolio Card Item 01 */}
      <div className="bringer-column-item bringer-masked-block">
        {/* Media */}
        <div className="bringer-masked-media bringer-parallax-media">
          <Image src="/img/home/rally.jpg" alt="Campaign Rally" width={1920} height={1280} />
        </div>
        {/* Content */}
        <div className="bringer-masked-content at-bottom-center">
          <div className="bringer-column-item-content">
            <div className="bringer-column-item-title">
              <span className="bringer-meta">Politics</span>
              <h6 style={{ fontSize: ".8rem" }}>Campaign Rally</h6>
            </div>
            <div className="bringer-icon-wrap">
              <span className="bringer-icon bringer-icon-explore"></span>
            </div>
            <a href="portfolio-post01.html"></a>
          </div>
        </div>
      </div>

      {/* Portfolio Card Item 02 */}
      <div className="bringer-column-item bringer-masked-block">
        {/* Media */}
        <div className="bringer-masked-media bringer-parallax-media">
          <Image src="/img/home/mk.png" alt="West Africa" width={1920} height={1280} />
        </div>
        {/* Content */}
        <div className="bringer-masked-content at-bottom-center">
          <div className="bringer-column-item-content">
            <div className="bringer-column-item-title">
              <span className="bringer-meta">Market Place</span>
              <h6 style={{ fontSize: ".8rem" }}>West Africa</h6>
            </div>
            <div className="bringer-icon-wrap">
              <span className="bringer-icon bringer-icon-explore"></span>
            </div>
            <a href="portfolio-post02.html"></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

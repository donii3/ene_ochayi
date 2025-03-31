"use client";

import React from "react";

const Portfolio = () => {
  return (
    <section>
      {/* Portfolio Card Item 01 */}
      <div className="bringer-column-item bringer-masked-block">
        {/* Media */}
        <div className="bringer-masked-media bringer-parallax-media">
          <img className="bringer-lazy" src="/img/home/rally.jpg" alt="Campaign Rally" />
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
    </section>
  );
};

export default Portfolio;

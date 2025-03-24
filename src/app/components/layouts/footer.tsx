"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="bringer-footer">
      <div className="bringer-footer-widgets">
        <div className="stg-container">
          <div className="stg-row">
            <div className="stg-col-5">
              <div className="bringer-info-widget">
                <Link href="/" className="bringer-logo footer-logo">
                  <Image src="/img/logo.png" alt="Logo" width={88} height={24} />
                </Link>
                <p>As a Photographer and visual storyteller, I shine a light on untold stories.</p>
                <span className="bringer-label">Follow Me:</span>
                <ul className="bringer-socials-list">
                  <li><a href="#" target="_blank"><span className="bi bi-facebook"></span></a></li>
                  <li><a href="#" target="_blank"><span className="bi bi-instagram"></span></a></li>
                  <li><a href="#" target="_blank"><span className="bi bi-twitter"></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bringer-footer-line stg-container">
        <div className="align-center">Copyright &copy; 2024. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;

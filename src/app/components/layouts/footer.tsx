"use client";

import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ene-ochayi-712a83207", icon: "bi bi-linkedin", name: "LinkedIn" },
  { href: "https://www.facebook.com/share/1AGcAPzRae/?mibextid=wwXIfr", icon: "bi bi-facebook", name: "Facebook" },
  { href: "https://www.instagram.com/enny_ochayi", icon: "bi bi-instagram", name: "Instagram" },
  { href: "https://x.com/itz_ennyochayi?s=21", icon: "bi bi-twitter", name: "Twitter" },
  { href: "https://youtube.com/@eneochayi1?si=gDQ9_VCJQPVGTvCG", icon: "bi bi-youtube", name: "YouTube" }
];

const handleLinkClick = (url: string) => {
  console.log(`Navigating to: ${url}`);
  window.open(url, "_blank", "noopener,noreferrer");
};

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
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a onClick={() => handleLinkClick(link.href)} className="social-button">
                        <span className={link.icon}></span>
                      </a>
                    </li>
                  ))}
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

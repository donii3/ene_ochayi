"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header id="bringer-header" className="is-frosted is-sticky" data-appear="fade-down" data-unload="fade-up">
            <div className="bringer-header-inner">
                {/* Logo */}
                <div className="bringer-header-lp">
                    <Link href="/" className="bringer-logo">
                        <Image src="/img/logo.png" alt="Logo" width={88} height={24} />
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="bringer-nav">
                    <ul className="main-menu">
                        <li className="current-menu-parent">
                            <Link href="/">Home</Link>
                            <ul className="sub-menu">
                                <li><Link href="/">Home 01</Link></li>
                                <li><Link href="/home02">Home 02</Link></li>
                                <li><Link href="/home03">Home 03</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link href="#">About Us</Link>
                            <ul className="sub-menu">
                                <li><Link href="/about-us">About Us</Link></li>
                                <li><Link href="/about-me">About Me</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link href="#">Pages</Link>
                            <ul className="sub-menu">
                                <li><Link href="/services">Our Services</Link></li>
                                <li><Link href="/service-details">Service Details</Link></li>
                                <li><Link href="/pricing">Pricing</Link></li>
                                <li><Link href="/faq">F.A.Q.</Link></li>
                                <li><Link href="/testimonials">Testimonials</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link href="#">Portfolio</Link>
                            <ul className="sub-menu">
                                <li><Link href="/portfolio-infinite-list">Infinite List</Link></li>
                                <li><Link href="/portfolio-slider">Slider</Link></li>
                                <li><Link href="/portfolio-column">Column Cards</Link></li>
                                <li><Link href="/portfolio-grid">Classic Grid</Link></li>
                                <li className="bringer-menu-divider"></li>
                                <li><Link href="/portfolio-post01">Portfolio Details 01</Link></li>
                                <li><Link href="/portfolio-post02">Portfolio Details 02</Link></li>
                                <li><Link href="/portfolio-post03">Portfolio Details 03</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/contact">Contacts</Link>
                        </li>
                    </ul>
                </nav>

                {/* Contact Button */}
                <div className="bringer-header-rp">
                    <Link href="/contact" className="bringer-button">Leave a message</Link>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="bringer-mobile-header-inner">
                <Link href="/" className="bringer-logo">
                    <Image src="/img/logo.png" alt="Bringer" width={88} height={24} />
                </Link>
                <button
                    className="bringer-mobile-menu-toggler"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#f27a24",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        position: "relative",
                    }}
                >
                    <i
                        className="bringer-menu-toggler-icon"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <span
                            style={{
                                display: "block",
                                width: "25px",
                                height: "3px",
                                backgroundColor: "white",
                                borderRadius: "2px",
                            }}
                        ></span>
                        <span
                            style={{
                                display: "block",
                                width: "25px",
                                height: "3px",
                                backgroundColor: "white",
                                borderRadius: "2px",
                            }}
                        ></span>
                        <span
                            style={{
                                display: "block",
                                width: "25px",
                                height: "3px",
                                backgroundColor: "white",
                                borderRadius: "2px",
                            }}
                        ></span>
                    </i>
                </button>
            </div>
        </header>
    );
};

export default Header;
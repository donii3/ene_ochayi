"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    const isActive = (path: string | string[]) => {
        if (Array.isArray(path)) {
            return path.some(p => pathname.startsWith(p));
        }
        return pathname === path;
    };

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
                        <li className={isActive("/") ? "current-menu-parent" : ""}>
                            <Link href="/">Home</Link>
                        </li>

                        <li className={isActive("/about-me") ? "current-menu-parent" : ""}>
                            <Link href="/about-me">About</Link>
                        </li>

                        <li className={isActive(["/portfolio", "/portfolio-post01"]) ? "current-menu-parent" : ""}>
                            <Link href="#">Portfolio</Link>
                            <ul className="sub-menu">
                                <li><Link href="/portfolio-post01">Portfolio Details 01</Link></li>
                            </ul>
                        </li>

                        <li className={isActive("/contact") ? "current-menu-parent" : ""}>
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

"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const navItems = [
     { href: "/", label: "Home" },
     { href: "/about", label: "About" },
     { href: "/services", label: "Services" },
     { href: "/case-studies", label: "Case Studies" },
     { href: "/blog", label: "Insights" },
     { href: "/contact", label: "Contact" },
];

export default function Navbar() {
     const [isScrolled, setIsScrolled] = useState(false);
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
     const dropdownRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
          setIsScrolled(window.scrollY > 20);

          const handleScroll = () => {
               setIsScrolled(window.scrollY > 20);
          };
          window.addEventListener("scroll", handleScroll, { passive: true });
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     useEffect(() => {
          const handleClickOutside = (event: MouseEvent) => {
               if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                    setActiveDropdown(null);
               }
          };
          document.addEventListener("mousedown", handleClickOutside);
          return () => document.removeEventListener("mousedown", handleClickOutside);
     }, []);

     const handleNavClick = () => {
          setIsMobileMenuOpen(false);
          setActiveDropdown(null);
     };

     return (
          <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
               <div className="navbar-container">
                    <Link href="/" className="logo" onClick={handleNavClick}>
                         <span className="logo-icon">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke="currentColor" strokeWidth="2" fill="none" />
                                   <path d="M16 10L22 14V22L16 26L10 22V14L16 10Z" fill="currentColor" />
                              </svg>
                         </span>
                         <span className="logo-text">Corporate<span className="logo-accent">Nexus</span></span>
                    </Link>

                    <nav className="nav-desktop" ref={dropdownRef}>
                         <ul className="nav-list">
                              {navItems.map((item) => (
                                   <li key={item.href} className="nav-item">
                                        {item.href === "/services" || item.href === "/case-studies" ? (
                                             <div
                                                  className="nav-dropdown-trigger"
                                                  onMouseEnter={() => setActiveDropdown(item.href)}
                                             >
                                                  <Link href={item.href} className="nav-link">
                                                       {item.label}
                                                       <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                       </svg>
                                                  </Link>
                                                  <div className={`nav-dropdown ${activeDropdown === item.href ? "active" : ""}`}>
                                                       {item.href === "/services" ? (
                                                            <>
                                                                 <Link href="/services#consulting" className="dropdown-item">Strategic Consulting</Link>
                                                                 <Link href="/services#digital" className="dropdown-item">Digital Transformation</Link>
                                                                 <Link href="/services#analytics" className="dropdown-item">Data Analytics</Link>
                                                                 <Link href="/services#managed" className="dropdown-item">Managed Services</Link>
                                                            </>
                                                       ) : (
                                                            <>
                                                                 <Link href="/case-studies#fintech" className="dropdown-item">FinTech Revolution</Link>
                                                                 <Link href="/case-studies#retail" className="dropdown-item">Retail Evolution</Link>
                                                                 <Link href="/case-studies#healthcare" className="dropdown-item">Healthcare Innovation</Link>
                                                                 <Link href="/case-studies#manufacturing" className="dropdown-item">Smart Manufacturing</Link>
                                                            </>
                                                       )}
                                                  </div>
                                             </div>
                                        ) : (
                                             <Link href={item.href} className="nav-link" onClick={handleNavClick}>
                                                  {item.label}
                                             </Link>
                                        )}
                                   </li>
                              ))}
                         </ul>
                    </nav>

                    <div className="nav-actions">
                         <Link href="/contact" className="nav-cta">
                              Get Started
                              <svg className="cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                   <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                         </Link>
                    </div>

                    <button
                         className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
                         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                         aria-label="Toggle Navigation"
                    >
                         <span className="hamburger-line"></span>
                         <span className="hamburger-line"></span>
                         <span className="hamburger-line"></span>
                    </button>
               </div>

               <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
                    <nav className="mobile-nav">
                         <ul className="mobile-nav-list">
                              {navItems.map((item, index) => (
                                   <li
                                        key={item.href}
                                        className="mobile-nav-item"
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                   >
                                        <Link
                                             href={item.href}
                                             className="mobile-nav-link"
                                             onClick={handleNavClick}
                                        >
                                             {item.label}
                                        </Link>
                                   </li>
                              ))}
                         </ul>
                         <div className="mobile-cta-wrapper">
                              <Link href="/contact" className="mobile-nav-cta" onClick={handleNavClick}>
                                   Get Started
                              </Link>
                         </div>
                    </nav>
               </div>
          </header>
     );
}

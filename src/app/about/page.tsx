import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
     title: "About Us",
     description: "Learn more about CorporateNexus, our mission, vision, and the executive team driving digital transformation.",
};

export default function AboutPage() {
     return (
          <div className="about-page">
               {/* HERO SECTION */}
               <section className="page-hero">
                    <div className="hero-overlay"></div>
                    <div className="container page-hero-content">
                         <h1>About <span>CorporateNexus</span></h1>
                         <p className="subtitle">Pioneering the future of enterprise digital experiences.</p>
                    </div>
               </section>

               {/* MISSION SECTION */}
               <section className="section">
                    <div className="container">
                         <div className="about-grid">
                              <div className="about-image reveal">
                                   <Image
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                                        alt="Corporate nexus team collaborating"
                                        width={1200}
                                        height={800}
                                        className="optimized-img rounded shadow"
                                   />
                              </div>
                              <div className="about-content reveal">
                                   <h2>Our Mission</h2>
                                   <p>
                                        Founded in 2015, CorporateNexus was built on a simple premise: enterprise software doesn't have to be slow, clunky, or hard to use. We bridge the gap between world-class engineering and premium design aesthetics to deliver platforms that users love and businesses rely on.
                                   </p>
                                   <p>
                                        Whether it's migrating a monolithic architecture to a headless CMS, or optimizing Core Web Vitals to increase SEO ranking and conversion, our team of experts is dedicated to your absolute success.
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>

               {/* STATS SECTION */}
               <section className="section bg-surface">
                    <div className="container">
                         <div className="stats-grid reveal">
                              <div className="stat-card">
                                   <span className="stat-number">150+</span>
                                   <span className="stat-label">Enterprise Clients</span>
                              </div>
                              <div className="stat-card">
                                   <span className="stat-number">98%</span>
                                   <span className="stat-label">Client Retention</span>
                              </div>
                              <div className="stat-card">
                                   <span className="stat-number">500+</span>
                                   <span className="stat-label">Projects Delivered</span>
                              </div>
                              <div className="stat-card">
                                   <span className="stat-number">24/7</span>
                                   <span className="stat-label">Support</span>
                              </div>
                         </div>
                    </div>
               </section>

               {/* VALUES SECTION */}
               <section className="section">
                    <div className="container">
                         <div className="section-header reveal">
                              <h2>Our Core Values</h2>
                              <p>The principles that drive everything we do.</p>
                         </div>
                         <div className="grid-3">
                              <div className="card reveal">
                                   <div className="card-icon">🎯</div>
                                   <h3>Client First</h3>
                                   <p>Your success is our success. We measure our achievements by the results we deliver to your business.</p>
                              </div>
                              <div className="card reveal">
                                   <div className="card-icon">💡</div>
                                   <h3>Innovation</h3>
                                   <p>We constantly explore new technologies and methodologies to deliver cutting-edge solutions.</p>
                              </div>
                              <div className="card reveal">
                                   <div className="card-icon">🤝</div>
                                   <h3>Partnership</h3>
                                   <p>We build long-term relationships with our clients, becoming an extension of your team.</p>
                              </div>
                         </div>
                    </div>
               </section>

               {/* CTA SECTION */}
               <section className="section cta-section">
                    <div className="container text-center">
                         <h2>Ready to Transform Your Business?</h2>
                         <p>Let's discuss how we can help you achieve your digital goals.</p>
                         <div className="hero-cta">
                              <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
                              <Link href="/services" className="btn btn-outline">Our Services</Link>
                         </div>
                    </div>
               </section>
          </div>
     );
}

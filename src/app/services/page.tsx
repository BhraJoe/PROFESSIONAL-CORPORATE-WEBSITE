import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
     title: "Services & Solutions",
     description: "Enterprise digital transformation, web performance optimization, and headless CMS integration services.",
};

const solutions = [
     {
          id: "cloud",
          icon: "☁️",
          title: "Cloud Migration",
          desc: "Seamlessly transition from legacy monoliths to resilient, distributed cloud infrastructure. We ensure zero downtime during cutovers."
     },
     {
          id: "headless",
          icon: "🔗",
          title: "Headless CMS Architecture",
          desc: "Decouple your frontend from your backend. Manage content centrally while pushing to web, mobile, and edge endpoints instantly."
     },
     {
          id: "seo",
          icon: "🔍",
          title: "Technical SEO & Schema",
          desc: "Drive organic enterprise traffic. We implement advanced JSON-LD structured data and solve indexation at scale."
     },
     {
          id: "performance",
          icon: "⚡",
          title: "Performance Optimization",
          desc: "100/100 Core Web Vitals. Our bespoke edge-rendering techniques ensure your pages load in under 1 second."
     },
     {
          id: "security",
          icon: "🛡️",
          title: "Enterprise Security",
          desc: "Bank-grade security protocols, SOC2 compliance, and comprehensive penetration testing to protect your digital assets."
     },
     {
          id: "analytics",
          icon: "📊",
          title: "Analytics & Insights",
          desc: "Data-driven decision making with advanced analytics, custom dashboards, and actionable business intelligence."
     }
];

export default function ServicesPage() {
     return (
          <div className="services-page">
               {/* HERO SECTION */}
               <section className="page-hero">
                    <div className="hero-overlay"></div>
                    <div className="container page-hero-content">
                         <h1>Corporate <span>Solutions</span></h1>
                         <p className="subtitle">Transforming complex challenges into scalable digital assets.</p>
                    </div>
               </section>

               {/* SERVICES GRID */}
               <section className="section">
                    <div className="container">
                         <div className="services-grid">
                              {solutions.map((service, index) => (
                                   <div key={service.id} className="service-card reveal" id={service.id}>
                                        <div className="service-icon">{service.icon}</div>
                                        <h2>{service.title}</h2>
                                        <p>{service.desc}</p>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* WHY CHOOSE US */}
               <section className="section bg-surface">
                    <div className="container">
                         <div className="section-header reveal">
                              <h2>Why Choose CorporateNexus?</h2>
                              <p>Enterprise-grade solutions delivered with startup agility.</p>
                         </div>
                         <div className="grid-3">
                              <div className="card reveal">
                                   <div className="card-icon">🎯</div>
                                   <h3>Results-Driven</h3>
                                   <p>Every solution is measured against KPIs that matter to your business growth.</p>
                              </div>
                              <div className="card reveal">
                                   <div className="card-icon">⏱️</div>
                                   <h3>Fast Delivery</h3>
                                   <p>Agile methodologies ensure rapid deployment without compromising quality.</p>
                              </div>
                              <div className="card reveal">
                                   <div className="card-icon">🔒</div>
                                   <h3>Enterprise Ready</h3>
                                   <p>Scalable architectures built to handle millions of users securely.</p>
                              </div>
                         </div>
                    </div>
               </section>

               {/* CTA SECTION */}
               <section className="section cta-section">
                    <div className="container text-center">
                         <h2>Ready to Get Started?</h2>
                         <p>Let's discuss how our solutions can transform your business.</p>
                         <div className="hero-cta">
                              <Link href="/contact" className="btn btn-primary">Schedule Consultation</Link>
                              <Link href="/case-studies" className="btn btn-outline">View Case Studies</Link>
                         </div>
                    </div>
               </section>
          </div>
     );
}

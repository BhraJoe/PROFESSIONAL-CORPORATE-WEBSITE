import { Metadata } from "next";
import Link from "next/link";
import { getCaseStudies } from "@/lib/cms";

export const metadata: Metadata = {
     title: "Case Studies | Proven Value",
     description: "Explore how CorporateNexus delivers measurable digital transformations for enterprise clients.",
};

export default async function CaseStudiesPage() {
     const caseStudies = await getCaseStudies();

     return (
          <div className="case-studies-page">
               {/* HERO SECTION */}
               <section className="page-hero">
                    <div className="hero-overlay"></div>
                    <div className="container page-hero-content">
                         <h1>Client <span>Success</span></h1>
                         <p className="subtitle">Real results from complex enterprise transformations.</p>
                    </div>
               </section>

               {/* CASE STUDIES GRID */}
               <section className="section">
                    <div className="container">
                         <div className="studies-grid">
                              {caseStudies.map((study) => (
                                   <div key={study.slug} className="study-card reveal">
                                        <div className="study-client">{study.client}</div>
                                        <h2>{study.title}</h2>
                                        <p>{study.summary}</p>

                                        <ul className="study-results">
                                             {study.results.map((result, idx) => (
                                                  <li key={idx}>✓ {result}</li>
                                             ))}
                                        </ul>

                                        <Link href={`/case-studies/${study.slug}`} className="btn btn-outline">
                                             Read Full Study
                                        </Link>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA SECTION */}
               <section className="section cta-section">
                    <div className="container text-center">
                         <h2>Ready to Be Our Next Success Story?</h2>
                         <p>Let's discuss how we can transform your business.</p>
                         <div className="hero-cta">
                              <Link href="/contact" className="btn btn-primary">Get Started</Link>
                              <Link href="/services" className="btn btn-outline">Our Services</Link>
                         </div>
                    </div>
               </section>
          </div>
     );
}

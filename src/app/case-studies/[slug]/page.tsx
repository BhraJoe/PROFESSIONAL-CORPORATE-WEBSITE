import { Metadata } from "next";
import { getCaseStudies } from "@/lib/cms";
import { notFound } from "next/navigation";
import Link from "next/link";

interface CaseStudyProps {
     params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
     const caseStudies = await getCaseStudies();
     return caseStudies.map((study) => ({
          slug: study.slug,
     }));
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
     const resolvedParams = await params;
     const studies = await getCaseStudies();
     const study = studies.find(s => s.slug === resolvedParams.slug);

     if (!study) return { title: "Study Not Found" };

     return {
          title: `${study.title} | ${study.client}`,
          description: study.summary,
     };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
     const resolvedParams = await params;
     const studies = await getCaseStudies();
     const study = studies.find(s => s.slug === resolvedParams.slug);

     if (!study) {
          notFound();
     }

     return (
          <article className="study-post-page">
               {/* HERO SECTION */}
               <section className="page-hero">
                    <div className="hero-overlay"></div>
                    <div className="container page-hero-content">
                         <p className="subtitle">Case Study</p>
                         <h1>{study.title}</h1>
                         <p className="subtitle">{study.client}</p>
                    </div>
               </section>

               {/* CONTENT SECTION */}
               <section className="section">
                    <div className="container">
                         <div className="post-content reveal">
                              <p className="lead">{study.summary}</p>

                              <h2>Key Results</h2>
                              <ul className="results-list">
                                   {study.results.map((r, i) => (
                                        <li key={i}>{r}</li>
                                   ))}
                              </ul>

                              <div className="cta-box">
                                   <h3>Ready for similar results?</h3>
                                   <Link href="/contact" className="btn btn-primary">Schedule a Consultation</Link>
                              </div>
                         </div>
                    </div>
               </section>
          </article>
     );
}

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/cms";

export const metadata: Metadata = {
     title: "Corporate Insights & Blog",
     description: "Read the latest thoughts on enterprise software, architecture, and technology from the CorporateNexus team.",
};

export default async function BlogPage() {
     const posts = await getBlogPosts();

     return (
          <div className="blog-page">
               {/* HERO SECTION */}
               <section className="page-hero">
                    <div className="hero-overlay"></div>
                    <div className="container page-hero-content">
                         <h1>Latest <span>Insights</span></h1>
                         <p className="subtitle">Expert perspectives on business, architecture, and engineering.</p>
                    </div>
               </section>

               {/* BLOG GRID */}
               <section className="section">
                    <div className="container">
                         <div className="blog-grid">
                              {posts.map((post) => (
                                   <article key={post.slug} className="blog-card reveal">
                                        <div className="blog-image">
                                             <Image
                                                  src={post.coverImage || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"}
                                                  alt={post.title}
                                                  width={800}
                                                  height={500}
                                                  className="optimized-img"
                                             />
                                        </div>
                                        <div className="blog-content">
                                             <p className="blog-meta">{new Date(post.date).toLocaleDateString()} · By {post.author}</p>
                                             <h2>
                                                  <Link href={`/blog/${post.slug}`} className="blog-link">
                                                       {post.title}
                                                  </Link>
                                             </h2>
                                             <p className="blog-excerpt">{post.excerpt}</p>
                                             <Link href={`/blog/${post.slug}`} className="btn btn-outline">
                                                  Read More
                                             </Link>
                                        </div>
                                   </article>
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA SECTION */}
               <section className="section cta-section">
                    <div className="container text-center">
                         <h2>Stay Ahead of the Curve</h2>
                         <p>Subscribe to get the latest insights delivered to your inbox.</p>
                         <div className="hero-cta">
                              <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
                              <Link href="/case-studies" className="btn btn-outline">View Case Studies</Link>
                         </div>
                    </div>
               </section>
          </div>
     );
}

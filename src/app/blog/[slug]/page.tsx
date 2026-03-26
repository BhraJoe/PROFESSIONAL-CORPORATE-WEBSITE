import { Metadata } from "next";
import { getBlogPost, getBlogPosts } from "@/lib/cms";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { generateArticleSchema } from "@/lib/seo";

interface BlogPostProps {
     params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
     const posts = await getBlogPosts();
     return posts.map((post) => ({
          slug: post.slug,
     }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
     const resolvedParams = await params;
     const post = await getBlogPost(resolvedParams.slug);

     if (!post) return { title: "Post Not Found" };

     return {
          title: post.title,
          description: post.excerpt,
          openGraph: {
               title: post.title,
               description: post.excerpt,
               type: "article",
               publishedTime: post.date,
               authors: [post.author],
               images: [
                    {
                         url: post.coverImage,
                         width: 1200,
                         height: 630,
                    }
               ]
          }
     };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
     const resolvedParams = await params;
     const post = await getBlogPost(resolvedParams.slug);

     if (!post) {
          notFound();
     }

     const schema = generateArticleSchema(post);

     return (
          <article className="blog-post-page">
               {/* JSON-LD Schema */}
               <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
               />

               {/* HERO SECTION */}
               <section className="page-hero">
                    <div className="hero-overlay"></div>
                    <div className="container page-hero-content">
                         <p className="subtitle">{new Date(post.date).toLocaleDateString()} · By {post.author}</p>
                         <h1>{post.title}</h1>
                    </div>
               </section>

               {/* CONTENT SECTION */}
               <section className="section">
                    <div className="container">
                         <div className="post-hero-image reveal">
                              <Image
                                   src={post.coverImage}
                                   alt={post.title}
                                   width={1200}
                                   height={600}
                                   className="optimized-img rounded shadow"
                                   priority
                              />
                         </div>

                         <div className="post-content reveal">
                              <div dangerouslySetInnerHTML={{ __html: `<p>${post.content.replace(/\n\n/g, '</p><p>')}</p>` }} />
                         </div>

                         <div className="cta-box" style={{ marginTop: '3rem', textAlign: 'center' }}>
                              <h3>Enjoyed this article?</h3>
                              <p style={{ marginBottom: '1rem' }}>Check out more insights on our blog.</p>
                              <Link href="/blog" className="btn btn-outline">Back to Blog</Link>
                         </div>
                    </div>
               </section>
          </article>
     );
}

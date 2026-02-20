import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BarChart, Calendar, User, ArrowRight } from 'lucide-react'
import { getBlogPosts } from '@/lib/cms'

export const metadata: Metadata = {
     title: 'Blog',
     description: 'Latest insights, business trends, and expert perspectives from our team.',
}

export default function BlogPage() {
     const posts = getBlogPosts()

     const categories = ['All', 'Strategy', 'Technology', 'Leadership', 'Finance']

     return (
          <>
               {/* Hero Section */}
               <section className="pt-32 pb-16 bg-gradient-to-br from-corporate-primary via-corporate-secondary to-corporate-dark">
                    <div className="container">
                         <div className="max-w-3xl">
                              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                   Insights & News
                              </h1>
                              <p className="text-xl text-white/80">
                                   Stay informed with the latest business trends, industry insights,
                                   and expert perspectives from our team.
                              </p>
                         </div>
                    </div>
               </section>

               {/* Categories */}
               <section className="py-8 bg-corporate-light border-b border-gray-200">
                    <div className="container">
                         <div className="flex flex-wrap gap-4">
                              {categories.map((category) => (
                                   <button
                                        key={category}
                                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${category === 'All'
                                             ? 'bg-corporate-primary text-white'
                                             : 'bg-white text-corporate-gray hover:bg-corporate-primary hover:text-white'
                                             }`}
                                   >
                                        {category}
                                   </button>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Blog Posts */}
               <section className="section">
                    <div className="container">
                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {posts.map((post) => (
                                   <article key={post.id} id={post.slug} className="card overflow-hidden p-0 group">
                                        <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-corporate-primary to-corporate-secondary">
                                             {post.image && (
                                                  <Image
                                                       src={post.image}
                                                       alt={post.title}
                                                       fill
                                                       className="object-cover"
                                                  />
                                             )}
                                             {!post.image && (
                                                  <BarChart className="w-16 h-16 text-white/50" />
                                             )}
                                             <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                                  <span className="text-white text-sm font-medium">{post.category}</span>
                                             </div>
                                        </div>
                                        <div className="p-6">
                                             <h2 className="text-lg font-semibold mb-3 text-corporate-dark group-hover:text-corporate-accent transition-colors line-clamp-2">
                                                  {post.title}
                                             </h2>
                                             <p className="text-corporate-gray mb-4 line-clamp-3">{post.excerpt}</p>
                                             <div className="flex items-center justify-between text-sm">
                                                  <div className="flex items-center gap-4 text-corporate-gray">
                                                       <span className="flex items-center gap-1">
                                                            <User size={14} />
                                                            {post.author}
                                                       </span>
                                                       <span className="flex items-center gap-1">
                                                            <Calendar size={14} />
                                                            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   </article>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Newsletter Section */}
               <section className="section bg-corporate-light">
                    <div className="container">
                         <div className="max-w-2xl mx-auto text-center">
                              <h2 className="section-title">Subscribe to Our Newsletter</h2>
                              <p className="section-subtitle mb-8">
                                   Get the latest insights and updates delivered directly to your inbox.
                              </p>
                              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                   <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="input flex-1"
                                   />
                                   <button type="submit" className="btn btn-primary whitespace-nowrap">
                                        Subscribe
                                   </button>
                              </form>
                         </div>
                    </div>
               </section>
          </>
     )
}

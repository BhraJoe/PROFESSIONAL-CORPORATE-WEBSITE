import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Briefcase, Cpu, TrendingUp, BarChart, Shield, Users, Globe } from 'lucide-react'
import { getBlogPosts, getServices } from '@/lib/cms'
import { images } from '@/lib/images'

export default function HomePage() {
     const blogPosts = getBlogPosts().slice(0, 3)
     const services = getServices().slice(0, 4)

     const stats = [
          { value: '500+', label: 'Clients Worldwide' },
          { value: '15+', label: 'Years Experience' },
          { value: '98%', label: 'Client Satisfaction' },
          { value: '50+', label: 'Expert Consultants' },
     ]

     const industries = [
          { name: 'Financial Services', icon: TrendingUp },
          { name: 'Healthcare', icon: Shield },
          { name: 'Technology', icon: Cpu },
          { name: 'Manufacturing', icon: Briefcase },
          { name: 'Retail', icon: Globe },
          { name: 'Professional Services', icon: Users },
     ]

     return (
          <>
               {/* Hero Section - Using about page style */}
               <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-corporate-dark overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-40">
                         <Image
                              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
                              alt="Corporate building"
                              fill
                              className="object-cover grayscale"
                              priority
                         />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark via-corporate-primary/80 to-transparent"></div>

                    <div className="container relative z-10 text-center">
                         <div className="max-w-4xl mx-auto">
                              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 md:mb-6 animate-fade-in">
                                   Strategic Solutions for
                                   <span className="block text-corporate-secondary mt-2">Modern Enterprises</span>
                              </h1>
                              <p className="text-lg md:text-xl text-corporate-light/90 font-light leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-100">
                                   We help ambitious organizations transform their business,
                                   drive growth, and achieve sustainable competitive advantage
                                   through expert consulting and innovative strategies.
                              </p>
                              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in animate-delay-200">
                                   <Link href="/contact" className="btn btn-primary px-8 md:px-10 py-3 md:py-4 text-base md:text-lg">
                                        Start Your Journey
                                   </Link>
                                   <Link href="/services" className="btn btn-secondary px-8 md:px-10 py-3 md:py-4 text-base md:text-lg border-white/20 text-white hover:bg-white hover:text-corporate-primary">
                                        Explore Services
                                   </Link>
                              </div>
                         </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce md:bottom-10">
                         <div className="flex flex-col items-center gap-1">
                              <div className="w-[2px] h-12 md:h-20 bg-gradient-to-b from-transparent via-corporate-secondary to-transparent"></div>
                              <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
                         </div>
                    </div>
               </section>

               {/* Stats Section */}
               <section className="py-10 md:py-16 bg-white">
                    <div className="container">
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-y border-gray-100 py-8 md:py-10">
                              {stats.map((stat, index) => (
                                   <div key={index} className="text-center group">
                                        <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-corporate-secondary mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                                        <div className="text-corporate-primary font-medium tracking-wide uppercase text-xs md:text-sm">{stat.label}</div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Services Overview */}
               <section className="py-12 md:py-20 lg:py-24 bg-corporate-light relative">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 skew-x-12 -z-10"></div>

                    <div className="container">
                         <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-14 gap-4 md:gap-6">
                              <div className="max-w-2xl">
                                   <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-corporate-primary mb-4">Our Core Services</h2>
                                   <p className="text-base md:text-lg text-corporate-gray max-w-2xl leading-relaxed">
                                        Comprehensive business solutions tailored to meet the unique challenges
                                        of modern enterprises across industries.
                                   </p>
                              </div>
                              <Link href="/services" className="btn btn-secondary text-base">
                                   View All Services
                              </Link>
                         </div>

                         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                              {services.map((service, index) => (
                                   <div key={service.id} className="card group hover:border-corporate-secondary/30 p-6 md:p-8">
                                        <div className="w-12 h-12 md:w-14 md:h-14 bg-corporate-light rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-corporate-secondary group-hover:text-white transition-all duration-300">
                                             <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-corporate-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-lg md:text-xl font-heading font-bold mb-3 md:mb-4 text-corporate-primary group-hover:text-corporate-secondary transition-colors">{service.title}</h3>
                                        <p className="text-sm md:text-base text-corporate-gray mb-4 md:mb-6 leading-relaxed">{service.description}</p>
                                        <Link href={`/services#${service.slug}`} className="inline-flex items-center text-corporate-primary font-semibold hover:text-corporate-secondary transition-colors text-sm md:text-base group/link">
                                             Learn more <ArrowRight size={16} className="ml-1 md:ml-2 transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* About Section */}
               <section className="py-12 md:py-20 lg:py-24 bg-corporate-primary text-white overflow-hidden relative">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 p-16 md:p-20 opacity-5">
                         <Globe size={400} />
                    </div>

                    <div className="container relative z-10">
                         <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
                              <div>
                                   <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4 md:mb-6">
                                        Driving Business Excellence
                                        <span className="block text-corporate-secondary">Since 2009</span>
                                   </h2>
                                   <p className="text-corporate-light/80 mb-4 md:mb-6 text-base md:text-lg leading-relaxed font-light">
                                        At Nexus Corporate, we believe in the power of strategic thinking and
                                        innovative solutions to transform businesses. Our team of experienced
                                        consultants brings deep industry expertise and a proven track record of
                                        delivering measurable results.
                                   </p>
                                   <p className="text-corporate-light/80 mb-6 md:mb-10 text-base md:text-lg leading-relaxed font-light">
                                        We partner with organizations across the globe to help them navigate
                                        complex business challenges, capitalize on emerging opportunities,
                                        and achieve sustainable growth.
                                   </p>
                                   <div className="flex flex-wrap gap-4 md:gap-6">
                                        <Link href="/about" className="btn btn-primary border-corporate-secondary text-corporate-secondary hover:bg-corporate-secondary hover:text-corporate-primary text-sm md:text-base">
                                             More About Us
                                        </Link>
                                        <Link href="/contact" className="btn btn-secondary border-white/20 text-white hover:bg-white hover:text-corporate-primary text-sm md:text-base">
                                             Get in Touch
                                        </Link>
                                   </div>
                              </div>
                              <div className="relative mt-8 lg:mt-0">
                                   <div className="aspect-square bg-white/5 backdrop-blur-sm rounded-3xl p-1 border border-white/10">
                                        <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-2xl flex items-center justify-center relative overflow-hidden group">
                                             <div className="absolute inset-0 bg-corporate-secondary/20 transition-opacity group-hover:opacity-0"></div>
                                             <div className="text-center z-10 p-6 md:p-8">
                                                  <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-2 opacity-90">15+</div>
                                                  <div className="text-lg md:text-xl lg:text-2xl text-corporate-secondary tracking-widest uppercase font-medium">Years of Excellence</div>
                                             </div>
                                        </div>
                                   </div>
                                   {/* Floating Card */}
                                   <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 bg-white rounded-xl shadow-2xl p-4 md:p-6 max-w-[180px] md:max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
                                        <div className="flex items-center gap-3 md:gap-4">
                                             <div className="w-10 md:w-12 h-10 md:h-12 bg-green-50 rounded-full flex items-center justify-center">
                                                  <TrendingUp className="w-5 md:w-6 h-5 md:h-6 text-green-600" />
                                             </div>
                                             <div>
                                                  <div className="font-bold text-corporate-primary text-sm md:text-lg">Proven Results</div>
                                                  <div className="text-xs md:text-sm text-corporate-gray">Consistently exceeding targets</div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Industries Section */}
               <section className="py-12 md:py-20 lg:py-24 bg-white">
                    <div className="container">
                         <div className="text-center mb-10 md:mb-14">
                              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-corporate-primary mb-4 md:mb-6">Industries We Serve</h2>
                              <p className="text-base md:text-lg text-corporate-gray max-w-2xl mx-auto leading-relaxed">
                                   Deep expertise across diverse industries, delivering tailored solutions
                                   that address unique market dynamics and business requirements.
                              </p>
                         </div>

                         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                              {industries.map((industry, index) => (
                                   <div key={index} className="group p-6 md:p-8 border border-gray-100 rounded-2xl hover:shadow-xl hover:border-corporate-secondary/30 transition-all duration-300">
                                        <div className="flex items-center gap-4 md:gap-6 mb-3 md:mb-4">
                                             <div className="w-12 md:w-14 h-12 md:h-14 bg-corporate-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-corporate-secondary transition-colors duration-300">
                                                  <industry.icon className="w-6 md:w-7 h-6 md:h-7 text-corporate-primary group-hover:text-white transition-colors duration-300" />
                                             </div>
                                             <h3 className="text-lg md:text-xl font-heading font-bold text-corporate-primary group-hover:text-corporate-secondary transition-colors">{industry.name}</h3>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Latest Blog Section */}
               <section className="py-12 md:py-20 lg:py-24 bg-gray-50">
                    <div className="container">
                         <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-14 gap-4 md:gap-6">
                              <div className="max-w-2xl">
                                   <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-corporate-primary mb-4 md:mb-6">Latest Insights</h2>
                                   <p className="text-base md:text-lg text-corporate-gray max-w-2xl leading-relaxed">
                                        Stay informed with the latest business trends, industry insights,
                                        and expert perspectives from our team.
                                   </p>
                              </div>
                              <Link href="/blog" className="btn btn-secondary text-base">
                                   View All Articles
                              </Link>
                         </div>

                         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                              {blogPosts.map((post) => (
                                   <article key={post.id} className="card p-0 overflow-hidden hover:shadow-2xl group">
                                        <div className="aspect-video bg-corporate-primary relative overflow-hidden">
                                             <div className="absolute inset-0 flex items-center justify-center bg-corporate-secondary/10 group-hover:bg-corporate-secondary/20 transition-colors">
                                                  <BarChart className="w-12 md:w-14 h-12 md:h-14 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                                             </div>
                                        </div>
                                        <div className="p-6 md:p-8">
                                             <div className="text-xs font-bold tracking-widest text-corporate-secondary uppercase mb-2 md:mb-3">{post.category}</div>
                                             <h3 className="text-lg md:text-xl font-heading font-bold mb-3 md:mb-4 text-corporate-primary line-clamp-2 group-hover:text-corporate-secondary transition-colors">
                                                  {post.title}
                                             </h3>
                                             <p className="text-sm md:text-base text-corporate-gray mb-4 md:mb-6 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                                             <div className="flex items-center justify-between border-t border-gray-100 pt-4 md:pt-6">
                                                  <span className="text-xs md:text-sm font-medium text-corporate-gray">{post.author}</span>
                                                  <Link href={`/blog#${post.slug}`} className="text-corporate-primary font-semibold hover:text-corporate-secondary transition-colors text-sm md:text-base">
                                                       Read article
                                                  </Link>
                                             </div>
                                        </div>
                                   </article>
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-16 md:py-20 lg:py-24 bg-corporate-primary relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-corporate-dark via-transparent to-corporate-dark opacity-80"></div>

                    <div className="container relative z-10 text-center">
                         <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight">
                              Ready to Transform Your Business?
                         </h2>
                         <p className="text-base md:text-lg lg:text-xl text-corporate-light/80 mb-8 md:mb-10 max-w-xl md:max-w-2xl mx-auto font-light">
                              Schedule a consultation with our experts and discover how we can
                              help you achieve your business objectives.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                              <Link href="/contact" className="btn bg-corporate-secondary text-corporate-primary hover:bg-white hover:text-corporate-primary px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-bold shadow-lg shadow-corporate-secondary/20">
                                   Contact Us Today
                              </Link>
                         </div>
                    </div>
               </section>
          </>
     )
}

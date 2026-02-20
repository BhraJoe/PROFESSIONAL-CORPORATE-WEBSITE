import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Target, Eye, Heart, Clock, Award, Users, Globe } from 'lucide-react'

export const metadata: Metadata = {
     title: 'About Us',
     description: 'Learn about Nexus Corporate - our mission, vision, and team of expert consultants.',
}

export default function AboutPage() {
     const team = [
          {
               name: 'Robert Williams',
               role: 'Chief Executive Officer',
               bio: '25+ years in strategic consulting, former McKinsey partner.',
               image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80'
          },
          {
               name: 'Sarah Johnson',
               role: 'Managing Director',
               bio: 'Expert in digital transformation and business strategy.',
               image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
          },
          {
               name: 'Michael Chen',
               role: 'Head of Technology',
               bio: 'Former CTO with deep expertise in enterprise technology.',
               image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
          },
          {
               name: 'Emily Davis',
               role: 'Head of Operations',
               bio: 'Operations expert specializing in process optimization.',
               image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80'
          },
     ]

     const values = [
          {
               icon: Target,
               title: 'Mission',
               description: 'To empower organizations with strategic insights and innovative solutions that drive sustainable growth and competitive advantage.',
          },
          {
               icon: Eye,
               title: 'Vision',
               description: 'To be the most trusted partner for businesses seeking transformation and excellence in their respective industries.',
          },
          {
               icon: Heart,
               title: 'Values',
               description: 'Integrity, excellence, innovation, and client-centricity guide everything we do.',
          },
     ]

     return (
          <>
               {/* Hero Section */}
               <section className="relative pt-32 pb-20 bg-corporate-dark overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-40">
                         <Image
                              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
                              alt="About us"
                              fill
                              className="object-cover grayscale"
                              priority
                         />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark via-corporate-primary/80 to-transparent"></div>

                    <div className="container relative z-10 text-center">
                         <div className="max-w-4xl mx-auto">
                              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 animate-fade-in">
                                   About Nexus Corporate
                              </h1>
                              <p className="text-xl md:text-2xl text-corporate-light/90 font-light leading-relaxed animate-fade-in animate-delay-100">
                                   We are a premier business consulting firm dedicated to helping
                                   organizations achieve their full potential through strategic
                                   thinking and innovative solutions.
                              </p>
                         </div>
                    </div>
               </section>

               {/* Mission, Vision, Values */}
               <section className="section bg-white relative">
                    <div className="container">
                         <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-20">
                              {values.map((item, index) => (
                                   <div key={index} className="glass-panel p-8 rounded-xl text-center backdrop-blur-xl bg-white/10 dark:bg-corporate-primary/95 border border-white/20 shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                                        <div className="w-16 h-16 bg-corporate-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                             <item.icon className="w-8 h-8 text-corporate-secondary" />
                                        </div>
                                        <h3 className="text-xl font-heading font-bold mb-4 text-white">{item.title}</h3>
                                        <p className="text-corporate-light/70">{item.description}</p>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Company Story */}
               <section className="section bg-gray-50">
                    <div className="container">
                         <div className="grid lg:grid-cols-2 gap-16 items-center">
                              <div>
                                   <div className="inline-block px-4 py-1.5 bg-corporate-secondary/10 text-corporate-secondary rounded-full text-sm font-semibold tracking-wide uppercase mb-6">Our Story</div>
                                   <h2 className="section-title">A Legacy of Excellence</h2>
                                   <div className="space-y-6 text-corporate-gray text-lg leading-relaxed">
                                        <p>
                                             Founded in 2009, Nexus Corporate began with a simple vision: to
                                             provide businesses with the strategic insights and expertise needed
                                             to thrive in an increasingly complex marketplace.
                                        </p>
                                        <p>
                                             Over the years, we have grown from a small consulting boutique to
                                             a full-service strategic partner, serving Fortune 500 companies,
                                             mid-market enterprises, and ambitious startups across the globe.
                                        </p>
                                        <p>
                                             Today, our team of 50+ consultants brings diverse expertise across
                                             strategy, technology, finance, and operations, allowing us to
                                             deliver comprehensive solutions that address our clients most
                                             pressing challenges.
                                        </p>
                                   </div>
                              </div>
                              <div className="grid grid-cols-2 gap-6">
                                   <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <Clock className="w-10 h-10 text-corporate-secondary mb-4" />
                                        <div className="text-4xl font-bold text-corporate-primary mb-1">15+</div>
                                        <div className="text-corporate-gray text-sm uppercase tracking-wide">Years of Excellence</div>
                                   </div>
                                   <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <Award className="w-10 h-10 text-corporate-secondary mb-4" />
                                        <div className="text-4xl font-bold text-corporate-primary mb-1">50+</div>
                                        <div className="text-corporate-gray text-sm uppercase tracking-wide">Expert Consultants</div>
                                   </div>
                                   <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <Users className="w-10 h-10 text-corporate-secondary mb-4" />
                                        <div className="text-4xl font-bold text-corporate-primary mb-1">500+</div>
                                        <div className="text-corporate-gray text-sm uppercase tracking-wide">Clients Served</div>
                                   </div>
                                   <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <Globe className="w-10 h-10 text-corporate-secondary mb-4" />
                                        <div className="text-4xl font-bold text-corporate-primary mb-1">30+</div>
                                        <div className="text-corporate-gray text-sm uppercase tracking-wide">Countries</div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Team Section */}
               <section className="section bg-white">
                    <div className="container">
                         <div className="text-center mb-16">
                              <h2 className="section-title">Leadership Team</h2>
                              <p className="section-subtitle mx-auto">
                                   Our leadership team brings decades of experience and a shared
                                   commitment to delivering exceptional results for our clients.
                              </p>
                         </div>

                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {team.map((member, index) => (
                                   <div key={index} className="group">
                                        <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-xl bg-corporate-light">
                                             <Image
                                                  src={member.image}
                                                  alt={member.name}
                                                  fill
                                                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                                             />
                                             <div className="absolute inset-0 bg-gradient-to-t from-corporate-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                       <p className="text-white text-sm leading-relaxed">{member.bio}</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <h3 className="text-xl font-heading font-bold text-corporate-primary mb-1">{member.name}</h3>
                                        <div className="text-corporate-secondary font-medium tracking-wide text-sm">{member.role}</div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-24 bg-corporate-primary relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="container text-center relative z-10">
                         <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Work With Us</h2>
                         <p className="text-xl text-corporate-light/80 mb-10 max-w-2xl mx-auto font-light">
                              Join the hundreds of organizations that have transformed their
                              business with our expertise and support.
                         </p>
                         <div className="flex justify-center gap-6">
                              <Link href="/contact" className="btn bg-corporate-secondary text-corporate-primary hover:bg-white hover:text-corporate-primary px-8 py-3">
                                   Get in Touch
                              </Link>
                              <Link href="/services" className="btn btn-secondary border-corporate-light/20 text-white hover:bg-white hover:text-corporate-primary px-8 py-3">
                                   Our Services
                              </Link>
                         </div>
                    </div>
               </section>
          </>
     )
}

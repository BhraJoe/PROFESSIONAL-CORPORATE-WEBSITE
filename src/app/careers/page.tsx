import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Clock, Briefcase, Users, Globe, Award } from 'lucide-react'
import { getCareers } from '@/lib/cms'

export const metadata: Metadata = {
     title: 'Careers',
     description: 'Join our team and help businesses achieve their full potential.',
}

export default function CareersPage() {
     const careers = getCareers()

     const benefits = [
          { icon: Users, title: 'Collaborative Culture', description: 'Work with talented professionals in a supportive environment.' },
          { icon: Globe, title: 'Global Opportunities', description: 'Work with clients across 30+ countries worldwide.' },
          { icon: Award, title: 'Growth & Development', description: 'Continuous learning and career advancement opportunities.' },
     ]

     return (
          <>
               {/* Hero Section */}
               <section className="pt-32 pb-16 bg-gradient-to-br from-corporate-primary via-corporate-secondary to-corporate-dark">
                    <div className="container">
                         <div className="max-w-3xl">
                              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                   Join Our Team
                              </h1>
                              <p className="text-xl text-white/80">
                                   Be part of a team thats transforming businesses and making a
                                   real impact for clients around the world.
                              </p>
                         </div>
                    </div>
               </section>

               {/* Benefits Section */}
               <section className="section">
                    <div className="container">
                         <div className="text-center mb-12">
                              <h2 className="section-title">Why Work With Us</h2>
                              <p className="section-subtitle mx-auto">
                                   We offer a rewarding career experience with competitive benefits
                                   and opportunities for growth.
                              </p>
                         </div>

                         <div className="grid md:grid-cols-3 gap-6">
                              {benefits.map((benefit, index) => (
                                   <div key={index} className="card text-center">
                                        <div className="w-14 h-14 bg-corporate-light rounded-xl flex items-center justify-center mx-auto mb-4">
                                             <benefit.icon className="w-7 h-7 text-corporate-primary" />
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2 text-corporate-dark">{benefit.title}</h3>
                                        <p className="text-corporate-gray">{benefit.description}</p>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Open Positions */}
               <section className="section bg-corporate-light">
                    <div className="container">
                         <div className="text-center mb-12">
                              <h2 className="section-title">Open Positions</h2>
                              <p className="section-subtitle mx-auto">
                                   Explore our current openings and find your next career opportunity.
                              </p>
                         </div>

                         <div className="max-w-4xl mx-auto space-y-4">
                              {careers.map((job) => (
                                   <div key={job.id} id={job.slug} className="card flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                             <h3 className="text-lg font-semibold text-corporate-dark mb-2">{job.title}</h3>
                                             <div className="flex flex-wrap gap-4 text-sm text-corporate-gray">
                                                  <span className="flex items-center gap-1">
                                                       <Briefcase size={14} />
                                                       {job.department}
                                                  </span>
                                                  <span className="flex items-center gap-1">
                                                       <MapPin size={14} />
                                                       {job.location}
                                                  </span>
                                                  <span className="flex items-center gap-1">
                                                       <Clock size={14} />
                                                       {job.type}
                                                  </span>
                                             </div>
                                        </div>
                                        <Link href={`/contact?job=${job.slug}`} className="btn btn-primary whitespace-nowrap">
                                             Apply Now
                                        </Link>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Application Process */}
               <section className="section">
                    <div className="container">
                         <div className="text-center mb-12">
                              <h2 className="section-title">Our Hiring Process</h2>
                              <p className="section-subtitle mx-auto">
                                   We make our hiring process simple and transparent.
                              </p>
                         </div>

                         <div className="grid md:grid-cols-4 gap-6">
                              {[
                                   { step: '1', title: 'Apply', description: 'Submit your resume and cover letter through our careers page.' },
                                   { step: '2', title: 'Screen', description: 'Our team will review your application and contact qualified candidates.' },
                                   { step: '3', title: 'Interview', description: 'Participate in interviews with our hiring team.' },
                                   { step: '4', title: 'Join Us', description: 'Receive an offer and become part of the Nexus team.' },
                              ].map((item, index) => (
                                   <div key={index} className="text-center">
                                        <div className="w-12 h-12 bg-corporate-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                             {item.step}
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2 text-corporate-dark">{item.title}</h3>
                                        <p className="text-corporate-gray text-sm">{item.description}</p>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="section bg-corporate-light">
                    <div className="container text-center">
                         <h2 className="section-title">Dont See the Right Role?</h2>
                         <p className="section-subtitle mx-auto mb-8">
                              Were always looking for talented individuals. Send us your resume
                              and well keep you in mind for future opportunities.
                         </p>
                         <Link href="/contact" className="btn btn-primary">
                              Submit Your Resume
                         </Link>
                    </div>
               </section>
          </>
     )
}

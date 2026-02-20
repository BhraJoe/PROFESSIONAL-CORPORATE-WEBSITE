import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Briefcase, Cpu, TrendingUp, BarChart, Shield, Target, CheckCircle } from 'lucide-react'
import { getServices, Service } from '@/lib/cms'

export const metadata: Metadata = {
     title: 'Services',
     description: 'Explore our comprehensive business consulting and professional services.',
}

export default function ServicesPage() {
     const services = getServices()

     const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
          Briefcase,
          Cpu,
          TrendingUp,
          BarChart,
          Shield,
          Target,
     }

     return (
          <>
               {/* Hero Section */}
               <section className="relative pt-32 pb-16 bg-gradient-to-br from-corporate-primary via-corporate-secondary to-corporate-dark overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-20">
                         <Image
                              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
                              alt="Business services"
                              fill
                              className="object-cover"
                              priority
                         />
                    </div>
                    <div className="container relative z-10">
                         <div className="max-w-3xl">
                              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                   Our Services
                              </h1>
                              <p className="text-xl text-white/80">
                                   Comprehensive business solutions designed to help your organization
                                   thrive in todays competitive marketplace.
                              </p>
                         </div>
                    </div>
               </section>

               {/* Services Grid */}
               <section className="section">
                    <div className="container">
                         <div className="grid gap-12">
                              {services.map((service: Service, index: number) => {
                                   const IconComponent = iconMap[service.icon] || Briefcase
                                   return (
                                        <div
                                             key={service.id}
                                             id={service.slug}
                                             className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                        >
                                             <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                                  <div className="w-16 h-16 bg-corporate-light rounded-xl flex items-center justify-center mb-6">
                                                       <IconComponent className="w-8 h-8 text-corporate-primary" />
                                                  </div>
                                                  <h2 className="text-2xl md:text-3xl font-bold text-corporate-dark mb-4">
                                                       {service.title}
                                                  </h2>
                                                  <p className="text-lg text-corporate-gray mb-6">
                                                       {service.description}
                                                  </p>
                                                  <ul className="space-y-3 mb-6">
                                                       {service.features.map((feature: string, i: number) => (
                                                            <li key={i} className="flex items-center gap-3">
                                                                 <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                                 <span className="text-corporate-gray">{feature}</span>
                                                            </li>
                                                       ))}
                                                  </ul>
                                                  <Link href="/contact" className="btn btn-primary">
                                                       Request Consultation
                                                  </Link>
                                             </div>
                                             <div className={`bg-gradient-to-br from-corporate-primary to-corporate-secondary rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                                  <div className="aspect-square flex items-center justify-center">
                                                       <IconComponent className="w-32 h-32 text-white/20" />
                                                  </div>
                                             </div>
                                        </div>
                                   )
                              })}
                         </div>
                    </div>
               </section>

               {/* Process Section */}
               <section className="section bg-corporate-light">
                    <div className="container">
                         <div className="text-center mb-12">
                              <h2 className="section-title">Our Approach</h2>
                              <p className="section-subtitle mx-auto">
                                   A proven methodology that delivers measurable results for every client.
                              </p>
                         </div>

                         <div className="grid md:grid-cols-4 gap-6">
                              {[
                                   { step: '01', title: 'Discover', description: 'We analyze your business, challenges and opportunities.' },
                                   { step: '02', title: 'Design', description: 'We develop tailored strategies and solutions.' },
                                   { step: '03', title: 'Implement', description: 'We execute with precision and expertise.' },
                                   { step: '04', title: 'Optimize', description: 'We continuously improve and measure results.' },
                              ].map((item, index) => (
                                   <div key={index} className="card text-center">
                                        <div className="text-4xl font-bold text-corporate-accent mb-3">{item.step}</div>
                                        <h3 className="text-lg font-semibold mb-2 text-corporate-dark">{item.title}</h3>
                                        <p className="text-corporate-gray">{item.description}</p>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="section">
                    <div className="container text-center">
                         <h2 className="section-title">Ready to Get Started?</h2>
                         <p className="section-subtitle mx-auto mb-8">
                              Schedule a consultation with our experts to discuss your business challenges
                              and discover how we can help you achieve your goals.
                         </p>
                         <Link href="/contact" className="btn btn-primary">
                              Contact Us Today
                         </Link>
                    </div>
               </section>
          </>
     )
}

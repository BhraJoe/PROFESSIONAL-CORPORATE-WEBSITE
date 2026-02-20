'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
     })
     const [isSubmitted, setIsSubmitted] = useState(false)

     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault()
          // In production, this would send the data to a backend
          console.log('Form submitted:', formData)
          setIsSubmitted(true)
     }

     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
          setFormData({ ...formData, [e.target.name]: e.target.value })
     }

     return (
          <>
               {/* Hero Section */}
               <section className="pt-32 pb-20 bg-corporate-dark relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-corporate-dark via-corporate-primary to-corporate-dark opacity-90"></div>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                    <div className="container relative z-10">
                         <div className="max-w-3xl mx-auto text-center">
                              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                                   Contact Us
                              </h1>
                              <p className="text-xl text-corporate-light/80 font-light">
                                   Have a question or want to discuss a project? We'd love to hear from you.
                              </p>
                         </div>
                    </div>
               </section>

               {/* Contact Section */}
               <section className="section bg-gray-50">
                    <div className="container">
                         <div className="grid lg:grid-cols-2 gap-12 items-start">
                              {/* Contact Form */}
                              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                                   <div className="mb-8">
                                        <h2 className="text-2xl font-heading font-bold text-corporate-primary mb-2">Send Us a Message</h2>
                                        <p className="text-corporate-gray">Fill out the form below and we'll get back to you shortly.</p>
                                   </div>

                                   {isSubmitted ? (
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in">
                                             <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                             <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                                             <p className="text-green-700 mb-6">
                                                  Thank you for reaching out. We will get back to you within 24-48 hours.
                                             </p>
                                             <button
                                                  onClick={() => setIsSubmitted(false)}
                                                  className="btn btn-secondary text-sm"
                                             >
                                                  Send another message
                                             </button>
                                        </div>
                                   ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                             <div className="grid md:grid-cols-2 gap-6">
                                                  <div>
                                                       <label htmlFor="name" className="block text-sm font-medium text-corporate-gray mb-2">
                                                            Full Name *
                                                       </label>
                                                       <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            required
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            className="input bg-gray-50 focus:bg-white"
                                                            placeholder="John Doe"
                                                       />
                                                  </div>
                                                  <div>
                                                       <label htmlFor="email" className="block text-sm font-medium text-corporate-gray mb-2">
                                                            Email Address *
                                                       </label>
                                                       <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            required
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className="input bg-gray-50 focus:bg-white"
                                                            placeholder="john@company.com"
                                                       />
                                                  </div>
                                             </div>

                                             <div className="grid md:grid-cols-2 gap-6">
                                                  <div>
                                                       <label htmlFor="phone" className="block text-sm font-medium text-corporate-gray mb-2">
                                                            Phone Number
                                                       </label>
                                                       <input
                                                            type="tel"
                                                            id="phone"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            className="input bg-gray-50 focus:bg-white"
                                                            placeholder="+1 (555) 000-0000"
                                                       />
                                                  </div>
                                                  <div>
                                                       <label htmlFor="company" className="block text-sm font-medium text-corporate-gray mb-2">
                                                            Company
                                                       </label>
                                                       <input
                                                            type="text"
                                                            id="company"
                                                            name="company"
                                                            value={formData.company}
                                                            onChange={handleChange}
                                                            className="input bg-gray-50 focus:bg-white"
                                                            placeholder="Your Company"
                                                       />
                                                  </div>
                                             </div>

                                             <div>
                                                  <label htmlFor="service" className="block text-sm font-medium text-corporate-gray mb-2">
                                                       Service Interested In
                                                  </label>
                                                  <select
                                                       id="service"
                                                       name="service"
                                                       value={formData.service}
                                                       onChange={handleChange}
                                                       className="input bg-gray-50 focus:bg-white appearance-none"
                                                  >
                                                       <option value="">Select a service</option>
                                                       <option value="consulting">Business Consulting</option>
                                                       <option value="digital">Digital Transformation</option>
                                                       <option value="financial">Financial Advisory</option>
                                                       <option value="market">Market Analysis</option>
                                                       <option value="other">Other</option>
                                                  </select>
                                             </div>

                                             <div>
                                                  <label htmlFor="message" className="block text-sm font-medium text-corporate-gray mb-2">
                                                       Message *
                                                  </label>
                                                  <textarea
                                                       id="message"
                                                       name="message"
                                                       required
                                                       rows={5}
                                                       value={formData.message}
                                                       onChange={handleChange}
                                                       className="input bg-gray-50 focus:bg-white resize-none"
                                                       placeholder="Tell us about your project or inquiry..."
                                                  ></textarea>
                                             </div>

                                             <button
                                                  type="submit"
                                                  className="btn btn-primary w-full"
                                             >
                                                  <Send size={18} className="mr-2" />
                                                  Send Message
                                             </button>
                                        </form>
                                   )}
                              </div>

                              {/* Contact Info */}
                              <div className="space-y-8 lg:pl-12">
                                   <div>
                                        <h2 className="text-3xl font-heading font-bold text-corporate-primary mb-6">Get in Touch</h2>
                                        <p className="text-corporate-gray text-lg leading-relaxed">
                                             We are here to answer any questions you may have about our services.
                                             Reach out to us and we'll respond as soon as we can.
                                        </p>
                                   </div>

                                   <div className="space-y-6">
                                        <div className="flex items-start gap-6 group">
                                             <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                                  <MapPin className="w-7 h-7 text-corporate-secondary" />
                                             </div>
                                             <div>
                                                  <h3 className="font-bold text-corporate-primary mb-1 text-lg">Our Office</h3>
                                                  <p className="text-corporate-gray leading-relaxed">
                                                       123 Business Avenue, Suite 500<br />
                                                       New York, NY 10001
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="flex items-start gap-6 group">
                                             <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                                  <Phone className="w-7 h-7 text-corporate-secondary" />
                                             </div>
                                             <div>
                                                  <h3 className="font-bold text-corporate-primary mb-1 text-lg">Phone</h3>
                                                  <p className="text-corporate-gray leading-relaxed">
                                                       +1 (555) 123-4567<br />
                                                       Mon - Fri, 9am - 6pm EST
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="flex items-start gap-6 group">
                                             <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                                  <Mail className="w-7 h-7 text-corporate-secondary" />
                                             </div>
                                             <div>
                                                  <h3 className="font-bold text-corporate-primary mb-1 text-lg">Email</h3>
                                                  <p className="text-corporate-gray leading-relaxed">
                                                       contact@nexus-corporate.com<br />
                                                       info@nexus-corporate.com
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="flex items-start gap-6 group">
                                             <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                                  <Clock className="w-7 h-7 text-corporate-secondary" />
                                             </div>
                                             <div>
                                                  <h3 className="font-bold text-corporate-primary mb-1 text-lg">Business Hours</h3>
                                                  <p className="text-corporate-gray leading-relaxed">
                                                       Monday - Friday: 9:00 AM - 6:00 PM<br />
                                                       Saturday - Sunday: Closed
                                                  </p>
                                             </div>
                                        </div>
                                   </div>

                                   {/* Map Placeholder */}
                                   <div className="bg-corporate-primary rounded-2xl h-64 flex items-center justify-center relative overflow-hidden group">
                                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                                        <div className="text-center relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
                                             <MapPin className="w-12 h-12 text-corporate-secondary mx-auto mb-3" />
                                             <p className="text-white/80 font-medium tracking-wide">Map Integration Available</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react'

const currentYear = new Date().getFullYear()

const quickLinks = [
     { name: 'Home', href: '/' },
     { name: 'About Us', href: '/about' },
     { name: 'Services', href: '/services' },
     { name: 'Blog', href: '/blog' },
     { name: 'Careers', href: '/careers' },
     { name: 'Contact', href: '/contact' },
]

const services = [
     { name: 'Business Consulting', href: '/services#consulting' },
     { name: 'Digital Transformation', href: '/services#digital' },
     { name: 'Financial Advisory', href: '/services#financial' },
     { name: 'Market Analysis', href: '/services#market' },
     { name: 'Risk Management', href: '/services#risk' },
     { name: 'Strategic Planning', href: '/services#strategy' },
]

const socialLinks = [
     { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
     { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
     { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
     { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
]

export default function Footer() {
     return (
          <footer className="bg-corporate-primary text-white border-t-4 border-corporate-secondary">
               {/* Main Footer */}
               <div className="container py-16 lg:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                         {/* Company Info */}
                         <div className="space-y-8">
                              <Link href="/" className="flex items-center gap-3">
                                   <div className="w-12 h-12 bg-white/5 border border-corporate-secondary/20 rounded-xl flex items-center justify-center">
                                        <span className="text-corporate-secondary font-heading font-bold text-2xl">N</span>
                                   </div>
                                   <div className="flex flex-col">
                                        <span className="font-heading font-bold text-xl leading-none tracking-wide text-white">NEXUS</span>
                                        <span className="text-xs tracking-[0.2em] text-corporate-secondary uppercase font-medium">Corporate</span>
                                   </div>
                              </Link>
                              <p className="text-corporate-light/70 leading-relaxed">
                                   Delivering premium business solutions and strategic consulting to help enterprises achieve sustainable growth and competitive advantage.
                              </p>
                              <div className="space-y-4">
                                   <div className="flex items-start gap-3 text-corporate-light/70">
                                        <MapPin size={20} className="text-corporate-secondary shrink-0 mt-1" />
                                        <span>123 Business Avenue, Suite 500<br />New York, NY 10001</span>
                                   </div>
                                   <div className="flex items-center gap-3 text-corporate-light/70">
                                        <Phone size={20} className="text-corporate-secondary shrink-0" />
                                        <span>+1 (555) 123-4567</span>
                                   </div>
                                   <div className="flex items-center gap-3 text-corporate-light/70">
                                        <Mail size={20} className="text-corporate-secondary shrink-0" />
                                        <span>contact@nexus-corporate.com</span>
                                   </div>
                              </div>
                         </div>

                         {/* Quick Links */}
                         <div>
                              <h4 className="font-heading font-semibold text-xl mb-8 text-white">Quick Links</h4>
                              <ul className="space-y-4">
                                   {quickLinks.map((link) => (
                                        <li key={link.name}>
                                             <Link
                                                  href={link.href}
                                                  className="text-corporate-light/70 hover:text-corporate-secondary transition-colors flex items-center gap-2 group"
                                             >
                                                  <span className="w-1.5 h-1.5 rounded-full bg-corporate-secondary/50 group-hover:bg-corporate-secondary transition-colors"></span>
                                                  {link.name}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         {/* Services */}
                         <div>
                              <h4 className="font-heading font-semibold text-xl mb-8 text-white">Our Services</h4>
                              <ul className="space-y-4">
                                   {services.map((service) => (
                                        <li key={service.name}>
                                             <Link
                                                  href={service.href}
                                                  className="text-corporate-light/70 hover:text-corporate-secondary transition-colors flex items-center gap-2 group"
                                             >
                                                  <span className="w-1.5 h-1.5 rounded-full bg-corporate-secondary/50 group-hover:bg-corporate-secondary transition-colors"></span>
                                                  {service.name}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         {/* Newsletter */}
                         <div>
                              <h4 className="font-heading font-semibold text-xl mb-8 text-white">Newsletter</h4>
                              <p className="text-corporate-light/70 mb-6">
                                   Subscribe to our newsletter for the latest business insights and unique perspectives.
                              </p>
                              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                   <div className="relative">
                                        <input
                                             type="email"
                                             placeholder="Enter your email"
                                             className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-corporate-secondary focus:ring-1 focus:ring-corporate-secondary outline-none transition-all text-white placeholder:text-white/30"
                                        />
                                   </div>
                                   <button
                                        type="submit"
                                        className="w-full btn btn-secondary hover:bg-corporate-secondary hover:text-corporate-primary border-corporate-secondary text-corporate-secondary"
                                   >
                                        Subscribe
                                   </button>
                              </form>
                              {/* Social Links */}
                              <div className="mt-8 pt-8 border-t border-white/10">
                                   <div className="flex gap-4">
                                        {socialLinks.map((social) => (
                                             <a
                                                  key={social.name}
                                                  href={social.href}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:bg-corporate-secondary hover:text-corporate-primary hover:border-corporate-secondary transition-all duration-300"
                                                  aria-label={social.name}
                                             >
                                                  <social.icon size={18} />
                                             </a>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Bottom Bar */}
               <div className="border-t border-white/10 bg-corporate-dark/30">
                    <div className="container py-8">
                         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                              <p className="text-corporate-light/50 text-sm">
                                   © {currentYear} Nexus Corporate. All rights reserved.
                              </p>
                              <div className="flex gap-8 text-sm">
                                   <Link href="/privacy" className="text-corporate-light/50 hover:text-corporate-secondary transition-colors">
                                        Privacy Policy
                                   </Link>
                                   <Link href="/terms" className="text-corporate-light/50 hover:text-corporate-secondary transition-colors">
                                        Terms of Service
                                   </Link>
                                   <Link href="/cookies" className="text-corporate-light/50 hover:text-corporate-secondary transition-colors">
                                        Cookie Policy
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     )
}

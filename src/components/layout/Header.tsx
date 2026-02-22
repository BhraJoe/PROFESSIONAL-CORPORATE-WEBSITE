'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Home, User, Briefcase, BookOpen, Users, Mail, ArrowUpRight } from 'lucide-react'
import { clsx } from 'clsx'

const navigation = [
     { name: 'Home', href: '/', icon: Home },
     { name: 'About', href: '/about', icon: User },
     { name: 'Services', href: '/services', icon: Briefcase },
     { name: 'Blog', href: '/blog', icon: BookOpen },
     { name: 'Careers', href: '/careers', icon: Users },
     { name: 'Contact', href: '/contact', icon: Mail },
]

export default function Header() {
     const [isScrolled, setIsScrolled] = useState(false)
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 20)
          }
          window.addEventListener('scroll', handleScroll, { passive: true })
          return () => window.removeEventListener('scroll', handleScroll)
     }, [])

     // Prevent body scroll when mobile menu is open
     useEffect(() => {
          if (isMobileMenuOpen) {
               document.body.style.overflow = 'hidden'
          } else {
               document.body.style.overflow = 'unset'
          }
          return () => {
               document.body.style.overflow = 'unset'
          }
     }, [isMobileMenuOpen])

     // Close menu on escape key
     useEffect(() => {
          const handleEscape = (e: KeyboardEvent) => {
               if (e.key === 'Escape') setIsMobileMenuOpen(false)
          }
          window.addEventListener('keydown', handleEscape)
          return () => window.removeEventListener('keydown', handleEscape)
     }, [])

     return (
          <>
               <header
                    className={clsx(
                         'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
                         // Mobile: always white bg. Desktop: transparent when not scrolled
                         'bg-white shadow-lg shadow-black/5 py-3',
                         !isScrolled && 'lg:bg-transparent lg:shadow-none lg:py-5'
                    )}
               >
                    <nav className="container px-4">
                         <div className="flex items-center justify-between">
                              {/* Logo */}
                              <Link href="/" className="flex items-center gap-2 group">
                                   <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 bg-corporate-primary">
                                        <span className="font-heading font-bold text-xl text-corporate-secondary">N</span>
                                   </div>
                                   <div className="flex flex-col">
                                        <span className="font-heading font-bold text-lg md:text-xl leading-none text-corporate-primary">
                                             NEXUS
                                        </span>
                                        <span className="text-[0.55rem] md:text-[0.65rem] tracking-[0.15em] md:tracking-[0.2em] font-medium text-corporate-secondary uppercase">
                                             Corporate
                                        </span>
                                   </div>
                              </Link>

                              {/* Desktop Navigation */}
                              <div className="hidden lg:flex items-center gap-8">
                                   {navigation.slice(0, 5).map((item) => (
                                        <Link
                                             key={item.name}
                                             href={item.href}
                                             className={clsx(
                                                  'text-sm font-medium tracking-wide transition-all duration-300 hover:text-corporate-secondary relative group',
                                                  isScrolled ? 'text-corporate-gray' : 'text-white/90'
                                             )}
                                        >
                                             {item.name}
                                             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-corporate-secondary transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                   ))}
                              </div>

                              {/* CTA Button */}
                              <div className="hidden lg:block">
                                   <Link
                                        href="/contact"
                                        className={clsx(
                                             'btn px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300',
                                             isScrolled
                                                  ? 'btn-primary'
                                                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-corporate-primary'
                                        )}
                                   >
                                        Get Started
                                   </Link>
                              </div>

                              {/* Mobile Menu Button */}
                              <button
                                   onClick={() => setIsMobileMenuOpen(true)}
                                   className="lg:hidden p-2 rounded-lg transition-all duration-300 flex flex-col gap-1.5 text-corporate-primary"
                                   aria-label="Open menu"
                              >
                                   <span className={clsx(
                                        'w-6 h-0.5 bg-current transition-all duration-300',
                                        isMobileMenuOpen && 'rotate-45 translate-y-2'
                                   )} />
                                   <span className={clsx(
                                        'w-6 h-0.5 bg-current transition-all duration-300',
                                        isMobileMenuOpen && 'opacity-0'
                                   )} />
                                   <span className={clsx(
                                        'w-6 h-0.5 bg-current transition-all duration-300',
                                        isMobileMenuOpen && '-rotate-45 -translate-y-2'
                                   )} />
                              </button>
                         </div>
                    </nav>
               </header>

               {/* Mobile Full-Screen Menu */}
               <div
                    className={clsx(
                         'fixed inset-0 z-[90] lg:hidden transition-all duration-500',
                         isMobileMenuOpen
                              ? 'opacity-100 pointer-events-auto'
                              : 'opacity-0 pointer-events-none'
                    )}
               >
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-corporate-primary">
                         {/* Decorative circles */}
                         <div className="absolute top-20 -left-20 w-64 h-64 bg-corporate-secondary/10 rounded-full blur-3xl"></div>
                         <div className="absolute bottom-20 -right-20 w-80 h-80 bg-corporate-secondary/5 rounded-full blur-3xl"></div>
                    </div>

                    {/* Menu Content */}
                    <div className="relative z-10 h-full overflow-y-auto">
                         {/* Menu Header */}
                         <div className="flex items-center justify-between px-6 py-5">
                              <span className="font-heading font-bold text-xl text-white">NEXUS</span>
                              <button
                                   onClick={() => setIsMobileMenuOpen(false)}
                                   className="p-3 rounded-full text-white/80 hover:bg-white/10 transition-colors"
                                   aria-label="Close menu"
                              >
                                   <X size={28} strokeWidth={2} />
                              </button>
                         </div>

                         {/* Navigation Links */}
                         <div className="px-4 py-8">
                              <nav className="space-y-3">
                                   {navigation.map((item, index) => {
                                        const Icon = item.icon
                                        return (
                                             <Link
                                                  key={item.name}
                                                  href={item.href}
                                                  onClick={() => setIsMobileMenuOpen(false)}
                                                  className="flex items-center gap-5 px-6 py-5 rounded-2xl transition-all duration-500 text-white hover:bg-white/10"
                                                  style={{
                                                       animationDelay: isMobileMenuOpen ? `${150 + index * 80}ms` : '0ms',
                                                       opacity: isMobileMenuOpen ? 1 : 0,
                                                       transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                                                  }}
                                             >
                                                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                                       <Icon size={24} />
                                                  </div>
                                                  <span className="font-heading font-semibold text-xl">{item.name}</span>
                                                  <ArrowUpRight
                                                       size={20}
                                                       className="ml-auto text-white/40"
                                                  />
                                             </Link>
                                        )
                                   })}
                              </nav>
                         </div>

                         {/* CTA Button */}
                         <div className="px-6 pb-12">
                              <Link
                                   href="/contact"
                                   onClick={() => setIsMobileMenuOpen(false)}
                                   className="flex items-center justify-center gap-3 w-full py-5 px-6 rounded-2xl font-heading font-semibold text-lg transition-all duration-500 bg-corporate-secondary text-corporate-primary"
                              >
                                   <span>Get Started</span>
                                   <ArrowUpRight size={22} />
                              </Link>
                         </div>

                         {/* Contact Info */}
                         <div className="px-6 pb-8 space-y-3 text-white/60 text-sm">
                              <p>contact@nexuscorporate.com</p>
                              <p>+1 (555) 123-4567</p>
                         </div>
                    </div>
               </div>

               {/* Spacer for fixed header */}
               <div className="h-[60px] lg:h-[88px]" />
          </>
     )
}

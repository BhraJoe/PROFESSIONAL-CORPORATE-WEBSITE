'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { clsx } from 'clsx'

const navigation = [
     { name: 'Home', href: '/' },
     { name: 'About', href: '/about' },
     { name: 'Services', href: '/services' },
     { name: 'Blog', href: '/blog' },
     { name: 'Careers', href: '/careers' },
     { name: 'Contact', href: '/contact' },
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

     return (
          <header
               className={clsx(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled
                         ? 'glass-panel py-3'
                         : 'bg-transparent py-6'
               )}
          >
               <nav className="container">
                    <div className="flex items-center justify-between">
                         {/* Logo */}
                         <Link href="/" className="flex items-center gap-2 group">
                              <div className="w-10 h-10 bg-corporate-primary rounded-tr-xl rounded-bl-xl border border-corporate-secondary/20 flex items-center justify-center transition-transform group-hover:scale-105">
                                   <span className="text-corporate-secondary font-heading font-bold text-2xl">N</span>
                              </div>
                              <div className="flex flex-col">
                                   <span className={clsx(
                                        'font-heading font-bold text-xl leading-none transition-colors',
                                        isScrolled ? 'text-corporate-primary' : 'text-white'
                                   )}>
                                        NEXUS
                                   </span>
                                   <span className={clsx(
                                        'text-[0.65rem] tracking-[0.2em] font-medium transition-colors uppercase',
                                        isScrolled ? 'text-corporate-secondary' : 'text-white/80'
                                   )}>
                                        Corporate
                                   </span>
                              </div>
                         </Link>

                         {/* Desktop Navigation */}
                         <div className="hidden lg:flex items-center gap-8">
                              {navigation.map((item) => (
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
                                        'btn btn-primary px-6 py-2.5 text-sm',
                                        !isScrolled && 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-corporate-primary'
                                   )}
                              >
                                   Get Started
                              </Link>
                         </div>

                         {/* Mobile Menu Button */}
                         <button
                              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                              className={clsx(
                                   'lg:hidden p-2 rounded-lg transition-colors hover:bg-white/10',
                                   isScrolled ? 'text-corporate-primary' : 'text-white'
                              )}
                              aria-label="Toggle menu"
                         >
                              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                         </button>
                    </div>

                    {/* Mobile Menu */}
                    <div
                         className={clsx(
                              'lg:hidden absolute top-full left-0 right-0 glass-panel border-t border-white/10 transition-all duration-300 overflow-hidden',
                              isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                         )}
                    >
                         <div className="container py-6 space-y-4">
                              {navigation.map((item) => (
                                   <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block py-3 px-4 text-corporate-primary font-medium hover:bg-corporate-light/50 hover:text-corporate-secondary rounded-lg transition-colors border-l-2 border-transparent hover:border-corporate-secondary"
                                   >
                                        {item.name}
                                   </Link>
                              ))}
                              <Link
                                   href="/contact"
                                   onClick={() => setIsMobileMenuOpen(false)}
                                   className="block w-full btn btn-primary text-center mt-6"
                              >
                                   Get Started
                              </Link>
                         </div>
                    </div>
               </nav>
          </header>
     )
}

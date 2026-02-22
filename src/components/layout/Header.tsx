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
               </nav>

               {/* Mobile Menu */}
               <div
                    className={clsx(
                         'lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out',
                         isMobileMenuOpen
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 -translate-y-4 pointer-events-none'
                    )}
               >
                    <div className={clsx(
                         'border-t shadow-2xl',
                         isScrolled
                              ? 'bg-white border-gray-200'
                              : 'bg-corporate-primary border-white/10'
                    )}>
                         <div className="container py-6 space-y-2">
                              {navigation.map((item) => (
                                   <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={clsx(
                                             'block py-3 px-4 font-medium rounded-lg transition-all duration-200',
                                             isScrolled
                                                  ? 'text-corporate-primary hover:bg-corporate-light hover:text-corporate-secondary'
                                                  : 'text-white hover:bg-white/10 hover:text-corporate-secondary'
                                        )}
                                   >
                                        {item.name}
                                   </Link>
                              ))}
                              <Link
                                   href="/contact"
                                   onClick={() => setIsMobileMenuOpen(false)}
                                   className={clsx(
                                        'block w-full btn text-center mt-6',
                                        isScrolled
                                             ? 'btn-primary'
                                             : 'bg-corporate-secondary text-corporate-primary hover:bg-corporate-accent'
                                   )}
                              >
                                   Get Started
                              </Link>
                         </div>
                    </div>
               </div>
          </header>
     )
}

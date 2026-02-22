'use client'

import { useState, useEffect, useRef } from 'react'
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
     const menuRef = useRef<HTMLDivElement>(null)

     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 10)
          }
          window.addEventListener('scroll', handleScroll, { passive: true })
          return () => window.removeEventListener('scroll', handleScroll)
     }, [])

     // Close menu when clicking outside
     useEffect(() => {
          const handleClickOutside = (event: MouseEvent) => {
               if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                    setIsMobileMenuOpen(false)
               }
          }
          if (isMobileMenuOpen) {
               document.addEventListener('mousedown', handleClickOutside)
          }
          return () => document.removeEventListener('mousedown', handleClickOutside)
     }, [isMobileMenuOpen])

     // Prevent body scroll when menu is open
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
          <>
               <header
                    ref={menuRef}
                    className={clsx(
                         'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                         isScrolled
                              ? 'bg-white shadow-md'
                              : 'bg-white/95 backdrop-blur-sm'
                    )}
               >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="flex items-center justify-between h-16">
                              {/* Logo */}
                              <Link href="/" className="flex items-center gap-2">
                                   <div className="w-8 h-8 bg-corporate-primary rounded-lg flex items-center justify-center">
                                        <span className="text-corporate-secondary font-bold text-lg">N</span>
                                   </div>
                                   <span className="font-heading font-bold text-lg text-corporate-primary">
                                        NEXUS
                                   </span>
                              </Link>

                              {/* Desktop Navigation - Hidden on mobile */}
                              <nav className="hidden md:flex items-center gap-6">
                                   {navigation.map((item) => (
                                        <Link
                                             key={item.name}
                                             href={item.href}
                                             className="text-sm font-medium text-corporate-gray hover:text-corporate-primary transition-colors"
                                        >
                                             {item.name}
                                        </Link>
                                   ))}
                              </nav>

                              {/* Desktop CTA - Hidden on mobile */}
                              <div className="hidden md:block">
                                   <Link
                                        href="/contact"
                                        className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-corporate-primary rounded-lg hover:bg-corporate-secondary transition-colors"
                                   >
                                        Get Started
                                   </Link>
                              </div>

                              {/* Mobile Menu Button */}
                              <button
                                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                   className="md:hidden p-2 rounded-lg text-corporate-primary hover:bg-gray-100 transition-colors"
                                   aria-label="Toggle menu"
                              >
                                   {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                              </button>
                         </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {isMobileMenuOpen && (
                         <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                              <div className="px-4 py-4 space-y-2">
                                   {navigation.map((item) => (
                                        <Link
                                             key={item.name}
                                             href={item.href}
                                             onClick={() => setIsMobileMenuOpen(false)}
                                             className="block px-4 py-3 text-base font-medium text-corporate-gray hover:text-corporate-primary hover:bg-gray-50 rounded-lg transition-colors"
                                        >
                                             {item.name}
                                        </Link>
                                   ))}
                                   <div className="pt-4">
                                        <Link
                                             href="/contact"
                                             onClick={() => setIsMobileMenuOpen(false)}
                                             className="block w-full text-center px-5 py-3 text-base font-medium text-white bg-corporate-primary rounded-lg hover:bg-corporate-secondary transition-colors"
                                        >
                                             Get Started
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    )}
               </header>

               {/* Spacer */}
               <div className="h-16" />
          </>
     )
}

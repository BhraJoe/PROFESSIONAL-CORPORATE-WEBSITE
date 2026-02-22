'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight, Home, User, Briefcase, BookOpen, Users, Mail } from 'lucide-react'
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
                         'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                         isScrolled
                              ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
                              : 'bg-transparent py-5'
                    )}
               >
                    <nav className="container">
                         <div className="flex items-center justify-between">
                              {/* Logo */}
                              <Link href="/" className="flex items-center gap-2 group">
                                   <div className={clsx(
                                        'w-10 h-10 rounded-tr-xl rounded-bl-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-105',
                                        isScrolled
                                             ? 'bg-corporate-primary border-corporate-secondary/20'
                                             : 'bg-white/10 backdrop-blur-sm border-white/20'
                                   )}>
                                        <span className={clsx(
                                             'font-heading font-bold text-2xl',
                                             isScrolled ? 'text-corporate-secondary' : 'text-white'
                                        )}>N</span>
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
                                                  ? 'btn-primary shadow-lg shadow-corporate-primary/25 hover:shadow-xl hover:scale-105'
                                                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-corporate-primary'
                                        )}
                                   >
                                        Get Started
                                   </Link>
                              </div>

                              {/* Mobile Menu Button */}
                              <button
                                   onClick={() => setIsMobileMenuOpen(true)}
                                   className={clsx(
                                        'lg:hidden p-2.5 rounded-full transition-all duration-300',
                                        isScrolled
                                             ? 'text-corporate-primary hover:bg-corporate-primary/5'
                                             : 'text-white hover:bg-white/10'
                                   )}
                                   aria-label="Open menu"
                              >
                                   <Menu size={24} strokeWidth={2} />
                              </button>
                         </div>
                    </nav>
               </header>

               {/* Mobile Menu Overlay */}
               <div
                    className={clsx(
                         'fixed inset-0 z-[60] lg:hidden transition-all duration-500',
                         isMobileMenuOpen
                              ? 'opacity-100 pointer-events-auto'
                              : 'opacity-0 pointer-events-none'
                    )}
               >
                    {/* Backdrop */}
                    <div
                         className={clsx(
                              'absolute inset-0 bg-corporate-primary/60 backdrop-blur-sm transition-opacity duration-300',
                              isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
                         )}
                         onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div
                         className={clsx(
                              'absolute top-0 right-0 h-full w-[320px] max-w-[85vw] bg-white shadow-2xl transition-transform duration-500 ease-out',
                              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                         )}
                    >
                         {/* Menu Header */}
                         <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                              <span className="font-heading font-bold text-lg text-corporate-primary">Menu</span>
                              <button
                                   onClick={() => setIsMobileMenuOpen(false)}
                                   className="p-2 rounded-full text-corporate-gray hover:bg-gray-100 transition-colors"
                                   aria-label="Close menu"
                              >
                                   <X size={22} strokeWidth={2} />
                              </button>
                         </div>

                         {/* Menu Content */}
                         <div className="flex flex-col h-full overflow-y-auto">
                              <div className="flex-1 px-4 py-6">
                                   {/* Navigation Links */}
                                   <nav className="space-y-2">
                                        {navigation.map((item, index) => {
                                             const Icon = item.icon
                                             return (
                                                  <Link
                                                       key={item.name}
                                                       href={item.href}
                                                       onClick={() => setIsMobileMenuOpen(false)}
                                                       className={clsx(
                                                            'flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group',
                                                            'text-corporate-gray hover:bg-corporate-primary hover:text-white',
                                                            isMobileMenuOpen && 'animate-slide-in'
                                                       )}
                                                       style={{
                                                            animationDelay: isMobileMenuOpen ? `${index * 75}ms` : '0ms',
                                                            opacity: isMobileMenuOpen ? 1 : 0,
                                                            transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)'
                                                       }}
                                                  >
                                                       <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                                                       <span className="font-medium text-base">{item.name}</span>
                                                       <ChevronRight
                                                            size={18}
                                                            className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                                       />
                                                  </Link>
                                             )
                                        })}
                                   </nav>
                              </div>

                              {/* Menu Footer */}
                              <div className="px-6 py-6 border-t border-gray-100 bg-gray-50">
                                   <p className="text-sm text-corporate-gray mb-4">Ready to get started?</p>
                                   <Link
                                        href="/contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-corporate-primary text-white rounded-xl font-medium transition-all duration-300 hover:bg-corporate-secondary hover:shadow-lg hover:shadow-corporate-secondary/25"
                                   >
                                        <span>Get Started</span>
                                        <ChevronRight size={18} />
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Spacer for fixed header */}
               <div className="h-[72px] lg:h-[88px]" />
          </>
     )
}

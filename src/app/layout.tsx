import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
     title: {
          default: 'Nexus Corporate | Strategic Business Solutions',
          template: '%s | Nexus Corporate',
     },
     description: 'Nexus Corporate delivers premium business solutions, strategic consulting, and innovative services to help enterprises achieve sustainable growth and competitive advantage.',
     keywords: ['corporate', 'business solutions', 'consulting', 'strategy', 'enterprise', 'services'],
     authors: [{ name: 'Nexus Corporate' }],
     openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://nexus-corporate.com',
          siteName: 'Nexus Corporate',
          title: 'Nexus Corporate | Strategic Business Solutions',
          description: 'Premium business solutions and strategic consulting for modern enterprises.',
          images: [
               {
                    url: '/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Nexus Corporate',
               },
          ],
     },
     twitter: {
          card: 'summary_large_image',
          title: 'Nexus Corporate | Strategic Business Solutions',
          description: 'Premium business solutions and strategic consulting for modern enterprises.',
     },
     robots: {
          index: true,
          follow: true,
     },
}

export default function RootLayout({
     children,
}: {
     children: React.ReactNode
}) {
     return (
          <html lang="en">
               <body className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-1">
                         {children}
                    </main>
                    <Footer />
               </body>
          </html>
     )
}

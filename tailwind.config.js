/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
          './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
          './src/components/**/*.{js,ts,jsx,tsx,mdx}',
          './src/app/**/*.{js,ts,jsx,tsx,mdx}',
     ],
     theme: {
          extend: {
               colors: {
                    corporate: {
                         primary: '#0A192F', // Deep Navy
                         secondary: '#D4AF37', // Gold
                         accent: '#C5A059', // Muted Gold
                         light: '#F8FAFC', // Slate 50
                         dark: '#020617', // Almost Black
                         gray: '#64748b', // Slate 500
                    },
               },
               fontFamily: {
                    sans: ['Inter', 'system-ui', 'sans-serif'],
                    heading: ['"Playfair Display"', 'Georgia', 'serif'],
               },
               container: {
                    center: true,
                    padding: {
                         DEFAULT: '1rem',
                         sm: '2rem',
                         lg: '4rem',
                         xl: '5rem',
                    },
               },
               animation: {
                    'fade-in': 'fadeIn 0.5s ease-in-out',
                    'slide-up': 'slideUp 0.5s ease-out',
               },
               keyframes: {
                    fadeIn: {
                         '0%': { opacity: '0' },
                         '100%': { opacity: '1' },
                    },
                    slideUp: {
                         '0%': { opacity: '0', transform: 'translateY(20px)' },
                         '100%': { opacity: '1', transform: 'translateY(0)' },
                    },
               },
          },
     },
     plugins: [],
}

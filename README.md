# Nexus Corporate Website

A professional corporate website with a built-in Content Management System (CMS), built with Next.js 14, React, and Tailwind CSS.

## Features

### Website Pages
- **Home** - Hero section, services overview, stats, latest blog posts, CTA
- **About Us** - Company story, mission/vision/values, leadership team
- **Services** - Detailed services with features and approach
- **Blog** - CMS-powered blog with categories and newsletter signup
- **Careers** - Job listings with application process
- **Contact** - Contact form with validation and success states

### CMS Features
- **Admin Dashboard** at `/admin`
- Manage **Blog Posts** - Add, edit, delete posts with SEO metadata
- Manage **Services** - Add, edit, delete services with features
- Manage **Career Listings** - Add, edit, delete job postings
- Data persisted in localStorage for demo purposes

### Performance Optimizations
- Image optimization with Next.js Image component
- Responsive image sizes with srcset
- Lazy loading for below-the-fold content
- CSS and JavaScript optimization
- Font optimization with Google Fonts

### SEO
- Semantic HTML structure
- Meta tags and Open Graph data
- SEO fields in CMS content

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Access
- Website: http://localhost:3000
- Admin Dashboard: http://localhost:3000/admin

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter
- **Data Storage**: localStorage (demo CMS)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── about/page.tsx     # About page
│   ├── services/page.tsx  # Services page
│   ├── blog/page.tsx     # Blog page
│   ├── careers/page.tsx  # Careers page
│   ├── contact/page.tsx  # Contact page
│   └── admin/page.tsx    # CMS Dashboard
├── components/
│   └── layout/
│       ├── Header.tsx     # Sticky navigation
│       └── Footer.tsx     # Site footer
└── lib/
    └── cms.ts             # CMS data functions
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the corporate color palette:
- `corporate.primary` - Main brand color
- `corporate.secondary` - Secondary color
- `corporate.accent` - Accent/CTA color
- `corporate.light` - Light background
- `corporate.dark` - Dark text color
- `corporate.gray` - Gray text color

### Company Information
Update the company information in:
- Footer (`src/components/layout/Footer.tsx`)
- CMS default data (`src/lib/cms.ts`)

## License

MIT

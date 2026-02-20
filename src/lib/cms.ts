// CMS Types
export interface BlogPost {
     id: string
     slug: string
     title: string
     excerpt: string
     content: string
     author: string
     date?: string
     publishedAt: string
     image: string
     category: string
     metaTitle?: string
     metaDescription?: string
}

export interface Service {
     id: string
     slug: string
     title: string
     description: string
     icon: string
     features: string[]
     metaTitle?: string
     metaDescription?: string
}

export interface Career {
     id: string
     slug: string
     title: string
     department: string
     location: string
     type: string
     description: string
     requirements: string[]
     postedDate?: string
     postedAt?: string
}

// Mock Data - Blog Posts
const blogPosts: BlogPost[] = [
     {
          id: '1',
          slug: 'digital-transformation-strategies',
          title: 'Digital Transformation Strategies for 2024',
          excerpt: 'Discover the key strategies that leading enterprises are using to drive digital transformation and stay competitive.',
          content: 'Full content here...',
          author: 'Sarah Johnson',
          date: '2024-01-15',
          publishedAt: '2024-01-15',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
          category: 'Technology'
     },
     {
          id: '2',
          slug: 'ai-business-optimization',
          title: 'How AI is Revolutionizing Business Operations',
          excerpt: 'Learn how artificial intelligence is transforming business processes and creating new opportunities for growth.',
          content: 'Full content here...',
          author: 'Michael Chen',
          date: '2024-01-10',
          publishedAt: '2024-01-10',
          image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
          category: 'Innovation'
     },
     {
          id: '3',
          slug: 'sustainable-business-practices',
          title: 'Sustainable Business Practices for Long-Term Success',
          excerpt: 'Explore how sustainable practices can drive both environmental and economic benefits for your organization.',
          content: 'Full content here...',
          author: 'Emma Williams',
          date: '2024-01-05',
          publishedAt: '2024-01-05',
          image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
          category: 'Sustainability'
     }
]

// Mock Data - Services
const services: Service[] = [
     {
          id: '1',
          slug: 'digital-transformation',
          title: 'Digital Transformation',
          description: 'Transform your business operations with cutting-edge digital solutions that drive efficiency and growth.',
          icon: 'Cpu',
          features: [
               'Digital strategy development',
               'Process automation',
               'Technology implementation',
               'Change management'
          ]
     },
     {
          id: '2',
          slug: 'business-consulting',
          title: 'Business Consulting',
          description: 'Expert guidance to help you navigate complex business challenges and achieve your strategic goals.',
          icon: 'Briefcase',
          features: [
               'Strategic planning',
               'Operational efficiency',
               'Market analysis',
               'Growth strategies'
          ]
     },
     {
          id: '3',
          slug: 'data-analytics',
          title: 'Data Analytics',
          description: 'Unlock the power of your data with advanced analytics and insights that drive informed decision-making.',
          icon: 'BarChart',
          features: [
               'Data visualization',
               'Predictive analytics',
               'Business intelligence',
               'Performance metrics'
          ]
     },
     {
          id: '4',
          slug: 'risk-management',
          title: 'Risk Management',
          description: 'Comprehensive risk assessment and mitigation strategies to protect your business assets.',
          icon: 'Shield',
          features: [
               'Risk assessment',
               'Compliance monitoring',
               'Security protocols',
               'Crisis management'
          ]
     },
     {
          id: '5',
          slug: 'growth-strategy',
          title: 'Growth Strategy',
          description: 'Proven strategies to accelerate growth and expand your market presence effectively.',
          icon: 'TrendingUp',
          features: [
               'Market expansion',
               'Revenue optimization',
               'Customer acquisition',
               'Competitive analysis'
          ]
     },
     {
          id: '6',
          slug: 'leadership-development',
          title: 'Leadership Development',
          description: 'Develop strong leaders who can drive innovation and inspire high-performing teams.',
          icon: 'Target',
          features: [
               'Executive coaching',
               'Team building',
               'Leadership training',
               'Succession planning'
          ]
     }
]

// Mock Data - Careers
const careers: Career[] = [
     {
          id: '1',
          slug: 'senior-consultant',
          title: 'Senior Business Consultant',
          department: 'Consulting',
          location: 'New York, NY',
          type: 'Full-time',
          description: 'Join our consulting team to help clients transform their businesses.',
          requirements: [
               '5+ years of consulting experience',
               'Strong analytical skills',
               'Excellent communication skills',
               'MBA preferred'
          ],
          postedDate: '2024-01-20'
     },
     {
          id: '2',
          slug: 'data-analyst',
          title: 'Data Analyst',
          department: 'Analytics',
          location: 'Remote',
          type: 'Full-time',
          description: 'Help our clients make data-driven decisions with advanced analytics.',
          requirements: [
               '3+ years of data analysis experience',
               'Proficiency in SQL and Python',
               'Experience with visualization tools',
               'Strong problem-solving skills'
          ],
          postedDate: '2024-01-18'
     },
     {
          id: '3',
          slug: 'project-manager',
          title: 'Project Manager',
          department: 'Operations',
          location: 'Chicago, IL',
          type: 'Full-time',
          description: 'Lead cross-functional teams to deliver complex client projects.',
          requirements: [
               '4+ years of project management experience',
               'PMP certification preferred',
               'Agile methodology experience',
               'Strong organizational skills'
          ],
          postedDate: '2024-01-15'
     }
]

// CMS Functions - Blog Posts
export function getBlogPosts(): BlogPost[] {
     return blogPosts
}

export function saveBlogPost(post: Omit<BlogPost, 'id'>): BlogPost {
     const newPost: BlogPost = {
          ...post,
          id: String(Date.now())
     }
     blogPosts.push(newPost)
     return newPost
}

export function deleteBlogPost(id: string): boolean {
     const index = blogPosts.findIndex(post => post.id === id)
     if (index > -1) {
          blogPosts.splice(index, 1)
          return true
     }
     return false
}

// CMS Functions - Services
export function getServices(): Service[] {
     return services
}

export function saveService(service: Omit<Service, 'id'>): Service {
     const newService: Service = {
          ...service,
          id: String(Date.now())
     }
     services.push(newService)
     return newService
}

export function deleteService(id: string): boolean {
     const index = services.findIndex(service => service.id === id)
     if (index > -1) {
          services.splice(index, 1)
          return true
     }
     return false
}

// CMS Functions - Careers
export function getCareers(): Career[] {
     return careers
}

export function saveCareer(career: Omit<Career, 'id'>): Career {
     const newCareer: Career = {
          ...career,
          id: String(Date.now())
     }
     careers.push(newCareer)
     return newCareer
}

export function deleteCareer(id: string): boolean {
     const index = careers.findIndex(career => career.id === id)
     if (index > -1) {
          careers.splice(index, 1)
          return true
     }
     return false
}

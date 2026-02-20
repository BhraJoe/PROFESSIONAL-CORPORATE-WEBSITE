'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
     LayoutDashboard,
     FileText,
     Briefcase,
     Users,
     Settings,
     Plus,
     Edit,
     Trash2,
     Eye,
     Save,
     X,
     CheckCircle
} from 'lucide-react'
import { getBlogPosts, saveBlogPost, deleteBlogPost, getServices, saveService, deleteService, getCareers, saveCareer, deleteCareer, BlogPost, Service, Career } from '@/lib/cms'

type Tab = 'dashboard' | 'blog' | 'services' | 'careers'

export default function AdminPage() {
     const [activeTab, setActiveTab] = useState<Tab>('dashboard')
     const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
     const [services, setServices] = useState<Service[]>([])
     const [careers, setCareers] = useState<Career[]>([])
     const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
     const [editingService, setEditingService] = useState<Service | null>(null)
     const [editingCareer, setEditingCareer] = useState<Career | null>(null)
     const [showSuccess, setShowSuccess] = useState(false)
     const [successMessage, setSuccessMessage] = useState('')

     useEffect(() => {
          setBlogPosts(getBlogPosts())
          setServices(getServices())
          setCareers(getCareers())
     }, [])

     const handleSavePost = (post: BlogPost) => {
          saveBlogPost(post)
          setBlogPosts(getBlogPosts())
          setEditingPost(null)
          showSuccessMessage('Blog post saved successfully!')
     }

     const handleDeletePost = (id: string) => {
          if (confirm('Are you sure you want to delete this blog post?')) {
               deleteBlogPost(id)
               setBlogPosts(getBlogPosts())
               showSuccessMessage('Blog post deleted successfully!')
          }
     }

     const handleSaveService = (service: Service) => {
          saveService(service)
          setServices(getServices())
          setEditingService(null)
          showSuccessMessage('Service saved successfully!')
     }

     const handleDeleteService = (id: string) => {
          if (confirm('Are you sure you want to delete this service?')) {
               deleteService(id)
               setServices(getServices())
               showSuccessMessage('Service deleted successfully!')
          }
     }

     const handleSaveCareer = (career: Career) => {
          saveCareer(career)
          setCareers(getCareers())
          setEditingCareer(null)
          showSuccessMessage('Career listing saved successfully!')
     }

     const handleDeleteCareer = (id: string) => {
          if (confirm('Are you sure you want to delete this career listing?')) {
               deleteCareer(id)
               setCareers(getCareers())
               showSuccessMessage('Career listing deleted successfully!')
          }
     }

     const showSuccessMessage = (message: string) => {
          setSuccessMessage(message)
          setShowSuccess(true)
          setTimeout(() => setShowSuccess(false), 3000)
     }

     const tabs = [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { id: 'blog', label: 'Blog Posts', icon: FileText },
          { id: 'services', label: 'Services', icon: Briefcase },
          { id: 'careers', label: 'Careers', icon: Users },
     ]

     return (
          <div className="min-h-screen bg-gray-50">
               {/* Success Toast */}
               {showSuccess && (
                    <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50">
                         <CheckCircle size={20} />
                         {successMessage}
                    </div>
               )}

               <div className="flex">
                    {/* Sidebar */}
                    <aside className="w-64 bg-corporate-dark text-white min-h-screen fixed">
                         <div className="p-6">
                              <Link href="/" className="flex items-center gap-2 mb-8">
                                   <div className="w-10 h-10 bg-corporate-accent rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">N</span>
                                   </div>
                                   <span className="font-bold text-xl">Nexus Admin</span>
                              </Link>

                              <nav className="space-y-2">
                                   {tabs.map((tab) => (
                                        <button
                                             key={tab.id}
                                             onClick={() => setActiveTab(tab.id as Tab)}
                                             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === tab.id
                                                       ? 'bg-corporate-accent text-white'
                                                       : 'text-gray-300 hover:bg-gray-800'
                                                  }`}
                                        >
                                             <tab.icon size={20} />
                                             {tab.label}
                                        </button>
                                   ))}
                              </nav>
                         </div>

                         <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
                              <Link href="/" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white transition-colors">
                                   <Eye size={20} />
                                   View Website
                              </Link>
                         </div>
                    </aside>

                    {/* Main Content */}
                    <main className="ml-64 flex-1 p-8">
                         {/* Dashboard Tab */}
                         {activeTab === 'dashboard' && (
                              <div>
                                   <h1 className="text-2xl font-bold text-corporate-dark mb-8">Dashboard</h1>

                                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        <div className="bg-white rounded-xl p-6 shadow-sm">
                                             <div className="flex items-center justify-between mb-4">
                                                  <h3 className="text-gray-500 text-sm font-medium">Blog Posts</h3>
                                                  <FileText className="w-5 h-5 text-corporate-accent" />
                                             </div>
                                             <div className="text-3xl font-bold text-corporate-dark">{blogPosts.length}</div>
                                        </div>
                                        <div className="bg-white rounded-xl p-6 shadow-sm">
                                             <div className="flex items-center justify-between mb-4">
                                                  <h3 className="text-gray-500 text-sm font-medium">Services</h3>
                                                  <Briefcase className="w-5 h-5 text-corporate-accent" />
                                             </div>
                                             <div className="text-3xl font-bold text-corporate-dark">{services.length}</div>
                                        </div>
                                        <div className="bg-white rounded-xl p-6 shadow-sm">
                                             <div className="flex items-center justify-between mb-4">
                                                  <h3 className="text-gray-500 text-sm font-medium">Career Listings</h3>
                                                  <Users className="w-5 h-5 text-corporate-accent" />
                                             </div>
                                             <div className="text-3xl font-bold text-corporate-dark">{careers.length}</div>
                                        </div>
                                   </div>

                                   <div className="bg-white rounded-xl p-6 shadow-sm">
                                        <h2 className="text-lg font-semibold text-corporate-dark mb-4">Quick Actions</h2>
                                        <div className="flex flex-wrap gap-3">
                                             <button
                                                  onClick={() => setEditingPost({ id: '', title: '', slug: '', excerpt: '', content: '', author: '', category: '', image: '', publishedAt: '', metaTitle: '', metaDescription: '' })}
                                                  className="btn btn-primary"
                                             >
                                                  <Plus size={18} className="mr-2" />
                                                  New Blog Post
                                             </button>
                                             <button
                                                  onClick={() => setEditingService({ id: '', title: '', slug: '', description: '', icon: 'Briefcase', features: [], metaTitle: '', metaDescription: '' })}
                                                  className="btn btn-secondary"
                                             >
                                                  <Plus size={18} className="mr-2" />
                                                  New Service
                                             </button>
                                             <button
                                                  onClick={() => setEditingCareer({ id: '', title: '', slug: '', department: '', location: '', type: '', description: '', requirements: [], postedAt: '' })}
                                                  className="btn btn-secondary"
                                             >
                                                  <Plus size={18} className="mr-2" />
                                                  New Career
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         )}

                         {/* Blog Posts Tab */}
                         {activeTab === 'blog' && (
                              <div>
                                   <div className="flex items-center justify-between mb-8">
                                        <h1 className="text-2xl font-bold text-corporate-dark">Blog Posts</h1>
                                        <button
                                             onClick={() => setEditingPost({ id: '', title: '', slug: '', excerpt: '', content: '', author: '', category: '', image: '', publishedAt: '', metaTitle: '', metaDescription: '' })}
                                             className="btn btn-primary"
                                        >
                                             <Plus size={18} className="mr-2" />
                                             Add Post
                                        </button>
                                   </div>

                                   {editingPost ? (
                                        <BlogPostForm
                                             post={editingPost}
                                             onSave={handleSavePost}
                                             onCancel={() => setEditingPost(null)}
                                        />
                                   ) : (
                                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                             <table className="w-full">
                                                  <thead className="bg-gray-50">
                                                       <tr>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Title</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Category</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Author</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                                                            <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
                                                       </tr>
                                                  </thead>
                                                  <tbody className="divide-y divide-gray-200">
                                                       {blogPosts.map((post) => (
                                                            <tr key={post.id} className="hover:bg-gray-50">
                                                                 <td className="px-6 py-4 text-sm text-corporate-dark font-medium">{post.title}</td>
                                                                 <td className="px-6 py-4 text-sm text-gray-500">{post.category}</td>
                                                                 <td className="px-6 py-4 text-sm text-gray-500">{post.author}</td>
                                                                 <td className="px-6 py-4 text-sm text-gray-500">{post.publishedAt}</td>
                                                                 <td className="px-6 py-4 text-right">
                                                                      <button
                                                                           onClick={() => setEditingPost(post)}
                                                                           className="text-corporate-accent hover:text-corporate-secondary mr-3"
                                                                      >
                                                                           <Edit size={18} />
                                                                      </button>
                                                                      <button
                                                                           onClick={() => handleDeletePost(post.id)}
                                                                           className="text-red-500 hover:text-red-700"
                                                                      >
                                                                           <Trash2 size={18} />
                                                                      </button>
                                                                 </td>
                                                            </tr>
                                                       ))}
                                                  </tbody>
                                             </table>
                                        </div>
                                   )}
                              </div>
                         )}

                         {/* Services Tab */}
                         {activeTab === 'services' && (
                              <div>
                                   <div className="flex items-center justify-between mb-8">
                                        <h1 className="text-2xl font-bold text-corporate-dark">Services</h1>
                                        <button
                                             onClick={() => setEditingService({ id: '', title: '', slug: '', description: '', icon: 'Briefcase', features: [], metaTitle: '', metaDescription: '' })}
                                             className="btn btn-primary"
                                        >
                                             <Plus size={18} className="mr-2" />
                                             Add Service
                                        </button>
                                   </div>

                                   {editingService ? (
                                        <ServiceForm
                                             service={editingService}
                                             onSave={handleSaveService}
                                             onCancel={() => setEditingService(null)}
                                        />
                                   ) : (
                                        <div className="grid gap-4">
                                             {services.map((service) => (
                                                  <div key={service.id} className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between">
                                                       <div>
                                                            <h3 className="text-lg font-semibold text-corporate-dark">{service.title}</h3>
                                                            <p className="text-corporate-gray text-sm mt-1">{service.description.substring(0, 100)}...</p>
                                                       </div>
                                                       <div className="flex gap-2">
                                                            <button
                                                                 onClick={() => setEditingService(service)}
                                                                 className="p-2 text-corporate-accent hover:bg-corporate-light rounded-lg"
                                                            >
                                                                 <Edit size={18} />
                                                            </button>
                                                            <button
                                                                 onClick={() => handleDeleteService(service.id)}
                                                                 className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                                                            >
                                                                 <Trash2 size={18} />
                                                            </button>
                                                       </div>
                                                  </div>
                                             ))}
                                        </div>
                                   )}
                              </div>
                         )}

                         {/* Careers Tab */}
                         {activeTab === 'careers' && (
                              <div>
                                   <div className="flex items-center justify-between mb-8">
                                        <h1 className="text-2xl font-bold text-corporate-dark">Career Listings</h1>
                                        <button
                                             onClick={() => setEditingCareer({ id: '', title: '', slug: '', department: '', location: '', type: '', description: '', requirements: [], postedAt: '' })}
                                             className="btn btn-primary"
                                        >
                                             <Plus size={18} className="mr-2" />
                                             Add Job
                                        </button>
                                   </div>

                                   {editingCareer ? (
                                        <CareerForm
                                             career={editingCareer}
                                             onSave={handleSaveCareer}
                                             onCancel={() => setEditingCareer(null)}
                                        />
                                   ) : (
                                        <div className="grid gap-4">
                                             {careers.map((career) => (
                                                  <div key={career.id} className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between">
                                                       <div>
                                                            <h3 className="text-lg font-semibold text-corporate-dark">{career.title}</h3>
                                                            <div className="flex gap-4 mt-2 text-sm text-corporate-gray">
                                                                 <span>{career.department}</span>
                                                                 <span>{career.location}</span>
                                                                 <span>{career.type}</span>
                                                            </div>
                                                       </div>
                                                       <div className="flex gap-2">
                                                            <button
                                                                 onClick={() => setEditingCareer(career)}
                                                                 className="p-2 text-corporate-accent hover:bg-corporate-light rounded-lg"
                                                            >
                                                                 <Edit size={18} />
                                                            </button>
                                                            <button
                                                                 onClick={() => handleDeleteCareer(career.id)}
                                                                 className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                                                            >
                                                                 <Trash2 size={18} />
                                                            </button>
                                                       </div>
                                                  </div>
                                             ))}
                                        </div>
                                   )}
                              </div>
                         )}
                    </main>
               </div>
          </div>
     )
}

// Blog Post Form Component
function BlogPostForm({ post, onSave, onCancel }: { post: BlogPost; onSave: (post: BlogPost) => void; onCancel: () => void }) {
     const [formData, setFormData] = useState(post)

     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault()
          formData.slug = formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
          onSave(formData)
     }

     return (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm space-y-4">
               <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">{post.id ? 'Edit' : 'New'} Blog Post</h2>
                    <button type="button" onClick={onCancel} className="p-2 hover:bg-gray-100 rounded-lg">
                         <X size={20} />
                    </button>
               </div>

               <div className="grid md:grid-cols-2 gap-4">
                    <div>
                         <label className="block text-sm font-medium text-corporate-dark mb-2">Title</label>
                         <input
                              type="text"
                              value={formData.title}
                              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                              className="input"
                              required
                         />
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-corporate-dark mb-2">Category</label>
                         <select
                              value={formData.category}
                              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                              className="input"
                         >
                              <option value="">Select category</option>
                              <option value="Strategy">Strategy</option>
                              <option value="Technology">Technology</option>
                              <option value="Leadership">Leadership</option>
                              <option value="Finance">Finance</option>
                         </select>
                    </div>
               </div>

               <div>
                    <label className="block text-sm font-medium text-corporate-dark mb-2">Excerpt</label>
                    <textarea
                         value={formData.excerpt}
                         onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                         className="input"
                         rows={2}
                    />
               </div>

               <div>
                    <label className="block text-sm font-medium text-corporate-dark mb-2">Content</label>
                    <textarea
                         value={formData.content}
                         onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                         className="input"
                         rows={6}
                    />
               </div>

               <div className="grid md:grid-cols-2 gap-4">
                    <div>
                         <label className="block text-sm font-medium text-corporate-dark mb-2">Author</label>
                         <input
                              type="text"
                              value={formData.author}
                              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                              className="input"
                         />
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-corporate-dark mb-2">Meta Title (SEO)</label>
                         <input
                              type="text"
                              value={formData.metaTitle}
                              onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                              className="input"
                         />
                    </div>
               </div>

               <div>
                    <label className="block text-sm font-medium text-corporate-dark mb-2">Meta Description (SEO)</label>
                    <textarea
                         value={formData.metaDescription}
                         onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                         className="input"
                         rows={2}
                    />
               </div>

               <div className="flex justify-end gap-3 pt-4">
                    <button type="button" onClick={onCancel} className="btn btn-secondary">
                         Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                         <Save size={18} className="mr-2" />
                         Save Post
                    </button>
               </div>
          </form>
     )
}

// Service Form Component
function ServiceForm({ service, onSave, onCancel }: { service: Service; onSave: (service: Service) => void; onCancel: () => void }) {
     const [formData, setFormData] = useState(service)
     const [featuresText, setFeaturesText] = useState(service.features.join('\n'))

     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault()
          formData.features = featuresText.split('\n').filter(f => f.trim())
          formData.slug = formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
          onSave(formData)
     }

     return (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm space-y-4">
               <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">{service.id ? 'Edit' : 'New'} Service</h2>
                    <button type="button" onClick={onCancel} className="p-2 hover:bg-gray-100 rounded-lg">
                         <X size={20} />
                    </button>
               </div>

               <div className="grid md:grid-cols-2 gap-4">
                    <div>
                         <label className="block text-sm font-medium text-corporate-dark mb-2">Title</label>
                         <input
                              type="text"
                              value={formData.title}
                              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                              className="input"
                              required
                         />
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-corporate-dark mb-2">Icon</label>
                         <select
                              value={formData.icon}
                              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                              className="input"
                         >
                              <option value="Briefcase">Briefcase</option>
                              <option value="Cpu">Cpu</option>
                              <option value="TrendingUp">TrendingUp</option>
                              <option value="BarChart">BarChart</option>
                              <option value="Shield">Shield</option>
                              <option value="Target">Target</option>
                         </select>
                    </div>
               </div>

               <div>
                    <label className="block text-sm font-medium text-corporate-dark mb-2">Description</label>
                    <textarea
                         value={formData.description}
                         onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                         className="input"
                         rows={3}
                    />
               </div>

               <div>
                    <label className="block text-sm font-medium text-corporate-dark mb-2">Features (one per line)</label>
                    <textarea
                         value={featuresText}
                         onChange={(e) => setFeaturesText(e.target.value)}
                         className="input"
                         rows={4}
                         placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                    />
               </div>

               <div>
                    <label className="block text-sm font-medium text-corporate-dark mb-2">Meta Title (SEO)</label>
                    <input
                         type="text"
                         value={formData.metaTitle}
                         onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                         className="input"
                    />
               </div>

               <div>
                    <label className="block text-sm font-medium text-corporate-dark mb-2">Meta Description (SEO)</label>
                    <textarea
                         value={formData.metaDescription}
                         onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                         className="input"
                         rows={2}
                    />
               </div>

               <div className="flex justify-end gap-3 pt-4">
                    <button type="button" onClick={onCancel} className="btn btn-secondary">
                         Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                         <Save size={18} className="mr-2" />
                         Save Service
                    </button>
               </div>
          </form>
     )
}

// Career Form Component
function CareerForm({ career, onSave, onCancel }: { career: Career; onSave: (career: Career) => void; onCancel: () => void }) {
     const [formData, setFormData] = useState(career)
     const [requirementsText, setRequirementsText] = useState(career.requirements.join('\n'))

     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault()
          formData.requirements = requirementsText.split('\n').filter(r => r.trim())
          formData.slug = formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
          onSave(formData)
     }

     return (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm space-y-4">
               <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">{career.id ? 'Edit' : 'New'} Career</h2>
                    <button type="button" onClick={onCancel} className="p-2 hover:bg-gray-100 rounded-lg">
                         <X size={20} />
                    </button>
               </div>

               <div className="grid md:grid-cols-2 gap-4">
                    <div>
                         <label className="block text-sm font-medium text-corporate-dark mb-2">Job Title</label>
                         <input
                              type="text"
                              value={formData.title}
                              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                              className="input"
                              required
                         />
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-corporate-dark mb-2">Department</label>
                         <input
                              type="text"
                              value={formData.department}
                              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                              className="input"
                         />
                    </div>
               </div>

               <div className="grid md:grid-cols-2 gap-4">
                    <div>
                         <label className="block text-sm font-medium text-corporate-dark mb-2">Location</label>
                         <input
                              type="text"
                              value={formData.location}
                              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                              className="input"
                         />
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-corporate-dark mb-2">Employment Type</label>
                         <select
                              value={formData.type}
                              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                              className="input"
                         >
                              <option value="">Select type</option>
                              <option value="Full-time">Full-time</option>
                              <option value="Part-time">Part-time</option>
                              <option value="Contract">Contract</option>
                              <option value="Internship">Internship</option>
                         </select>
                    </div>
               </div>

               <div>
                    <label className="block text-sm font-medium text-corporate-dark mb-2">Description</label>
                    <textarea
                         value={formData.description}
                         onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                         className="input"
                         rows={3}
                    />
               </div>

               <div>
                    <label className="block text-sm font-medium text-corporate-dark mb-2">Requirements (one per line)</label>
                    <textarea
                         value={requirementsText}
                         onChange={(e) => setRequirementsText(e.target.value)}
                         className="input"
                         rows={4}
                         placeholder="Requirement 1&#10;Requirement 2&#10;Requirement 3"
                    />
               </div>

               <div className="flex justify-end gap-3 pt-4">
                    <button type="button" onClick={onCancel} className="btn btn-secondary">
                         Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                         <Save size={18} className="mr-2" />
                         Save Career
                    </button>
               </div>
          </form>
     )
}

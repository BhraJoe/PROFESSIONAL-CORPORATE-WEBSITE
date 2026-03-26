import { Metadata } from "next";

export const metadata: Metadata = {
     title: "Contact Us",
     description: "Get in touch with CorporateNexus to schedule a consultation for your enterprise digital transformation.",
};

export default function ContactPage() {
     return (
          <div className="contact-page">
               {/* HERO SECTION */}
               <section className="page-hero">
                    <div className="hero-overlay"></div>
                    <div className="container page-hero-content">
                         <h1>Let's <span>Talk</span></h1>
                         <p className="subtitle">Ready to elevate your digital presence? Reach out today.</p>
                    </div>
               </section>

               {/* CONTACT SECTION */}
               <section className="section">
                    <div className="container">
                         <div className="contact-grid">
                              <div className="contact-info reveal">
                                   <h2>Global Headquarters</h2>
                                   <p>
                                        <strong>CorporateNexus Inc.</strong><br />
                                        100 Enterprise Way, Suite 500<br />
                                        San Francisco, CA 94105<br />
                                        United States
                                   </p>

                                   <div className="contact-details">
                                        <p><strong>Email:</strong> <a href="mailto:hello@corporatenexus.com">hello@corporatenexus.com</a></p>
                                        <p><strong>Phone:</strong> +1 (800) 555-0199</p>
                                        <p><strong>Hours:</strong> Mon-Fri, 9am - 6pm PST</p>
                                   </div>
                              </div>

                              <div className="contact-form-wrapper reveal">
                                   <form className="contact-form">
                                        <div className="form-group border-bottom">
                                             <label htmlFor="name">Full Name</label>
                                             <input type="text" id="name" required placeholder="Jane Doe" />
                                        </div>

                                        <div className="form-group border-bottom">
                                             <label htmlFor="email">Work Email</label>
                                             <input type="email" id="email" required placeholder="jane@company.com" />
                                        </div>

                                        <div className="form-group border-bottom">
                                             <label htmlFor="inquiry">How can we help?</label>
                                             <select id="inquiry" required>
                                                  <option value="">Select a topic</option>
                                                  <option value="cloud">Cloud Migration</option>
                                                  <option value="headless">Headless CMS</option>
                                                  <option value="seo">SEO Optimization</option>
                                                  <option value="other">Other Inquiry</option>
                                             </select>
                                        </div>

                                        <div className="form-group border-bottom">
                                             <label htmlFor="message">Message</label>
                                             <textarea id="message" rows={4} required placeholder="Tell us about your project..."></textarea>
                                        </div>

                                        <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                                   </form>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
}

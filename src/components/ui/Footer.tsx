import Link from "next/link";

export default function Footer() {
     return (
          <footer className="footer">
               <div className="footer-container">
                    <div className="footer-brand">
                         <Link href="/" className="logo">
                              Corporate<span>Nexus</span>
                         </Link>
                         <p>Delivering enterprise-grade digital transformations since 2015.</p>
                    </div>

                    <div className="footer-links">
                         <h4>Company</h4>
                         <Link href="/about">About Us</Link>
                         <Link href="/careers">Careers</Link>
                         <Link href="/contact">Contact</Link>
                    </div>

                    <div className="footer-links">
                         <h4>Services</h4>
                         <Link href="/services#cloud">Cloud Migration</Link>
                         <Link href="/services#headless">Headless Architecture</Link>
                         <Link href="/services#seo">Technical SEO</Link>
                    </div>

                    <div className="footer-links">
                         <h4>Legal</h4>
                         <Link href="/privacy">Privacy Policy</Link>
                         <Link href="/terms">Terms & Conditions</Link>
                    </div>
               </div>
               <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} CorporateNexus. All rights reserved.</p>
               </div>
          </footer>
     );
}

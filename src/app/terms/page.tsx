import { Metadata } from "next";

export const metadata: Metadata = {
     title: "Terms & Conditions",
     description: "Terms and conditions for CorporateNexus website.",
};

export default function TermsPage() {
     return (
          <div className="legal-page">
               {/* HERO SECTION */}
               <section className="page-hero">
                    <div className="hero-overlay"></div>
                    <div className="container page-hero-content">
                         <h1>Terms & <span>Conditions</span></h1>
                         <p className="subtitle">The rules and guidelines for using our services.</p>
                    </div>
               </section>

               {/* CONTENT SECTION */}
               <section className="section">
                    <div className="container">
                         <div className="legal-content reveal">
                              <h2>1. Acceptance of Terms</h2>
                              <p>By accessing the CorporateNexus platform, you agree to comply with and be bound by these terms.</p>

                              <h2>2. Intellectual Property</h2>
                              <p>All content, branding, and architectural designs provided on this site are the exclusive property of CorporateNexus.</p>

                              <h2>3. Services & Uptime</h2>
                              <p>While we guarantee 99.99% uptime for paid SLA clients, this public marketing site is provided "as is" without warranty.</p>

                              <h2>4. Limitation of Liability</h2>
                              <p>CorporateNexus shall not be liable for any indirect or consequential damages arising from the use of our services.</p>
                         </div>
                    </div>
               </section>
          </div>
     );
}

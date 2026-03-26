import { Metadata } from "next";

export const metadata: Metadata = {
     title: "Privacy Policy",
     description: "Privacy policy for CorporateNexus website and digital services.",
};

export default function PrivacyPage() {
     return (
          <div className="legal-page">
               {/* HERO SECTION */}
               <section className="page-hero">
                    <div className="hero-overlay"></div>
                    <div className="container page-hero-content">
                         <h1>Privacy <span>Policy</span></h1>
                         <p className="subtitle">How we protect and handle your data.</p>
                    </div>
               </section>

               {/* CONTENT SECTION */}
               <section className="section">
                    <div className="container">
                         <div className="legal-content reveal">
                              <h2>1. Introduction</h2>
                              <p>At CorporateNexus, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information.</p>

                              <h2>2. Data Collection</h2>
                              <p>We collect information that you provide directly to us through forms, such as your name, email address, and inquiry details.</p>

                              <h2>3. Data Usage</h2>
                              <p>We use your data solely for the purpose of responding to your inquiries and providing the requested enterprise services.</p>

                              <h2>4. Security</h2>
                              <p>We implement strict security measures including HTTPS, encryption-at-rest, and role-based access control to protect your data.</p>
                         </div>
                    </div>
               </section>
          </div>
     );
}

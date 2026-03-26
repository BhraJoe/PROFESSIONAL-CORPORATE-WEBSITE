import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content container reveal">
          <h1>Modern Corporate <span>Architecture</span> that Scales</h1>
          <p>We deliver blazing fast, responsive, and SEO-optimized digital experiences for enterprise brands.</p>
          <div className="hero-cta">
            <Link href="/services" className="btn btn-primary">Our Solutions</Link>
            <Link href="/contact" className="btn btn-outline">Consultation</Link>
          </div>
        </div>
        <div className="hero-image-grid reveal container">
          <div className="img-wrapper">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
              alt="Corporate Office"
              width={800}
              height={600}
              priority
              className="optimized-img rounded-left"
            />
          </div>
          <div className="img-wrapper hidden-mobile">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
              alt="Team Meeting"
              width={800}
              height={600}
              className="optimized-img"
            />
          </div>
          <div className="img-wrapper hidden-tablet">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
              alt="Business Strategy"
              width={800}
              height={600}
              className="optimized-img rounded-right"
            />
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION GRID */}
      <section className="section core-values bg-surface">
        <div className="container">
          <div className="section-header reveal">
            <h2>Why CorporateNexus?</h2>
            <p>We build with performance, security, and scalability strictly in mind.</p>
          </div>
          <div className="grid-3">
            <div className="card reveal">
              <h3>⚡ Uncompromised Speed</h3>
              <p>Achieve 100/100 Core Web Vitals with our optimized edge-rendered architecture.</p>
            </div>
            <div className="card reveal">
              <h3>📱 Mobile-First Design</h3>
              <p>Every pixel is meticulously crafted to be fully responsive for every device breakpoint.</p>
            </div>
            <div className="card reveal">
              <h3>🔍 Advanced SEO</h3>
              <p>JSON-LD Schema, automatic sitemaps, and optimized metadata to outrank competitors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SCOPED CSS FOR THIS PAGE */}

    </div>
  );
}

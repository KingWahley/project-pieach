import { AboutSection } from "./home/about-section";
import { assets, heroImages, navItems, news } from "./home/data";
import { BlogSection } from "./home/blog-section";
import { ClientsSection } from "./home/clients-section";
import { CtaSection } from "./home/cta-section";
import { Footer } from "./home/footer";
import { Header } from "./home/header";
import { HeroSection } from "./home/hero-section";
import { InnovationSection } from "./home/innovation-section";
import { RevealObserver } from "./home/reveal-observer";
import { ServicesSection } from "./home/services-section";
import { SmoothScroll } from "./home/smooth-scroll";
import { SplineScene } from "./home/spline-scene";

export default function HomePage() {
  return (
    <div className="page-shell" style={{ overflow: "visible" }}>
      <SmoothScroll />
      <RevealObserver />

      <section className="preloader" aria-hidden="true">
        <div className="preloader__container" />
      </section>

      <Header navItems={navItems} headerLogo={assets.headerLogo} />

      <main>
        <HeroSection
          heroImages={heroImages}
          repeatedMarquee={[0, 1, 2]}
          splineBackground={<SplineScene />}
        />
        <AboutSection />
        <ServicesSection />
        <InnovationSection />
        <ClientsSection />
        <BlogSection news={news} />
        <CtaSection />
      </main>

      <Footer footerLogo={assets.footerLogo} />
    </div>
  );
}

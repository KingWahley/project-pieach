"use client";

import { useEffect, useMemo, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AboutSection } from "./home/about-section";
import { heroImages, stats, innovations, news, usefulLinks, navItems, assets } from "./home/data";
import { Footer } from "./home/footer";
import { Header } from "./home/header";
import { HeroSection } from "./home/hero-section";
import { InnovationSection } from "./home/innovation-section";
import { BlogSection } from "./home/blog-section";
import { NewsletterModal } from "./home/newsletter-modal";
import { ServicesSection } from "./home/services-section";
import { CtaSection } from "./home/cta-section";

export default function HomePage({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [footerAnimation, setFooterAnimation] = useState(null);

  const repeatedMarquee = useMemo(() => Array.from({ length: 3 }), []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical', 
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);



  useEffect(() => {
    if (isMenuOpen || isModalOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen, isModalOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch(assets.lottieUrl)
      .then((response) => response.json())
      .then((data) => setFooterAnimation(data))
      .catch(() => setFooterAnimation(null));
  }, []);

  return (
    <div className="page-shell" style={{ overflow: "visible" }}>
      <section className={`preloader ${isLoading ? "" : "preloader--hide"}`}>
        <div className="preloader__container" />
      </section>

      <Header
        isMenuOpen={isMenuOpen}
        navItems={navItems}
        headerLogo={assets.headerLogo}
        mobileLogo={assets.mobileLogo}
        onToggleMenu={() => setIsMenuOpen((value) => !value)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />

      <main>
        <HeroSection
          heroImages={heroImages}
          repeatedMarquee={repeatedMarquee}
          splineBackground={children}
        />
        <AboutSection />
        <ServicesSection />
        <InnovationSection />
        <BlogSection news={news} />
        <CtaSection />
      </main>

      <Footer
        footerAnimation={footerAnimation}
        footerLogo={assets.footerLogo}
        encLogo={assets.encLogo}
        usefulLinks={usefulLinks}
        arrowIcon={assets.arrowIcon}
        onOpenModal={() => setIsModalOpen(true)}
      />

      <NewsletterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

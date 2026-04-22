"use client";

import { useEffect, useMemo, useState } from "react";
import { AboutSection } from "./home/about-section";
import { heroImages, stats, innovations, news, usefulLinks, navItems, assets } from "./home/data";
import { Footer } from "./home/footer";
import { Header } from "./home/header";
import { HeroSection } from "./home/hero-section";
import { InnovationSection } from "./home/innovation-section";
import { NewsSection } from "./home/news-section";
import { NewsletterModal } from "./home/newsletter-modal";
import { ServicesSection } from "./home/services-section";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeHero, setActiveHero] = useState(0);
  const [activeStat, setActiveStat] = useState(0);
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [footerAnimation, setFooterAnimation] = useState(null);

  const repeatedMarquee = useMemo(() => Array.from({ length: 3 }), []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const heroTimer = window.setInterval(() => {
      setActiveHero((value) => (value + 1) % heroImages.length);
    }, 4200);

    const statTimer = window.setInterval(() => {
      setActiveStat((value) => (value + 1) % stats.length);
    }, 5500);

    return () => {
      window.clearInterval(heroTimer);
      window.clearInterval(statTimer);
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
          activeHero={activeHero}
          repeatedMarquee={repeatedMarquee}
        />
        <AboutSection
          activeStat={activeStat}
          stats={stats}
          arrowIcon={assets.arrowIcon}
          onPrevStat={() =>
            setActiveStat((value) => (value - 1 + stats.length) % stats.length)
          }
          onNextStat={() =>
            setActiveStat((value) => (value + 1) % stats.length)
          }
        />
        <ServicesSection />
        <InnovationSection
          innovations={innovations}
          activeInnovation={activeInnovation}
          sphereArrow={assets.sphereArrow}
          onSelectInnovation={setActiveInnovation}
        />
        <NewsSection news={news} />
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

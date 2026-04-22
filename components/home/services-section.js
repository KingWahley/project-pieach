"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SectionLabel } from "./ui";

const SERVICES = [
  {
    title: "Strategic Planning",
    color: "#a69385",
    image: "/assets/service-applied-research.jpg",
    description:
      " One of our core values are developing a symbiotic relationship between buildings, people and the environment",
  },
  {
    title: "Architecture",
    color: "#a64b52",
    image: "/assets/service-knowledge-transfer.jpg",
    description:
      "With over 100 built projects spanning more than 20 years",
  },
  {
    title: "Interior Architecture",
    color: "#7a8f92",
    image: "/assets/service-technical-support.jpg",
    description:
      "Our approach to interior design is collaborative and combined with discerning artistry, technique and meticulous attention to detail.",
  },
];

export function ServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".sr-panel");
      
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${(panels.length - 1) * 100}%`,
          pin: true,
          scrub: true,
        }
      });

      panels.forEach((panel, i) => {
        if (i !== 0) {
          gsap.set(panel, { yPercent: 100 });
          tl.to(panel, { yPercent: 0, ease: "none" });
        }
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section id="services" className="px-0 py-0" ref={sectionRef}>
      <div className="sr-stack">
        <div className="sr-label">
          <SectionLabel>OUR SERVICES</SectionLabel>
        </div>

        {SERVICES.map((service, index) => (
          <section
            key={service.title}
            className="sr-panel"
            style={{
              "--sr-bg": service.color,
              zIndex: index + 1,
            }}
          >
            <div className="sr-grid">
              <div className="sr-copy">
                <div className="sr-meta">
                  <span>Service {String(index + 1).padStart(2, "0")}</span>
                  <span>Pieach Studio</span>
                </div>

                <h2 className="sr-title">{service.title}</h2>

                <p className="sr-body">{service.description}</p>
              </div>

              <div className="sr-media">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="sr-image"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      <style jsx>{`
        .sr-stack {
          position: relative;
          height: 100vh;
          height: 100svh;
          overflow: hidden;
        }

        .sr-label {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
          padding: 2rem 1.25rem 0;
          pointer-events: none;
        }

        .sr-panel {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          height: 100svh;
          background: var(--sr-bg);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          will-change: transform;
        }

        .sr-grid {
          display: grid;
          gap: 2rem;
          width: 100%;
          height: 100vh;
          height: 100svh;
          padding: 2rem 1.25rem;
          padding-top: 6rem;
        }

        .sr-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
        }

        .sr-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.7;
        }

        .sr-title {
          font-size: clamp(2.5rem, 7vw, 6rem);
          text-transform: uppercase;
          line-height: 0.95;
          font-weight: 600;
        }

        .sr-body {
          max-width: 40rem;
          line-height: 1.8;
          opacity: 0.9;
        }

        .sr-media {
          position: relative;
          overflow: hidden;
          min-height: 320px;
          height: min(72vh, 760px);
        }

        .sr-image {
          object-fit: cover;
        }

        @media (min-width: 1025px) {
          .sr-label {
            padding: 2rem 2rem 0;
          }

          .sr-grid {
            grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
            align-items: center;
            gap: 3rem;
            padding: 3rem 2rem;
            padding-top: 7rem;
          }
        }

        @media (max-width: 1024px) {
          .sr-grid {
            align-content: center;
          }

          .sr-media {
            height: min(42vh, 420px);
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import Image from "next/image";
import { SectionLabel } from "./ui";

const SERVICES = [
  {
    title: "Applied Research",
    color: "#a69385",
    image: "/assets/service-applied-research.jpg",
    description:
      "We take a transdisciplinary approach to fostering human potential development.",
  },
  {
    title: "Knowledge Transfer",
    color: "#a64b52",
    image: "/assets/service-knowledge-transfer.jpg",
    description:
      "We embed knowledge transfer deeply into our collaborative projects.",
  },
  {
    title: "Technical Support",
    color: "#7a8f92",
    image: "/assets/service-technical-support.jpg",
    description:
      "We provide consulting and technical expertise for innovative solutions.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="px-0 py-0">
      <div className="w-full px-5 py-8 xl:px-8">
        <SectionLabel>Service offer</SectionLabel>
      </div>

      <div className="sr-stack">
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
        }

        .sr-panel {
          position: sticky;
          top: 0;
          height: 100vh;
          background: var(--sr-bg);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .sr-grid {
          display: grid;
          gap: 2rem;
          width: 100%;
          height: 100vh;
          padding: 2rem 1.25rem;
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
          .sr-grid {
            grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
            align-items: center;
            gap: 3rem;
            padding: 3rem 2rem;
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

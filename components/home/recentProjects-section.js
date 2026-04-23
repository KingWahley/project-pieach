"use client";

import Image from "next/image";
import { useState } from "react";
import { StickySectionLabel } from "./sticky-section-label";
import { assets, recentProjectss } from "./data";
import { SectionLabel } from "./ui";

export function recentProjectsSection() {
  const [activerecentProjects, setActiverecentProjects] = useState(0);

  const onSelectrecentProjects = (index) => {
    setActiverecentProjects(index);
  };

  return (
    <section className="flex flex-col bg-ultraLightGray px-5 py-8 pt-20 xl:min-h-[calc(100vh+5rem)] xl:p-8">
      <StickySectionLabel
        className="w-full"
        pinClassName="z-20 bg-ultraLightGray pt-2"
      >
        <SectionLabel>Recent Projects</SectionLabel>
      </StickySectionLabel>

      <div className="h-full flex-1 xl:flex">
        <div className="flex w-full flex-col justify-center py-10 xl:w-7/12 2xl:w-8/12">
          <div className="montserrat-font flex h-full items-center text-3xl font-bold uppercase leading-none lg:text-[3.8vw] xl:text-[3.5vw] xl:leading-[80px]">
            <ul className="flex w-auto flex-col items-start">
              {recentProjectss.map((item, index) => (
                <li
                  key={item.title}
                  className={`recentProjects-title mb-2 inline-flex cursor-pointer items-center opacity-30 transition-opacity duration-300 lg:mb-4 xl:mb-2 ${
                    activerecentProjects === index ? "active opacity-100" : ""
                  }`}
                  onMouseEnter={() => onSelectrecentProjects(index)}
                  onFocus={() => onSelectrecentProjects(index)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-2 text-left"
                    onClick={() => onSelectrecentProjects(index)}
                  >
                    <span>{item.title}</span>
                    <span className="arrow-select-sphere relative -right-4 hidden rotate-45 overflow-hidden opacity-0 lg:inline-flex">
                      <Image
                        className="w-[70%] 2xl:w-full"
                        src={assets.sphereArrow}
                        alt=""
                        aria-hidden="true"
                        width={42}
                        height={42}
                      />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex w-full flex-col justify-center py-8 xl:w-5/12 2xl:w-4/12">
          <div className="w-full">
            <div className="relative w-full overflow-hidden aspect-video xl:aspect-[4/3]">
              <Image
                className="h-full w-full object-cover object-top transition-all duration-500"
                src={recentProjectss[activerecentProjects].image}
                alt={recentProjectss[activerecentProjects].title}
                fill
                sizes="(max-width: 1280px) 100vw, 40vw"
              />
            </div>
            <p className="moderustic-font reveal-on-scroll py-8 text-lg leading-relaxed xl:py-6 xl:pr-5">
              {recentProjectss[activerecentProjects].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

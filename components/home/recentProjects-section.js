"use client";

import { StickySectionLabel } from "./sticky-section-label";
import { recentProjectss } from "./data";
import { SectionLabel } from "./ui";
import { FocusRail } from "../ui/focus-rail";

export function RecentProjectsSection() {
  const focusRailItems = recentProjectss.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    meta: project.location,
    imageSrc: project.image,
  }));

  return (
    <section className="flex flex-col bg-ultraLightGray xl:min-h-[calc(100vh+5rem)]">
      <StickySectionLabel
        className="w-full mb-10 px-5 pt-20 xl:px-8 xl:pt-8"
        pinClassName="z-20 bg-ultraLightGray pt-2"
      >
        <SectionLabel>Recent Projects</SectionLabel>
      </StickySectionLabel>

      <div className="w-full flex-1 overflow-hidden">
        <FocusRail
          items={focusRailItems}
          autoPlay={false}
          loop={true}
          className="h-[700px]"
        />
      </div>
    </section>
  );
}

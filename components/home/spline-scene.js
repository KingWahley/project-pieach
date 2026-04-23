"use client";

import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { Component, useEffect, useState } from "react";

const SCENE_URL = "https://prod.spline.design/yNFoWjiAOzCs13pn/scene.splinecode";
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1920&auto=format&fit=crop";

class SplineErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

function HeroFallback() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-PIEACH-black">
      <Image
        src={FALLBACK_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-65"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.5))]" />
    </div>
  );
}

export function SplineScene() {
  const [hasReachedAbout, setHasReachedAbout] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("about");

    if (!aboutSection || hasReachedAbout) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry?.isIntersecting) {
          return;
        }

        setHasReachedAbout(true);
        observer.disconnect();
      },
      { threshold: 0.1 }
    );

    observer.observe(aboutSection);

    return () => observer.disconnect();
  }, [hasReachedAbout]);

  if (hasReachedAbout) {
    return <HeroFallback />;
  }

  return (
    <SplineErrorBoundary fallback={<HeroFallback />}>
      <Spline scene={SCENE_URL} renderOnDemand />
    </SplineErrorBoundary>
  );
}

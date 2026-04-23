"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export function StickySectionLabel({
  children,
  className = "",
  pinClassName = "",
}) {
  const scopeRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scope = scopeRef.current;
    const pin = pinRef.current;

    if (!scope || !pin) {
      return undefined;
    }

    const trigger = ScrollTrigger.create({
      trigger: scope,
      start: "top top+=16",
      end: "bottom top+=96",
      pin,
      pinSpacing: true,
      invalidateOnRefresh: true,
    });

    return () => trigger.kill();
  }, []);

  return (
    <div ref={scopeRef} className={className}>
      <div ref={pinRef} className={pinClassName}>
        {children}
      </div>
    </div>
  );
}

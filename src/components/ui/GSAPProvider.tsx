"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPProviderProps {
  children: ReactNode;
}

export function GSAPProvider({ children }: GSAPProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up GSAP defaults
    gsap.set(".gsap-fade-in", { opacity: 0, y: 50 });
    gsap.set(".gsap-slide-in-left", { opacity: 0, x: -100 });
    gsap.set(".gsap-slide-in-right", { opacity: 0, x: 100 });
    gsap.set(".gsap-scale-in", { opacity: 0, scale: 0.8 });
    gsap.set(".gsap-rotate-in", { opacity: 0, rotation: -15 });

    // Create scroll triggers for common animation classes
    gsap.utils.toArray(".gsap-fade-in").forEach((element) => {
      gsap.to(element as Element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element as Element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "restart none none none",
        },
      });
    });

    gsap.utils.toArray(".gsap-slide-in-left").forEach((element) => {
      gsap.to(element as Element, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element as Element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "restart none none none",
        },
      });
    });

    gsap.utils.toArray(".gsap-slide-in-right").forEach((element) => {
      gsap.to(element as Element, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element as Element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "restart none none none",
        },
      });
    });

    gsap.utils.toArray(".gsap-scale-in").forEach((element) => {
      gsap.to(element as Element, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element as Element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "restart none none none",
        },
      });
    });

    gsap.utils.toArray(".gsap-rotate-in").forEach((element) => {
      gsap.to(element as Element, {
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element as Element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "restart none none none",
        },
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

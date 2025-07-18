"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initial state - page starts invisible and slightly moved
    gsap.set(containerRef.current, {
      opacity: 0,
      y: 20,
    });

    // Animate in
    gsap.to(containerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    // Cleanup function for page exit
    return () => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      {children}
    </div>
  );
}

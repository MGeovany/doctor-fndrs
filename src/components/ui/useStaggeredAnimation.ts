"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface UseStaggeredAnimationProps {
  selector: string;
  stagger?: number;
  duration?: number;
  ease?: string;
  y?: number;
  opacity?: number;
  scale?: number;
  rotation?: number;
  delay?: number;
}

export function useStaggeredAnimation({
  selector,
  stagger = 0.1,
  duration = 0.8,
  ease = "power2.out",
  y = 50,
  opacity = 0,
  scale = 1,
  rotation = 0,
  delay = 0,
}: UseStaggeredAnimationProps) {
  const elementsRef = useRef<Element[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Get all elements matching the selector
    const elements = gsap.utils.toArray(selector);
    elementsRef.current = elements as Element[];

    if (elements.length === 0) return;

    // Set initial state
    gsap.set(elements, {
      opacity,
      y,
      scale,
      rotation,
    });

    // Create the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elements[0] as Element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
      delay,
    });

    tl.to(elements, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotation: 0,
      duration,
      ease,
      stagger,
    });

    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === elements[0]) {
          trigger.kill();
        }
      });
    };
  }, [selector, stagger, duration, ease, y, opacity, scale, rotation, delay]);

  return elementsRef;
}

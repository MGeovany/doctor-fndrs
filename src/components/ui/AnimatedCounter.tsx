"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedCounterProps {
  value: number;
  className?: string;
  duration?: number;
  ease?: string;
  delay?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({
  value,
  className = "",
  duration = 2,
  ease = "power2.out",
  delay = 0,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!counterRef.current || hasAnimated.current) return;

    // Set initial value to 0
    gsap.set(counterRef.current, { innerText: "0" });

    // Create the counter animation
    gsap.to(counterRef.current, {
      innerText: value,
      duration,
      ease,
      delay,
      snap: { innerText: 1 },
      onUpdate: function () {
        if (counterRef.current) {
          const currentValue = Math.round(
            parseInt(counterRef.current.innerText) || 0,
          );
          counterRef.current.innerText = `${prefix}${currentValue}${suffix}`;
        }
      },
      onComplete: function () {
        hasAnimated.current = true;
      },
    });
  }, [value, duration, ease, delay, prefix, suffix]);

  return (
    <span
      ref={counterRef}
      className={`${className} transition-all duration-300`}
    >
      {prefix}0{suffix}
    </span>
  );
}

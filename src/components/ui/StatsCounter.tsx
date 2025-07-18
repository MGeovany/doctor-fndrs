"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  label?: string;
  textSize?: string;
  textColor?: string;
}

export function StatsCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2.5,
  delay = 0,
  className = "",
  label,
  textSize = "text-5xl md:text-7xl",
  textColor = "text-blue-600",
}: StatsCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!counterRef.current || hasAnimated.current) return;

    // Set initial value to 0
    gsap.set(counterRef.current, { innerText: "0" });

    // Create scroll trigger for the counter
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    });

    // Add the counter animation to the timeline
    tl.to(counterRef.current, {
      innerText: value,
      duration,
      ease: "power2.out",
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

    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === counterRef.current) {
          trigger.kill();
        }
      });
    };
  }, [value, duration, delay, prefix, suffix]);

  return (
    <div className={className}>
      <div className={`mb-2 font-extrabold ${textSize} ${textColor}`}>
        <span ref={counterRef} className="inline-block">
          {prefix}0{suffix}
        </span>
      </div>
      {label && (
        <div className="text-lg font-medium text-gray-700 md:text-xl">
          {label}
        </div>
      )}
    </div>
  );
}

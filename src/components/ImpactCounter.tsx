"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface ImpactCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function ImpactCounter({
  value,
  suffix = "",
  duration = 2000,
}: ImpactCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress >= 1) {
        clearInterval(timer);
        setCount(value);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <p ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
      {count}
      {suffix}
    </p>
  );
}

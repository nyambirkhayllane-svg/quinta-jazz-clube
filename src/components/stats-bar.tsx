"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface StatItem {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
}

function StatNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-serif text-3xl font-bold text-white sm:text-4xl">
      {display}
      {suffix}
    </span>
  );
}

/** Dark-glass stats bar with once-only count-up, designed to sit over photos. */
export function StatsBar({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid w-full grid-cols-2 rounded-[28px] border border-white/10 bg-white/5 py-5 backdrop-blur-xl sm:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`flex flex-col items-center justify-center px-3 py-2 text-center sm:py-0 ${
            index % 2 === 1 ? "border-l border-white/10" : index > 0 ? "sm:border-l sm:border-white/10" : ""
          }`}
        >
          <span className="flex flex-wrap items-baseline justify-center gap-x-1.5">
            {stat.prefix ? (
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-stone-300">{stat.prefix}</span>
            ) : null}
            <StatNumber value={stat.value} suffix={stat.suffix} />
          </span>
          <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.18em] text-stone-300">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import type { Translation } from "@/lib/translations";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
} as const;

export function AboutSection({ t }: { t: Translation["about"] }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section id="sobre" className="bg-surface-alt py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">
              <span className="h-px w-10 bg-gold-400/60" aria-hidden />
              {t.eyebrow}
            </p>
            <h2 className="mt-10 max-w-[18ch] font-serif text-4xl font-medium leading-[1.14] tracking-tight text-strong sm:text-5xl">
              {t.titlePre}
              <em className="italic text-gold-400">{t.titleAccent}</em>.
            </h2>
            <p className="mt-10 max-w-[62ch] text-base leading-8 text-muted lg:leading-9">
              {t.descPre}
              <span className="text-gold-500">{t.descHighlight}</span>
              {t.descPost}
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
            <div ref={imageRef} className="relative overflow-hidden rounded-[28px] border border-line">
              <div className="relative h-[340px] w-full sm:h-[400px] lg:h-[460px]">
                <motion.div style={{ y: parallaxY }} className="absolute inset-[-6%_0]">
                  <Image
                    src="/images/quinta-mesa.jpg"
                    alt={t.imageAlt}
                    fill
                    className="object-cover object-[center_62%]"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

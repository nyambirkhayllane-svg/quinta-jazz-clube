"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 bg-overlay text-gold-400 shadow-xl transition hover:scale-105"
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={18} />
    </button>
  );
}

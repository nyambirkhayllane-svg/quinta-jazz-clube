interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Rendered after the title in italic gold, matching the brand style. */
  accent?: string;
  description: string;
  center?: boolean;
  /** Keep light text regardless of theme — for headings over photo overlays. */
  onImage?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  center = false,
  onImage = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : "text-left"}`}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gold-400">
        {eyebrow}
      </p>
      <h2 className={`font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl ${onImage ? "text-white" : "text-strong"}`}>
        {title}
        {accent ? <> <em className="italic text-gold-400">{accent}</em></> : null}
      </h2>
      <p className={`mt-5 text-lg leading-8 ${onImage ? "text-stone-300" : "text-muted"}`}>{description}</p>
    </div>
  );
}

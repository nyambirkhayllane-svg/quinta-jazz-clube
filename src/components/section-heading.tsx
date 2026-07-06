interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Rendered after the title in italic gold, matching the brand style. */
  accent?: string;
  description: string;
  center?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : "text-left"}`}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gold-400">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
        {accent ? <> <em className="italic text-gold-400">{accent}</em></> : null}
      </h2>
      <p className="mt-5 text-lg leading-8 text-stone-400">{description}</p>
    </div>
  );
}

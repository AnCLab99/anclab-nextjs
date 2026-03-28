export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? 'mx-auto max-w-text text-center' : 'max-w-text'}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.05em] text-muted">{eyebrow}</p>
      ) : null}
      <h2 className="text-[28px] font-bold leading-[1.15] text-ink md:text-[40px]">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-body md:text-lg">{description}</p> : null}
    </div>
  );
}

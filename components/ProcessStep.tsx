export function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div>
      <p className="text-[40px] font-bold leading-none text-brand-secondary md:text-[48px]">{number}</p>
      <h3 className="mt-4 text-2xl font-medium text-ink">{title}</h3>
      <p className="mt-3 text-base leading-8 text-body">{description}</p>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export function BehanceCard({ item }: { item: { title: string; category: string; cover: string; href: string } }) {
  return (
    <Link href={item.href} className="group block overflow-hidden rounded-2xl border border-line bg-white transition-all hover:border-brand-secondary hover:shadow-soft">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={item.cover} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
      </div>
      <div className="p-5">
        <h3 className="text-base font-medium leading-7 text-ink transition-colors group-hover:text-brand-primary">{item.title}</h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.05em] text-muted">Behance · {item.category}</p>
      </div>
    </Link>
  );
}

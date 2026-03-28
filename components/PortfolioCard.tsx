import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="overflow-hidden rounded-2xl bg-shell">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </div>
      <div className="pt-4">
        <h3 className="text-xl font-medium leading-8 text-ink transition-colors group-hover:text-brand-primary md:text-[22px]">
          {project.title}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.05em] text-muted">{project.category}</p>
        <p className="mt-2 max-w-md text-sm leading-7 text-body">{project.insight}</p>
      </div>
    </Link>
  );
}

import Link from 'next/link';
import { Container } from './Container';
import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-line bg-white py-12">
      <Container className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-lg font-medium text-ink">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-body">
            Calm design partner for serious builders who want clarity, not noise.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-body md:justify-end">
          <Link href="/work" className="hover:text-brand-primary">Work</Link>
          <Link href="/studio" className="hover:text-brand-primary">Studio</Link>
          <Link href="/process" className="hover:text-brand-primary">Process</Link>
          <Link href="/contact" className="hover:text-brand-primary">Contact</Link>
        </div>
      </Container>
    </footer>
  );
}

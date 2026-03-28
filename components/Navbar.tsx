import Link from 'next/link';
import { Container } from './Container';
import { siteConfig } from '@/data/site';
import { Button } from './Button';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-white/80 backdrop-blur">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-body transition-colors hover:text-brand-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/contact">Start a Project</Button>
        </div>
      </Container>
    </header>
  );
}

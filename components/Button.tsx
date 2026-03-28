import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-brand-primary text-white hover:bg-brand-hover'
      : 'border border-line bg-transparent text-ink hover:border-brand-secondary hover:bg-brand-soft';

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-[0.02em] transition-colors duration-200 ${styles}`}
    >
      {children}
    </Link>
  );
}

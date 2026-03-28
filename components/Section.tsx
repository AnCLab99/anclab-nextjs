import { ReactNode } from 'react';

export function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`py-[72px] md:py-[120px] ${className}`}>{children}</section>;
}

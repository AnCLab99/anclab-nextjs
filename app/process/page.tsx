import { Container } from '@/components/Container';
import { ProcessStep } from '@/components/ProcessStep';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';

export default function ProcessPage() {
  return (
    <>
      <Section className="bg-white">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted">Process</p>
          <h1 className="mt-4 max-w-[14ch] text-[38px] font-bold leading-[1.05] text-ink md:text-[56px]">
            A calm, structured process designed to reduce confusion.
          </h1>
          <p className="mt-6 max-w-text text-lg leading-8 text-body">
            Clear stages. Focused revisions. A way of working that protects both the work and the people behind it.
          </p>
        </Container>
      </Section>
      <Section className="bg-brand-soft pt-0">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <ProcessStep number="01" title="Understand" description="We start by understanding the real problem, not just the request." />
            <ProcessStep number="02" title="Structure" description="Ideas are organized into something clear, useful, and easy to move with." />
            <ProcessStep number="03" title="Design" description="Visual decisions are made to support clarity, not to hide the lack of it." />
            <ProcessStep number="04" title="Refine" description="We refine carefully, with focused revisions and no unnecessary resets." />
          </div>
          <div className="mt-14 max-w-text">
            <h2 className="text-[28px] font-bold text-ink md:text-[32px]">Working principles</h2>
            <div className="mt-5 grid gap-4 text-base leading-8 text-body md:text-lg">
              <p>Projects begin after alignment and initial commitment.</p>
              <p>Revisions are meant for refinement—not for rebuilding the whole direction.</p>
              <p>Working files are not included by default, but can be discussed when needed.</p>
              <p>We take on a limited number of projects to keep the process focused.</p>
            </div>
            <div className="mt-8">
              <Button href="/contact">Start a Project</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

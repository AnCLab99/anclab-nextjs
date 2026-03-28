import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';

export default function StudioPage() {
  return (
    <>
      <Section className="bg-white">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted">Studio</p>
          <h1 className="mt-4 max-w-[16ch] text-[38px] font-bold leading-[1.05] text-ink md:text-[56px]">
            A boutique design partner focused on clarity.
          </h1>
          <p className="mt-6 max-w-text text-lg leading-8 text-body">
            AnC Lab. is built to help ideas become easier to understand, easier to present, and easier to trust.
          </p>
        </Container>
      </Section>
      <Section className="bg-shell pt-0">
        <Container className="grid gap-14">
          <section>
            <h2 className="text-[28px] font-bold text-ink md:text-[40px]">What we believe</h2>
            <p className="mt-4 max-w-text text-base leading-8 text-body md:text-lg">
              Good design is not decoration. It is structure, restraint, and clarity—built to help people understand what matters.
            </p>
          </section>
          <section>
            <h2 className="text-[28px] font-bold text-ink md:text-[40px]">How we work</h2>
            <p className="mt-4 max-w-text text-base leading-8 text-body md:text-lg">
              Calm, structured, and intentional. We do not rush into visuals. We build direction first, then design with purpose.
            </p>
          </section>
          <section>
            <h2 className="text-[28px] font-bold text-ink md:text-[40px]">Behind AnC Lab.</h2>
            <p className="mt-4 max-w-text text-base leading-8 text-body md:text-lg">
              AnC Lab. is intentionally small. Behind it are Andhika and Chasey—people who care about clarity, detail, and respectful collaboration.
            </p>
          </section>
          <section>
            <h2 className="text-[28px] font-bold text-ink md:text-[40px]">Working principles</h2>
            <ul className="mt-4 space-y-3 text-base leading-8 text-body md:text-lg">
              <li>— Clear communication</li>
              <li>— Respect for time</li>
              <li>— Structured thinking</li>
              <li>— Honest process</li>
            </ul>
          </section>
          <div>
            <Button href="/contact">Start a Project</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

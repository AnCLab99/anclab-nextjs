import Link from 'next/link';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { PortfolioCard } from '@/components/PortfolioCard';
import { ProcessStep } from '@/components/ProcessStep';
import { BehanceCard } from '@/components/BehanceCard';
import { featuredProjects, latestBehance } from '@/data/projects';
import { siteConfig } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <Section className="pt-24 md:pt-36">
        <Container>
          <div className="max-w-text">
            <h1 className="hero-display max-w-[12ch] font-bold text-ink">
              Most brands don&apos;t need more design. They need{' '}
              <span className="accent-word text-brand-primary">clarity</span>.
            </h1>

            <p className="mt-6 max-w-[38rem] text-lg leading-8 text-body md:text-[22px] md:leading-10">
              AnC Lab. helps structure your ideas into clear, functional visuals—so
              your brand doesn&apos;t just look better, but actually works.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">Start a Project</Button>
              <Button href="/work" variant="secondary">
                View Selected Work
              </Button>
            </div>

            <p className="mt-8 max-w-xl text-base leading-8 text-muted">
              If your brand feels unclear, design won&apos;t fix it alone.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white py-24 md:py-24">
        <Container>
          <div className="mx-auto max-w-text text-center">
            <h2 className="text-[30px] font-bold leading-[1.2] text-ink md:text-[40px]">
              Most brands don&apos;t struggle with creativity.
              <br />
              They struggle with clarity.
            </h2>

            <div className="mx-auto my-8 h-px w-14 bg-line" />

            <h2 className="text-[28px] font-bold leading-[1.2] text-ink md:text-[38px]">
              We don&apos;t just design.
              <br />
              We <span className="text-brand-primary">structure clarity</span>—
              <br />
              so your brand communicates without confusion.
            </h2>
          </div>
        </Container>
      </Section>

      <Section className="bg-shell">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Focused work. Built with clarity."
            description="We keep things simple—focusing on areas where structure and clarity make the biggest impact."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Brand Identity',
                description:
                  'Not just a logo—a system that keeps your brand consistent, recognizable, and clear.'
              },
              {
                title: 'Presentation',
                description:
                  'Clear structure, focused storytelling, and visuals that support your message—not distract from it.'
              },
              {
                title: 'Illustration',
                description:
                  'Visual elements that add personality without breaking clarity.'
              }
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-line bg-white p-6 transition-all hover:border-brand-secondary hover:shadow-soft"
              >
                <h3 className="text-2xl font-medium text-ink">{service.title}</h3>
                <p className="mt-4 text-base leading-8 text-body">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Selected Work"
            title="Work built with structure, not guesswork."
            description="A curated selection across identity, presentation, and illustration—chosen for clarity, consistency, and direction."
          />

          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <PortfolioCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-[620px] text-center">
            <p className="text-base leading-8 text-muted">
              Not everything we create is shown here. Only what represents how we
              think and work.
            </p>

            <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/work" variant="secondary">
                View All Work
              </Button>
              <Button href="/contact">Start a Project</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-soft">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="A calm, structured way to build clarity."
            description="No chaos. No guesswork. Just a clear process that helps your ideas take shape."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <ProcessStep
              number="01"
              title="Understand"
              description="We start by understanding the real problem—not just the request."
            />
            <ProcessStep
              number="02"
              title="Structure"
              description="Ideas are organized into something clear, logical, and usable."
            />
            <ProcessStep
              number="03"
              title="Design"
              description="Visuals are built to support clarity—not replace it."
            />
            <ProcessStep
              number="04"
              title="Refine"
              description="We refine carefully, without overcomplicating what already works."
            />
          </div>

          <div className="mt-12">
            <Button href="/process" variant="secondary">
              See Full Process
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="max-w-xl">
              <div className="mb-6 h-px w-10 bg-line" />

              <h2 className="text-[28px] font-bold leading-[1.15] text-ink md:text-[40px]">
                Behind the Lab
              </h2>

              <p className="mt-3 font-serif text-[28px] leading-[1.2] text-brand-primary md:text-[32px]">
                Built by people who care about clarity.
              </p>

              <p className="mt-6 text-base leading-8 text-body">
                AnC Lab. is intentionally small—built to stay focused, not crowded.
              </p>

              <p className="mt-4 text-base leading-8 text-body">
                Behind it are people who care about structure, clarity, and doing
                things properly—without unnecessary noise.
              </p>

              <p className="mt-6 text-[22px] font-medium text-ink">
                Andhika &amp; Chasey
              </p>

              <p className="mt-3 text-base leading-8 text-body">
                Not a large agency. Not a content machine. Just a focused studio that
                works with intention.
              </p>
            </div>

            <div className="relative min-h-[380px] overflow-hidden rounded-[24px] border border-line bg-shell">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(47,94,158,0.12),_transparent_55%)]" />
              <div className="absolute -right-10 bottom-0 top-0 w-[70%] rounded-full border border-brand-secondary/40" />
              <div className="absolute inset-10 rounded-[24px] border border-brand-secondary/50" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-shell">
        <Container>
          <SectionHeading
            eyebrow="Latest"
            title="Latest from the Lab"
            description="Recent uploads, explorations, and published work from Behance."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {latestBehance.map((item) => (
              <BehanceCard key={item.title} item={item} />
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={siteConfig.behanceUrl} variant="secondary">
              Visit Behance
            </Button>
            <Button href={siteConfig.instagramUrl} variant="secondary">
              Visit Instagram
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-primary py-24 md:py-36">
        <Container>
          <div className="mx-auto max-w-text text-center">
            <h2 className="text-[28px] font-bold leading-[1.15] text-white md:text-[40px]">
              If you&apos;re serious about building something clear, we should talk.
            </h2>

            <p className="mx-auto mt-4 max-w-[35rem] text-base leading-8 text-white/80 md:text-lg">
              Tell us what you&apos;re building—and what feels unclear. We&apos;ll help
              you structure it.
            </p>

            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Start the Conversation
              </Button>
            </div>

            <p className="mt-4 text-sm text-white/70">
              Prefer to explore first?{' '}
              <Link href="/work" className="underline">
                View Selected Work
              </Link>
            </p>

            <p className="mt-3 text-sm text-white/60">
              We take on a limited number of projects to keep the process focused.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { PortfolioCard } from '@/components/PortfolioCard';
import { Button } from '@/components/Button';
import { projects } from '@/data/projects';

export default function WorkPage() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Work"
          title="Selected projects across identity, presentation, and illustration."
          description="Curated to show how AnC Lab. thinks, structures, and builds clarity—not just how things look."
        />
        <div className="mt-8 flex flex-wrap gap-5 border-b border-line pb-3 text-sm font-medium text-muted">
          <span className="text-brand-primary">All</span>
          <span>Brand Identity</span>
          <span>Presentation</span>
          <span>Illustration</span>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {projects.map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-text text-center">
          <p className="text-lg leading-8 text-muted">Not everything needs to be loud. Some work just needs to be clear.</p>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">Start a Project</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

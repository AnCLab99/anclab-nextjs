import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) notFound();

  return (
    <>
      <Section className="bg-white pb-16 md:pb-20">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted">{project.category}</p>
          <h1 className="mt-4 max-w-[12ch] text-[38px] font-bold leading-[1.05] text-ink md:text-[56px]">{project.title}</h1>
          <p className="mt-5 max-w-text text-lg leading-8 text-body">{project.summary}</p>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[24px] bg-shell">
            <Image src={project.cover} alt={project.title} fill className="object-cover" />
          </div>
        </Container>
      </Section>

      <Section className="bg-paper pt-0">
        <Container className="grid gap-16">
          <article className="grid gap-14">
            <section>
              <h2 className="text-[28px] font-bold text-ink md:text-[32px]">Context</h2>
              <p className="mt-4 max-w-text text-base leading-8 text-body md:text-lg">{project.context}</p>
            </section>
            <section>
              <h2 className="text-[28px] font-bold text-ink md:text-[32px]">Challenge</h2>
              <p className="mt-4 max-w-text text-base leading-8 text-body md:text-lg">{project.challenge}</p>
            </section>
            <section>
              <h2 className="text-[28px] font-bold text-ink md:text-[32px]">Direction</h2>
              <p className="mt-4 max-w-text text-base leading-8 text-body md:text-lg">{project.direction}</p>
            </section>
            <section>
              <h2 className="text-[28px] font-bold text-ink md:text-[32px]">Execution</h2>
              <ul className="mt-4 max-w-text space-y-3 text-base leading-8 text-body md:text-lg">
                {project.execution.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-[28px] font-bold text-ink md:text-[32px]">Result</h2>
              <p className="mt-4 max-w-text text-base leading-8 text-body md:text-lg">{project.result}</p>
            </section>
          </article>
          <div className="flex flex-wrap gap-4">
            <Button href="/work" variant="secondary">Back to Work</Button>
            <Button href="/contact">Start a Project</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

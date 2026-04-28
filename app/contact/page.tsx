import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

export default function ContactPage() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted">Contact</p>
            <h1 className="mt-4 max-w-[12ch] text-[38px] font-bold leading-[1.05] text-ink md:text-[56px]">
              Let&apos;s build something clear.
            </h1>
            <p className="mt-6 max-w-[34rem] text-lg leading-8 text-body">
              Tell us a bit about your project. We&apos;ll respond with clarity, not confusion.
            </p>
            <p className="mt-8 text-sm leading-7 text-muted">We review every inquiry carefully. Response time: 1–2 business days.</p>
          </div>
          <form className="grid gap-5 rounded-[24px] border border-line bg-paper p-6 md:p-8">
            <label className="grid gap-2 text-sm font-medium text-body">
              Name
              <input className="rounded-xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-primary" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-body">
              Email
              <input className="rounded-xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-primary" placeholder="you@example.com" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-body">
              Project Type
              <select className="rounded-xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-primary">
                <option>Brand Identity</option>
                <option>Presentation</option>
                <option>Illustration</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-body">
              Budget Range
              <select className="rounded-xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-primary">
                <option>pay as much as you want</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-body">
              Project Description
              <textarea className="min-h-[160px] rounded-xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-primary" placeholder="What are you trying to build, and what feels unclear right now?" />
            </label>
            <button type="submit" className="inline-flex justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-medium tracking-[0.02em] text-white transition hover:bg-brand-hover">
              Start the Conversation
            </button>
            <p className="text-sm leading-7 text-muted">
              Projects are approached with a structured process, clear communication, and mutual respect.
            </p>
          </form>
        </div>
      </Container>
    </Section>
  );
}

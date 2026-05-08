import Image from 'next/image';
import { Container } from '../Container';
import { Eyebrow } from '../Eyebrow';
import { Button } from '../Button';
import { Reveal } from '../Reveal';
import { site } from '@/data/site';

export function ClosingCTA() {
  return (
    <section className="relative overflow-hidden border-t border-cream/[0.06]">
      <div className="absolute inset-0 -z-0">
        <Image
          src="/stock/skyline/02-lagos-lagoon.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover image-graded opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink" />
      </div>

      <Container wide className="relative z-10 py-24 lg:py-40 text-center">
        <Reveal>
          <Eyebrow className="mb-8 justify-center">Start a Conversation</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-line text-display-lg text-cream text-balance mx-auto max-w-4xl">
            Have a project in mind?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-cream/80 leading-relaxed text-pretty mx-auto max-w-2xl text-base sm:text-lg">
            A private home in Ikoyi, a joint-venture estate in Gbagada, a portfolio acquisition,
            or a public-sector commission in Abuja or Lagos — start the conversation.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" variant="primary">
              Schedule a meeting
            </Button>
            <a
              href={`tel:${site.contact.phones[0].replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm text-cream hover:text-gold transition-colors"
            >
              {site.contact.phones[0]}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

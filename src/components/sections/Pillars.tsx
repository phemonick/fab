import Image from 'next/image';
import { Container } from '../Container';
import { Eyebrow } from '../Eyebrow';
import { Reveal } from '../Reveal';
import { site } from '@/data/site';

export function Pillars() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 border-t border-cream/[0.06]">
      <Container wide>
        <div className="max-w-3xl mb-16 lg:mb-24">
          <Reveal>
            <Eyebrow className="mb-6">Why FAB</Eyebrow>
            <h2 className="display-line text-display-md text-cream text-balance">
              Five reasons developers, ministries, and homeowners hire us.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-px bg-cream/[0.06] lg:grid-cols-2 xl:grid-cols-5 border border-cream/[0.06]">
          {site.pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 0.08}
              className="bg-ink p-8 lg:p-10 transition-colors duration-500 hover:bg-ink-700"
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif text-gold/70 text-sm tabular-nums">
                  0{i + 1}
                </span>
                <span aria-hidden className="block h-px flex-1 bg-cream/10" />
              </div>
              <h3 className="font-serif text-xl text-cream mb-4 leading-tight text-balance">
                {pillar.title}
              </h3>
              <p className="text-sm text-warmgrey-400 leading-relaxed text-pretty">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>

      <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 opacity-20 hidden lg:block">
        <Image
          src="/stock/architecture/01-concrete-line.jpg"
          alt=""
          fill
          sizes="384px"
          className="object-cover image-graded"
        />
      </div>
    </section>
  );
}

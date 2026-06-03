import { Container } from '../Container';
import { Eyebrow } from '../Eyebrow';
import { Reveal } from '../Reveal';
import { Button } from '../Button';
import { services } from '@/data/services';

export function SectorsTeaser() {
  return (
    <section className="border-t border-cream/[0.06] py-24 lg:py-32">
      <Container wide>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow className="mb-6">What We Do</Eyebrow>
              <h2 className="display-line text-display-md text-cream text-balance mb-6">
                Six service lines. One firm to call.
              </h2>
              <p className="text-warmgrey-400 leading-relaxed max-w-md text-pretty">
                Most clients come to us for the first three. Most repeat clients hire us for two or more.
              </p>
              <div className="mt-8">
                <Button href="/services" variant="ghost">
                  Explore services
                </Button>
              </div>
            </Reveal>
          </div>

          <ul className="lg:col-span-8 grid gap-px bg-cream/[0.06] border border-cream/[0.06] sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={i * 0.05}
                className="bg-ink p-6 lg:p-8 transition-colors duration-500 hover:bg-ink-700"
              >
                <li>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-serif text-gold/70 text-sm tabular-nums">
                      0{i + 1}
                    </span>
                    <h3 className="font-serif text-xl text-cream leading-tight">{s.name}</h3>
                  </div>
                  <p className="text-sm text-warmgrey-400 leading-relaxed text-pretty">
                    {s.short}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

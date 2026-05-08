import { Container } from '../Container';
import { StatCounter } from '../StatCounter';
import { Reveal } from '../Reveal';
import { site } from '@/data/site';

export function StatStrip() {
  return (
    <section className="border-y border-cream/[0.06] bg-ink-800 py-12 lg:py-16">
      <Container wide>
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 sm:gap-8">
          {site.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <StatCounter number={s.number} label={s.label} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

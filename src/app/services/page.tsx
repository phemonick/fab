import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Real estate development, turn-key construction, joint-venture, luxury sales, hospitality, government contracts (Lagos State + Federal), and concrete production. End-to-end, by one Nigerian firm.',
};

const MAINTENANCE = [
  { card: 'Renovation', body: 'Bathrooms, kitchens, joinery, full-flat refurbishments.' },
  { card: 'Building Systems', body: 'Electrical, plumbing, fire safety upgrades.' },
  { card: 'Repairs & Restoration', body: 'Roof leaks, brickwork, fire damage, glazing, granite removal, protective coatings.' },
  { card: 'Finishing', body: 'Painting, flooring, replacement of floor coverings, glazing of broken windows.' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Six service lines. <br className="hidden md:block" />One firm to call.
          </>
        }
        subtitle="From private commissions to estate-scale joint ventures and government infrastructure, we run the work end-to-end."
        image={{ src: '/stock/architecture/02-concrete-blocks.jpg', alt: '' }}
      />

      {/* SERVICES */}
      <section className="py-24 lg:py-32">
        <Container wide>
          <div className="grid gap-px bg-cream/[0.06] border border-cream/[0.06] md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal
                key={s.slug}
                id={s.slug}
                delay={i * 0.05}
                className="bg-ink p-8 lg:p-10 transition-colors duration-500 hover:bg-ink-700 scroll-mt-24"
              >
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-serif text-gold/70 text-sm tabular-nums">
                    0{i + 1}
                  </span>
                  <span aria-hidden className="block h-px flex-1 bg-cream/10" />
                </div>
                <h2 className="font-serif text-2xl text-cream leading-tight mb-5 text-balance">
                  {s.name}
                </h2>
                <p className="text-sm text-warmgrey-400 leading-relaxed text-pretty">
                  {s.full}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CONCRETE PRODUCTION */}
      <section className="border-t border-cream/[0.06] bg-ink-800 py-24 lg:py-32">
        <Container wide>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20 items-center">
            <Reveal className="lg:col-span-5">
              <Eyebrow className="mb-6">Vertical Integration</Eyebrow>
              <h2 className="display-line text-display-md text-cream text-balance mb-6">
                Concrete to our own standard.
              </h2>
              <p className="text-cream/85 leading-relaxed text-pretty max-w-prose">
                A vertically integrated concrete operation lets us guarantee mix quality and delivery
                times on our own sites — and supply third-party projects when capacity allows. We
                produce to our own internal standards before we produce to a contract.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.15} className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/stock/architecture/02-concrete-blocks.jpg" alt="" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover image-graded" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* MAINTENANCE */}
      <section className="border-t border-cream/[0.06] py-24 lg:py-32">
        <Container wide>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow className="mb-6">Maintenance & Renovations</Eyebrow>
                <h2 className="display-line text-display-md text-cream text-balance">
                  When the build needs care, not replacement.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8 grid gap-px bg-cream/[0.06] border border-cream/[0.06] sm:grid-cols-2">
              {MAINTENANCE.map((m, i) => (
                <Reveal
                  key={m.card}
                  delay={i * 0.06}
                  className="bg-ink p-7 transition-colors duration-500 hover:bg-ink-700"
                >
                  <h3 className="font-serif text-xl text-cream leading-tight mb-3">{m.card}</h3>
                  <p className="text-sm text-warmgrey-400 leading-relaxed">{m.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-cream/[0.06] py-24 lg:py-28">
        <Container wide>
          <div className="text-center max-w-3xl mx-auto">
            <Reveal>
              <Eyebrow className="mb-6 justify-center">Workforce</Eyebrow>
              <p className="display-line text-display-sm text-cream text-balance">
                Twenty specialized staff. Thirty contract personnel. One stop, all building works,
                large or small.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-10">
              <Button href="/contact" variant="primary">
                Start a conversation
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
